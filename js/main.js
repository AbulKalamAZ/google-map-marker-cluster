// Dummy locations data

const locations = [
    {
        lat: '42.9298847',
        lng: '-78.9186068'
    },
    {
        lat: '51.07492',
        lng: '-114.002812'
    },
    {
        lat: '20.12586478230905',
        lng: '78.69799291354367',
    },
    {
        lat: '21.12586478230905',
        lng: '77.69799291354367',
    },
    {
        lat: '20.22586478230905',
        lng: '78.79799291354367',
    },
    {
        lat: '23.98403001768207',
        lng: '54.71326588103569',
    },
    {
        lat: '25.372430252828085',
        lng: '44.1337424217921',
    },
    {
        lat: '33.195345871145975',
        lng: '44.09975543981851',
    },
    {
        lat: '31.863803668294945',
        lng: '34.94741250760682',
    },
    {
        lat: '21.22285643773062',
        lng: '56.68777764267978',
    },{
        lat: '47.4893487040078',
        lng: '14.267037498434016',
    },
    {
        lat: '53.81509236445907',
        lng: '27.711424000970755',
    },
    {
        lat: '50.73967115576341',
        lng: '4.90516371514053',
    },
    {
        lat: '44.15592415160172',
        lng: '18.002137235820676',
    },
    {
        lat: '42.687337177889106',
        lng: '25.32164688368282',
    },
    {
        lat: '45.63597032223503',
        lng: '16.042139789709775',
    },
    {
        lat: '35.07764967634815',
        lng: ' 33.28223069526854',
    },
    {
        lat: '49.831750478828035',
        lng: '15.78109991737886',
    },
    {
        lat: '56.15476928448669',
        lng: '10.201181123414475',
    },
    {
        lat: '58.595174752173826',
        lng: '25.90908212632772',
    },
    {
        lat: '36.194723',
        lng: '43.977207'
    },
    {
        lat: '32.0678053',
        lng: '34.789773'
    },
    {
        lat: '23.590661',
        lng: '58.373874'
    },
    {
        lat: '25.1877643',
        lng: '55.2683964'
    },
    {
        lat: '47.2793581',
        lng: '11.4714138'
    },
    {
        lat: '47.520435',
        lng: '12.4313879'
    },
    {
        lat: '48.1500467',
        lng: '13.9826652'
    },
    {
        lat: '47.1529188',
        lng: '9.8150949'
    },
    {
        lat: '47.4914445',
        lng: '9.7267561'
    },
    {
        lat: '47.4728132',
        lng: '11.8772564'
    },
    {
        lat: '48.1164095',
        lng: '15.6106072'
    },
    {
        lat: '47.1962126',
        lng: '15.3568231'
    },
    {
        lat: '48.258508',
        lng: '16.407274'
    },
    {
        lat: '48.2939586',
        lng: '13.3994531'
    },
    {
        lat: '48.2089358',
        lng: '13.4861551'
    },
    {
        lat: '47.014187',
        lng: '15.210316'
    },
    {
        lat: '61.3681996',
        lng: '23.8007864'
    },
    {
        lat: '60.9344445',
        lng: '25.6247219'
    },
    {
        lat: '60.4793192',
        lng: '22.1812849'
    },
    {
        lat: '64.0624367',
        lng: '24.5629238'
    },
    {
        lat: '60.2826123',
        lng: '24.822004'
    },
];


// Initialize the map with cluster

function initMap() {
    
    // Map Options
    
    const mapOptions = {
        center: { lat: 23.27020396438825, lng: 13.267567365815008 },
        zoom: 2,
        disableDefaultUI: false,
    };
    
    // Map Element

    const mapElement = document.getElementById('map');

    // Calling the map constructor

    const map = new google.maps.Map(mapElement, mapOptions);

    const markers = locations.map(({ lat, lng }) => {
        return new google.maps.Marker({
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          icon: "../img/gulf.png"
        });
    });

    const markerClusterOptions = {
        styles: [
            {   
            anchorText: [ 20, -1 ],
            textColor: 'white',
            height: 53,
            width: 53,
            url: "../img/ClusterIcon.png",
            },
            {
            anchorText: [ 20, -2 ],
            textColor: 'white',
            height: 56,
            width: 56,
            url: "../img/ClusterIcon.png",
            },
            {
            anchorText: [ 20, -7.5 ],
            textColor: 'white',
            height: 66,
            width: 66,
            url: "../img/ClusterIcon.png",
            },
            {
            anchorText: [ 20, -13 ],
            textColor: 'white',
            height: 78,
            width: 78,
            url: "../img/ClusterIcon.png",
            },
            {
            anchorText: [ 20, -18.5 ],
            textColor: 'white',
            height: 90,
            width: 90,
            url: "../img/ClusterIcon.png",
            }
        ]
    }
    
    new MarkerClusterer(
        map,
        markers,
        markerClusterOptions
    );
}
