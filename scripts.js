$(document).ready(function () {
    var history = JSON.parse(localStorage.getItem("city")) || [];
    var city

    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        city = $("#searchInput").val();
        history.unshift(city);
        console.log(history);
        localStorage.setItem("city", JSON.stringify(history));
        getEvents(city)
    })
var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + county;
var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + cityName + "&apikey=" + apiKey;
var geoUrl = "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json"
var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"

    function getEvents() {

    }

    function getEvents(city) {

        // var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + $("#userInput")
        // var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + city + apiKey;
        var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"



        // var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/";
        // var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=";
        // var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5";

        var URL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=Austin&apikey=vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5'
        //Covid API
        $.ajax({
            url: "https://disease.sh/v3/covid-19/jhucsse/counties/",
            method: "GET"
        })
            .then(function (data) {
                console.log(data)
            })

        //Events API
        $.ajax({
            url: URL,
            method: "GET"
        })
            .then(function (info) {
                console.log(info)
            })

        // var eventList = $("<ul>");
        // eventList.addClass("list-group");
        // $("#eventSection").append(eventList);

        for (var i = 0; i < 5; i++) {

            var event = info._embedded.events[0].name;
            var date = info._embedded.events[0].dates.start.localDate;
            var location = info._embedded.events[1]._embedded.venues[0].name;
            var address = info.events._embedded.venues.address.line1;
            var links = info._embedded.events[0].outlets[0].url;

            var info = $(`
            <ul class="collection">
                <li class="collection-item avatar">
                <img src="images/yuna.jpg" alt="" class="circle">
                <span class="title">${event}</span>
                <p>${date} <br>
                    ${location}
                </p>
                <a href="${links}" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
            </ul>
           `)
           console.log(info);

           $("#eventSection").append(info)
           console.log(info);
        }
    }

<<<<<<< HEAD
=======
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
>>>>>>> fc2ca141c4e168a528b75e2e72d5ea931ca7b5aa

    $.ajax({
        url: "https://geo.fcc.gov/api/census/block/find?latitude=30.1472&longitude=-97.597504&showall=false&format=json",
        method: "GET"
    })
    .then(function(a) {
        console.log(a)
    })    









})