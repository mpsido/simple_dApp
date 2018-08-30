# tiny dApp sandbox

Metamask refuses to be a "provider" for "non encrypted" webpages. So we need to serve an https webpage to enable blockchain transactions.

## Generate https certificates

Generate the encryption keys for https using openssl:

    openssl req -newkey rsa:2048 -nodes -keyout private.key -x509 -days 365 -out certificate.crt

## Deploy the contract

Use remix to deploy the Election smart contract on "test blockchain Ropsten"

Copy file Election.sol and click "Deploy" button.

## Interact with your smart contract.

Update the contractAbi and contractAddress variables in app.js with the values you will get from Remix IDE.

## Start the application

    node app.js

Your dApp is running on https://localhost:1234