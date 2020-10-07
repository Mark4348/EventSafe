$(document).ready(function (){ 

var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + county;
var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + cityName + "&apikey=" + apiKey;
var geoUrl = "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json"
var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"


    //city search will give us event info, county name, and lat and long

    //with that info will grab lat and long

    //feed that into location api

    //which will give us county name then connect that to api




    //Covid API

    $.ajax({
        url: "https://disease.sh/v3/covid-19/states/counties",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
        $("").text(data)
        $("").text(data)
        //grab death rate
        //grab positive
    })
    
    //Events API
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=Austin&apikey=vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
        //grab events classification
        //grab user zipcode
        //grab
    })

    $.ajax({
        url: "https://geo.fcc.gov/api/census/block/find?latitude=30.1472&longitude=-97.597504&showall=false&format=json",
        method: "GET"
    })
    .then(function(a) {
        console.log(a)
    })    









})