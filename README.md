# PolkAuction UI
User Interface for the [PolkAuction core](https://github.com/CrommVardek/polk-auction-core)

## Requirements

 - NodeJs

## Build (with Docker)

`docker build -t polk-auction-ui .`

## Run

First install or upgrade yarn with the following command :

`npm install --global yarn`

Then install the packages with :

`yarn`

> Note: Polk-auction UI is requesting data from PolkAuction Core, refer to the link above for instructions to run it before running an instance of PolkAuction UI. You can also change the endpoint in the .env configuration file if your Polkauction Core instance's endpoint is different (i.e. you changed it).

Run Locally : `yarn start`

(Accessible at http://localhost:3000/)

Run with Docker : `docker-compose up -d --build`

(Accessible at http://127.0.200.1)

## Test

Tests : `yarn test`

## Contributions, issues and PR

We are open to contributions, ideas, issues, etc. Feel free to open a PR or an issue.

For both the issue and the PR, a context is necessary.