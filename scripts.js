$(document).ready(function (){
    var history = JSON.parse(localStorage.getItem("city")) || [];
    var city

    $("#searchBtn").on("click", function(event){
       event.preventDefault();
        city = $("#searchInput").val();
        history.unshift(city);
        console.log(history);
        localStorage.setItem("city", JSON.stringify(history));
        getEvents()
    })

    function getEvents(){

    }


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