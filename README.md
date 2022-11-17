# Destination Hub Website
A content portal to showcase and (virtually) experience destinations. Built with a Jamstack (https://jamstack.org): Node.js, Next.js, React, GraphQL and Keystone headless CMS with PostgreSql.

## Dev Environment Setup

### Prereqs and Config (install commands for Ubuntu 20.04)

0. Run apt update and apt upgrade if needed before starting

1. Node.js v14.17.5  
   a. Add nodejs v14 repos and install nodejs

   - curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
   - sudo apt -y install nodejs npm

2. Yarn v1.22.11

   - sudo npm install -g yarn # make sure /usr/local/bin is in PATH

3. Postgres database (configured in destination-svc/keystone.ts) - may replace with mongo later -

   - sudo apt -y install postgresql postgresql-contrib
   - sudo vi /etc/postgresql/12/main/pg_hba.conf #change auth type to md5 for new user
     add line 'local all keystone md5'
   - sudo service postgresql start
   - sudo passwd postgres #set a password for postgres user
   - sudo -u postgres psql #connect to db server as postgres

   a. Config expects user 'keystone' with password 'keystone' that has full permissions on database.  Substitute your own secure credentials.

   - create user keystone with password 'keystone';
   - alter user keystone with Superuser;

   b. Config expects local db named 'destination'

   - create database destination;
   - grant all privileges on database destination to keystone; #redundant for superuser or if db is owned by user

   c. Log in to new db with new user to test

   - psql -U keystone --password destination

   d. (Optional) Import sample data -- TODO: replace with seed data process below.  Run this, then seed data to keep internal ID's for foreign keys.  Seed data load will not replace/update these rows, but FIPS Code will not be set for them.

   - psql destination -U keystone --password < destination-svc/data/destination/sample_data.sql

4. Install dependencies
   a. Service
   - cd destination-svc
   - yarn install
   b. UI
   - cd destination-ui
   - yarn install

5. Seed data load process
   - yarn dev  #applies schema changes
   - yarn seed-data  #imports data
   - yarn dev  #run with admin to verify

### Run local

1. Run start-svc.sh to start backend service on port 3000 (or run 'yarn dev' in destination-svc folder)
2. Run start-ui.sh to start UI on port 3080 (or run 'yarn dev' in destination-ui folder)

### Data Schema Change Process (Service folder)

1. Write schema code in 'schema.ts' using Keystone syntax
2. Start/restart service and changes will be applied

### UI Data ORM (UI folder)

1. Write query/mutation
2. Save in a .graphQL file in 'graphql/' 'query'- or 'mutation'-folder
3. Run 'yarn gen' to generate nodejs types
   1. cd destination-ui
   2. yarn gen

### Additional Libraries and Tools

1. UI
   a. React https://reactjs.org
   b. Next.js https://nextjs.org
   c. Chakra-UI https://chakra-ui.com
   d. graphql-codegen https://www.graphql-code-generator.com
   e. Apollo client https://www.apollographql.com/docs/react/
2. Service
   a. Keystone.js https://keystonejs.com
   b. Prisma https://www.prisma.io
