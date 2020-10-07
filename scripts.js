$(document).ready(function (){ 

var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + $("#userInput")
var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="
var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"


    //city search will give us event info, county name, and lat and long

    //with that info will grab lat and long

    //feed that into location api

    //which will give us county name then connect that to api




    //Covid API

    $.ajax({
        url: "https://disease.sh/v3/covid-19/states/" + $("#userState"),
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
        url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + $("#userCity") + "&apikey=vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
        //grab events classification
        //grab user zipcode
        //grab
    })









})