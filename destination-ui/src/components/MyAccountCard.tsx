import React from "react";
import {
  Flex,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface MyAccountCardProps {
  id?: string;
  isSubmitting: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: number;
}

const MyAccountCard: React.FC<MyAccountCardProps> = (props) => {
  //TODO: authentication on api endpoints
  function saveAccount(values) {
    const result = fetch("/api/account", {
      body: JSON.stringify({ values }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }

  return (
    <VStack>
      <Formik
        initialValues={{
          id: props.id,
          firstName: props.firstName,
          lastName: props.lastName,
          address1: props.address1,
          address2: props.address2,
          city: props.city,
          state: props.state,
          zip: props.zip,
          phone: props.phone,
          email: props.email,
        }}
        // TODO: implement validation - do we need validation here or below Form/Field or both?
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            saveAccount(values);
            actions.setSubmitting(false);
          }, 400);
        }}
      >
        {(props) => (
          <Form>
            <Field name="id">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="id"
                    name="id"
                    type="text"
                    hidden
                    readOnly
                  />
                </FormControl>
              )}
            </Field>

            <HStack width="100%">
              <Flex width="9em">First Name</Flex>
              <Field name="firstName">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.firstName && form.touched.firstName}
                  >
                    <Input
                      {...field}
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="firstName"
                      required
                      placeholder="First Name"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">Last Name</Flex>
              <Field name="lastName">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.lastName && form.touched.lastName}
                  >
                    <Input
                      {...field}
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="lastName"
                      required
                      placeholder="Last Name"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">Address</Flex>
              <Field name="address1">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.address1 && form.touched.address1}
                  >
                    <Input
                      {...field}
                      id="address1"
                      name="address1"
                      type="text"
                      autoComplete="address1"
                      required
                      placeholder="Address"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">Address Line 2</Flex>
              <Field name="address2">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.address2 && form.touched.address2}
                  >
                    <Input
                      {...field}
                      id="address2"
                      name="address2"
                      type="text"
                      autoComplete="address2"
                      placeholder="Address Line 2"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">City, State Zip</Flex>
              <Field name="city">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.city && form.touched.city}
                  >
                    <Input
                      {...field}
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="city"
                      required
                      placeholder="City"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="state">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.state && form.touched.state}
                  >
                    <Input
                      {...field}
                      id="state"
                      name="state"
                      type="text"
                      autoComplete="state"
                      required
                      placeholder="State"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="zip">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.zip && form.touched.zip}>
                    <Input
                      {...field}
                      id="zip"
                      name="zip"
                      type="number"
                      autoComplete="zip"
                      required
                      placeholder="Zip"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">Phone</Flex>
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<PhoneIcon color="gray.300" />}
                      />
                      <Input
                        {...field}
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="phone"
                        required
                        placeholder="Phone number"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <HStack width="100%">
              <Flex width="9em">email</Flex>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input
                      {...field}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="email"
                    />
                  </FormControl>
                )}
              </Field>
            </HStack>

            <Button
              mt={4}
              colorScheme="blue"
              isLoading={props.isSubmitting}
              disabled={props.isSubmitting}
              type="submit"
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default MyAccountCard;
