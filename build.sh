#!/usr/bin/env bash

yarn global add lerna

yarn install
yarn bootstarp
yarn build

cp -r -f ./packages/sensoro-ui-site/public  ./
