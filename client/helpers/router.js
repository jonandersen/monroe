Meteor.Router.add({

    '/destinations/:_id': {
        to: 'destinationPage',
        and: function(id) {
            Session.set('currentDestinationId', id);
        }
    },

    '/regions/:id': {
        to: 'regionsList',
        and: function(id) {
            Session.set('currentRegionId', id);
        }
    },

    '/': {
        to: 'regionsList',
        and: function() {
                Session.set('currentRegionId', null);
        }
    },
    '/regions/': {
        to: 'regionsList',
        and: function() {
            Session.set('currentRegionId', null);
        }
    }
});