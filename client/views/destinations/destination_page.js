Template.destinationPage.helpers({
    currentDestination: function() {
        return Destinations.findOne(Session.get('currentDestinationId'));
    }
});