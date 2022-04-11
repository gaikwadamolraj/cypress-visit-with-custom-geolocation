const setLocation = (win, latitude = 51.507351, longitude = -0.127758) => win.navigator.geolocation.getCurrentPosition = (success) => {
  success({
    coords: {
      latitude,
      longitude,
    }, timestamp: Date.now()
  });
}

const registerCommand = (name = "visitWithCustomGeoLoc") => {
  const getByCommand = (win, url, latitude, longitude) => {
    cy.visit(url, {
      onBeforeLoad: () => setInterval(() => setLocation(win, latitude, longitude), 100)
    })
  }
  Cypress.Commands.add(name, getByCommand);
}

const setGeoLocation = (win, latitude, longitude) => setInterval(() => setLocation(win, latitude, longitude), 100);

Cypress.Commands.add('setGeoLocation', setGeoLocation)

module.exports = {
  registerCommand,
  setGeoLocation
}