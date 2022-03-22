const registerCommand = (name = "visitWithCustomGeoLoc") => {
  const getByCommand = (url, latitude=12.92, longitude= -10.50) => {
      cy.visit(url, {
        onBeforeLoad: (window) => {
          window.navigator.geolocation.getCurrentPosition =  (success) => {
            success({
              coords: {
                latitude,
                longitude,
              }, timestamp: Date.now()
            });
          }
        }
      })
  }
  Cypress.Commands.add(name, getByCommand);
}
module.exports = {
  registerCommand
}