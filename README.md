# PolkAuction UI
User Interface for the [PolkAuction core](https://github.com/CrommVardek/polk-auction-core)

## Requirements

### To be installed :

 - NodeJs

Once node.js is installed, install or upgrade yarn with the following command :

`npm install --global yarn`

Then install the packages with :

`yarn`

## Build (with Docker)

`docker build -t polk-auction-ui .`

## Run

> Note: Polk-auction UI is requesting data from PolkAuction Core, refer to the link above for instructions to run it before running an instance of PolkAuction UI. You can also change the endpoint in the .env configuration file if your Polkauction Core instance's endpoint is different (i.e. you changed it).

Run Locally : `yarn start`

(Accessible at http://localhost:3000/)

Run with Docker : `docker-compose up -d --build`

(Accessible at http://127.0.200.1)

## Test

Tests : `yarn test`

## Configuration

In case the URL (IP and/or port) of the polk-auction-server has been changed (either directly or by forwarding URL), you need to adapt the POLK_AUCTION_ENDPOINT value in [the .env.prod file](./.env.prod)

## Contributions, issues and PR

We are open to contributions, ideas, issues, etc. Feel free to open a PR or an issue.

For both the issue and the PR, a context is necessary.
