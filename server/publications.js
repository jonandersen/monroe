Meteor.publish('destinations', function() {
    return Destinations.find();
});

Meteor.publish('regions', function() {
    return Regions.find();
});