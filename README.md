# cypress-visit-with-custom-geolocation
This will describes how to set up the custom geo location. Also you can use this if you dont have permission to enable location on your browser.



## When to use this
- Dont have permission to browser to enable the geo location
- Want to test fucntionality for diff geolocation or gps tracker

## Below two functions are added
```sh
visitWithCustomGeoLoc(url, latitude, longitude)
```
```sh
setGeoLocation(latitude, longitude)
```

## How to use in your cypress application
### Install package
```sh
npm i cypress-visit-with-custom-geolocation
```

## Add custom command to your commands.js file
Go to /cypress/support/commands.js and add below code.
```sh
import {registerCommand} from 'cypress-visit-with-custom-geolocation'
registerCommand();
```

## How to use visitWithCustomGeoLoc() in your script
```sh
cy.visitWithCustomGeoLoc("https://goole.com", 51.507351, -0.127758);
```

## How to use setGeoLocation() in your script
```sh
cy.setGeoLocation(51.507351, -0.127758);
```

### Working example
```sh
https://github.com/gaikwadamolraj/custom-geo-location-cypress
```

### Author
 Amol Gaikwad

 [LinkedIn](https://www.linkedin.com/in/gaikwadamolraj/)

 [Email](mailto:gaikwadamolraj@gmail.com)
