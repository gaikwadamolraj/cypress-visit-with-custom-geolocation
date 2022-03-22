# cypress-visit-with-custom-geolocation
This will describes how to set up the custom geo location. Also you can use this if you dont have permission to enable location on your browser.

## When to use this
- Dont have permission to browser to enable the geo location
- Want to test fucntionality for diff geolocation or gps tracker


## How to use in your cypress application
### Install package
```sh
npm i cypress-visit-with-custom-geolocation
```

### Add custom command to your commands.js file
Go to /cypress/support/commands.js and add below code.
```sh
import {registerCommand} from '@apple/cypressidms'
registerCommand();
```

### How to use in your script
Go to /cypress/support/commands.js and add below code.
```sh
cy.visitWithCustomGeoLoc("https://goole.com", 51.507351, -0.127758);
```