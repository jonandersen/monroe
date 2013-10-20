Template.destinationsList.helpers({
    destinations: function () {
        var regionId = Session.get('currentRegionId');
        if(regionId){
            return Destinations.find({regionId: regionId});
        }else{
            return Destinations.find();
        }
    }
});