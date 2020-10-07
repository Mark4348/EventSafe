$(document).ready(function (){ 

var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + county;
var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + cityName + "&apikey=" + apiKey;
var geoUrl = "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json"
var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"



    // var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/";
    // var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=";
    // var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5";


    //Covid API
    $.ajax({
        url: "https://disease.sh/v3/covid-19/jhucsse/counties/",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
    })
    
    //Events API
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=Austin&apikey=vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
    })

    $.ajax({
        url: "https://geo.fcc.gov/api/census/block/find?latitude=30.1472&longitude=-97.597504&showall=false&format=json",
        method: "GET"
    })
    .then(function(a) {
        console.log(a)
    })    









})