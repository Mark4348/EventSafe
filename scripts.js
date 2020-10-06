$(document).ready(function (){ 

var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + $("#userInput")
var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="
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
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5",
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
    })









})