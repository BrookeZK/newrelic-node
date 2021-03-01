# newrelic-node

#### By Brooke K., last updated 02/28/2021

## Technologies Used

* _Node_
* _Express_
* _New Relic_

## Description
A basic node server built with express to test out new relic and its application performance monitoring tools

## Setup/Installation Requirements

* Download or clone this repo
* Create an account on New Relic
* From the home page of your New Relic account, select to "add data" from a **Node** applicaiton and follow along with the instructions and steps. Selecting this option will create an application on your user dashboard and generate credentials (via the `newrelic.js` file download) to add to the source code in this project repo.
* Either copy the contents of the `newrelic.js` config file that you download from the previous step into the `newrelic.js` file in this repo, _or_ find and copy over the `app_name` and `license_key` values.
* In your terminal of choice, navigate to the root level of the project directory and run `npm install`
* To run the application, within the root level of the project directory and run `node app.js`. This will start the node server and establish the connection with new relic's application performance monitoring services.

## Known Bugs
There are no known bugs currently.

## License
MIT

Copyright (c) 2021
