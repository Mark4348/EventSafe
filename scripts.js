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
})