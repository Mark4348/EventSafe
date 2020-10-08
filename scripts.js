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

    function getEvents(city) {


        //music, arts, sports?,

        //Events API
        $.ajax({
            url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport,music,arts&city=" + city + "&apikey=" + apiKey,
            method: "GET"
        }).then(function (info) {

            $("#eventSection").empty();

            var test = info;
            $("#eventSection").empty();
            console.log(info)
            var state = info._embedded.events[0]._embedded.venues[0].state.name;
            console.log(state);

            var list = info._embedded.events;


            for (var i = 0; i < list.length; i++) {

                var event = test._embedded.events[i].name;
                
                var date = test._embedded.events[i].dates.start.localDate;
                
                var location = test._embedded.events[i]._embedded.venues[0].name;
                
                var address = test._embedded.events[i]._embedded.venues[0].address.line1;
                
                var links = test._embedded.events[i].url;
                
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
                
    
                $("#eventSection").append(info)
            }
            getCovid(state);
            
        })
    }

    

    function getCovid (state){
        //Covid API
        $.ajax({
            url: "https://disease.sh/v3/covid-19/states/" + state + "?yesterday=true",
            method: "GET"
        }).then(function (data) {
            $("#covidData").empty();
            console.log(data)
            //var test1 = data;
            //var countyEv = test1.County.name;
            //console.log(countyEv)

            var stateEV = data.state;
            var casesEV = data.cases;
            var recoversEV = data.recovered;
            var activeCases = data.active;
            var todayCases = data.todayCases;
            var todayDeaths = data.todayDeaths;
            

            var elements = $(`
                <h5>State: ${stateEV}</h5>
                <p>Total Cases: ${casesEV}</p>
                <p>Total Recoveries: ${recoversEV}</p>
                <p>Active Cases: ${activeCases}</p>
                <p>Today's Cases: ${todayCases}</p>
                <p>Today's Deaths: ${todayDeaths}</p>
            `)

            $("#covidData").append(elements);
        })
    }
    
})
        
