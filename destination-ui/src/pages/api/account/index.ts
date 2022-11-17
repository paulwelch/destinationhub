import { NextApiRequest, NextApiResponse } from 'next'
import * as dataStore from "../../../generated/graphql";

import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  

    //TODO: move values to config
    const httpLink = createHttpLink({
        uri: 'http://localhost:3000/api/graphql',
        credentials: 'same-origin'
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });

    //TODO: data validation
    //TODO: implement update (there is no upsert (yet))
    if( req.body.values.id ){
        //Update existing account
        try {
            const result = await client.mutate({
                mutation: dataStore.UpdateAccountDocument,
                variables: {
                    id: req.body.values.id,
                    firstName: req.body.values.firstName,
                    lastName: req.body.values.lastName,
                    phone: req.body.values.phone,
                    address1: req.body.values.address1,
                    address2: req.body.values.address2,
                    city: req.body.values.city,
                    zip: req.body.values.zip,
                    stateCode: req.body.values.state,
                },
            });
            console.log("Result: \n" +  result);
            res.status(200).json({ id: result.data.id });
        } catch(e) {
            //TODO: better error handling and logging
            console.log("Exception: " + e);
            res.status(500).json({error: e});
        }
    } else {
        //Insert new account
        try {
            const result = await client.mutate({
                mutation: dataStore.CreateAccountDocument,
                variables: {
                    firstName: req.body.values.firstName,
                    lastName: req.body.values.lastName,
                    phone: req.body.values.phone,
                    address1: req.body.values.address1,
                    address2: req.body.values.address2,
                    city: req.body.values.city,
                    zip: req.body.values.zip,
                    stateCode: req.body.values.state,
                    userName: req.body.values.email,
                    userEmail: req.body.values.email,
                    userPassword: "testtest",
                },
            });
            console.log("Result: \n" +  result);
            res.status(200).json({ id: result.data.id });
        } catch(e) {
            //TODO: better error handling and logging
            console.log("Exception: " + e);
            res.status(500).json({error: e});
        }
    } 
}
