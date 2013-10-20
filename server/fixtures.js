if (Regions.find().count() === 0) {
    var asia = Regions.insert({
        name: 'Asia'
    });

    var europe = Regions.insert({
        name: 'Europe'
    });

    Destinations.insert({
        name: 'Norway',
        regionId: europe
    });
    Destinations.insert({
        name: 'Sweden',
        regionId: europe
    });
    Destinations.insert({
        name: 'Denmark',
        regionId: europe
    });

    Destinations.insert({
        name: 'China',
        regionId: asia
    });


}