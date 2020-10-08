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


    function getEvents(city) {


        //music, arts, sports?,

        //Events API
        $.ajax({
            url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=" + city + "&apikey=" + apiKey,
            method: "GET"
        }).then(function (info) {

            $("#eventSection").empty();

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
                var image = test._embedded.events[i].images[0].url
    
                var info = $(`
                    <div class="col s12 m7">
                        <div class="card horizontal">
                            <div class="card-image">
                                <img src="${image}">
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>${event}</p>
                                <p>${date}</p>
                                <p>${location}</p>
                                <p>${address}</p>
                            </div>
                            <div class="card-action">
                                <a href="${links}">This is a link</a>
                            </div>
                        </div>
                        </div>
                    </div>
               `)
                console.log(info);
    
                $("#eventSection").append(info)
            }
            getLoc(lat, lon);
            
        })
    }

    function getLoc (lat, lon){
        
        $.ajax({
            url: "https://geo.fcc.gov/api/census/block/find?latitude=" + lat + "&longitude=" + lon + "&showall=false&format=json",
            method: "GET"
        }).then(function (a) {
            console.log(a)
            var county = a.County.name;
            getCovid(county);
        })

    }

    function getCovid (county){
        //Covid API
        $.ajax({
            url: "https://disease.sh/v3/covid-19/jhucsse/counties/" + county,
            method: "GET"
        }).then(function (data) {
            console.log(data)
        })
    }
    
})




                    //<li class="collection-item avatar">
                    //<img src="#" alt="" class="circle">
                    //<span class="title" >${event}</span> 
                    //<hr>
                    //<p>${date}</p> <hr>
                    //<p>${location}</p> <hr>
                    //<p>${address}</p> 
                    //<a href="${links}" class="secondary-content"><i class="material-icons">grade</i></a>
                    //</li>
                    //<hr>
                    //<br></br>