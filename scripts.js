$(document).ready(function () {
    var history = JSON.parse(localStorage.getItem("city")) || [];
    var city;

    if(history.length>0){
        getEvents(history[0]);
        renderButtons();
    }
    

    $("#searchBtn").on("click", function () {
        city = $("#searchInput").val();
        if (city === '') {
            return;
        }
        history.unshift(city);
        localStorage.setItem("city", JSON.stringify(history));
        getEvents(city)
    })

    $(document).on('click','.arrayBtn',function(){
        city = $(this).attr("id")
        getEvents(city);
    });

    

    function getEvents(city) {

        var apiKey = "vY3AfxyObNc8DzjJkrHSMIJeaYGpaJp5"

        //Events API
        $.ajax({
            url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" + city + "&apikey=" + apiKey,
            method: "GET"
        }).then(function (info) {

            $("#eventSection").empty();

            var test = info;
            
            var state = info._embedded.events[0]._embedded.venues[0].state.name;

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
                                <a href="${links}">TicketMaster</a>
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
            
            var stateEV = data.state;
            var casesEV = data.cases;
            var recoversEV = data.recovered;
            var activeCases = data.active;
            var todayCases = data.todayCases;
            var todayDeaths = data.todayDeaths;
            

            var elements = $(`
                <div class="card-panel" id="covidCard">  
                    <h4>Covid-19 Data<h4>
                    <h5>State: ${stateEV}</h5>
                    <p>Total Cases: ${casesEV}</p>
                    <p>Total Recoveries: ${recoversEV}</p>
                    <p>Active Cases: ${activeCases}</p>
                    <p>Today's Cases: ${todayCases}</p>
                    <p>Today's Deaths: ${todayDeaths}</p>
                </div>
            `)

            $("#covidData").append(elements);
            renderButtons();
        })
    }

    function renderButtons(){
        $('#arraySection').empty();
        for(c=0;c<history.length;c++){
            var arraybutton = $('<button class="arrayBtn">')
            arraybutton.attr("id", history[c])
            arraybutton.text(history[c])
            $('#arraySection').append(arraybutton)
        }
                
            
    }
    
})
        
