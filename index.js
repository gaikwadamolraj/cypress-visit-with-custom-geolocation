const setLocation = (win, latitude = 12.92, longitude = -10.50) => win.navigator.geolocation.getCurrentPosition = (success) => {
  success({
    coords: {
      latitude,
      longitude,
    }, timestamp: Date.now()
  });
}

const registerCommand = (name = "visitWithCustomGeoLoc") => {
  const getByCommand = (url, latitude = 51.507351, longitude = -0.127758) => {
    cy.visit(url, {
      onBeforeLoad: (win) => setLocation(win, latitude, longitude)
    })
  }
  Cypress.Commands.add(name, getByCommand);
}
const setGeoLocation = (latitude, longitude) => cy.window().then((win) => setLocation(win, latitude, longitude))
Cypress.Commands.add('setGeoLocation', setGeoLocation)

module.exports = {
  registerCommand,
  setGeoLocation
}