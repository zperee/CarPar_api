# CarPar Api
The CarPar REST API is the backend for the [Mobile App](https://github.com/zperee/CarPar_app) and [Web App](https://github.com/zperee/CarPar_web) build during the fall semester 2020. 
The project was part of the subject Web development of the bachelor digital business management from the [university of applied sciences of the grisons](https://www.fhgr.ch/en/).

## Technologies
* Node.js Express :rocket:
* MongoDB :herb:
* Typescript :performing_arts:
* Heroku :gear:

## Endpoints
The API is located under following url [API](https://carpar-api.herokuapp.com).

## Commands 
Start api during local development: `npm run dev`

Push directly to Heroku `git push -f heroku main` (Backup for Github actions)

See logs from Heroku `heroku logs --tail --app carpar-api`

## Initialize with 
The project was created with the help of this post:
[Tutorial](https://medium.com/javascript-in-plain-english/typescript-node-js-express-js-create-a-backend-application-f5110dbe5c19)

Setup of the Heroku Pipeline:
[GitHub Action](https://github.com/AkhileshNS/heroku-deploy)
