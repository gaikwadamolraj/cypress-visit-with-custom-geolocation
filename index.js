const setLocation = (win, latitude = 51.507351, longitude = -0.127758) => win.navigator.geolocation.getCurrentPosition = (success) => {
  success({
    coords: {
      latitude,
      longitude,
    }, timestamp: Date.now()
  });
}

const registerCommand = (name = "visitWithCustomGeoLoc") => {
  const getByCommand = (url, latitude, longitude) => {
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