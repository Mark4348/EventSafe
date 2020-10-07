$(document).ready(function () {
    var history = JSON.parse(localStorage.getItem("city")) || [];
    var city;

    $("#searchBtn").on("click", function () {
        city = $("#searchInput").val();
        history.unshift(city);
        console.log(history);
        localStorage.setItem("city", JSON.stringify(history));
        getEvents(city)
    })

    var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"
    //var covidUrl = "https://disease.sh/v3/covid-19/jhucsse/counties/" + county;
    //var ticketMasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + city + "&apikey=" + apiKey;
    //var geoUrl = "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json"

    function getEvents() {

    }

    function getEvents(city) {

        //Events API
        $.ajax({
            url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + city + "&apikey=" + apiKey,
            method: "GET"
        }).then(function (info) {
            var test = info;
            console.log(info)
            var lat = info._embedded.events[0]._embedded.venues[0].location.latitude;
            var lon = info._embedded.events[0]._embedded.venues[0].location.longitude;

            var list = info._embedded.events;
            
            for (var i = 0; i < list.length; i++) {
                console.log(i);
                console.log(test._embedded.events);

                var event = test._embedded.events[i].name;
                console.log(test._embedded.events);
                var date = test._embedded.events[i].dates.start.localDate;
                console.log(date);
                var location = test._embedded.events[i]._embedded.venues[0].name;
                console.log(location);
                var address = test._embedded.events[i]._embedded.venues[0].address.line1;
                console.log(address);
                var links = test._embedded.events[i].url;
                console.log(links);
    
                var info = $(`
                    <li class="collection-item avatar">
                    <img src="#" alt="" class="circle">
                    <span class="title" >${event}</span> 
                    <hr>
                    <p>${date}</p> <hr>
                    <p>${location}</p> <hr>
                    <p>${address}</p> 
                    <a href="${links}" class="secondary-content"><i class="material-icons">grade</i></a>
                    </li>
                    <hr>
                    <br>
               `)
                console.log(info);
    
                $("#eventSection").append(info)
            }

            $.ajax({
                url: "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json",
                method: "GET"
            }).then(function (a) {
                console.log(a)
                var county = a.County.name;
                
                //Covid API
                $.ajax({
                    url: "https://disease.sh/v3/covid-19/jhucsse/counties/" + county,
                    method: "GET"
                }).then(function (data) {
                    console.log(data)
                })
            })
        })
    }

})