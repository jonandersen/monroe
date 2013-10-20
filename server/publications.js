Meteor.publish('destinations', function() {
    return Destinations.find();
});