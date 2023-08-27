
var w = window.innerWidth;
var h = window.innerHeight;

var hoverCount=0;

var weatherAPI = "7d13921413274920be4210715231908";
var flightAPI = "66dab4b1-0c5b-415f-ae72-66d9f8e93a59";

// function hover(){

//     if(hoverCount%2==0){
//         document.getElementById("notification").innerHTML="Test";
//         document.getElementById("notification").style.position = 15; 
//     }

//     else{
//         document.getElementById("notification").innerHTML="!";
//     }

//     hoverCount++;
// }

function onLoad(){

    var block1 = {
        flightIataCode: "",
        arrivalAirportIataCode: "",
        flightNumber: "",
        gateNumber: 0,
        arrivalAirport: "",
        arrivalCity: "",
        boardingTime: "",
        weather: ""
    };

    var block2 = {
        flightIataCode: "",
        arrivalAirportIataCode: "",
        flightNumber: "",
        gateNumber: 0,
        arrivalAirport: "",
        arrivalCity: "",
        boardingTime: "",
        weather: ""
    };

    var block3 = {
        flightIataCode: "",
        arrivalAirportIataCode: "",
        flightNumber: "",
        gateNumber: 0,
        arrivalAirport: "",
        arrivalCity: "",
        boardingTime: "",
        weather: ""
    };

    var block4 = {
        flightIataCode: "",
        arrivalAirportIataCode: "",
        flightNumber: "",
        gateNumber: 0,
        arrivalAirport: "",
        arrivalCity: "",
        boardingTime: "",
        weather: ""
    };

    pullFlights(block1, block2, block3, block4);
    pullFlightInfo(block1, block2, block3, block4);
    airportLookup(block1, block2, block3, block4);
    pullWeather(block1, block2, block3, block4);
    updateScreens(block1, block2, block3, block4);
    
}


function pullWeather(block1, block2, block3, block4){
    console.log(block1.arrivalCity);
    console.log(block2.arrivalCity);

    console.log(block3.arrivalCity);

    let request = new XMLHttpRequest();
    request.open("GET", "https://api.weatherapi.com/v1/current.json?key=7d13921413274920be4210715231908&q=" + block1.arrivalCity + "&aqi=no");
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);
            console.log(data.location.name);

            var location = data.location.name;
            var temp = data.current.temp_f;
            var condition = data.current.condition.text;
            var conditionIcon = data.current.condition.icon;

            block1.weather = "Weather in " + location + ": " + temp + "° F and " + condition;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://api.weatherapi.com/v1/current.json?key=7d13921413274920be4210715231908&q=" + block2.arrivalCity + "&aqi=no");
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);
            console.log(data.location.name);

            var location = data.location.name;
            var temp = data.current.temp_f;
            var condition = data.current.condition.text;
            var conditionIcon = data.current.condition.icon;

            block2.weather = "Weather in " + location + ": " + temp + "° F and " + condition;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://api.weatherapi.com/v1/current.json?key=7d13921413274920be4210715231908&q=" + block3.arrivalCity + "&aqi=no");
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);
            console.log(data.location.name);

            var location = data.location.name;
            var temp = data.current.temp_f;
            var condition = data.current.condition.text;
            var conditionIcon = data.current.condition.icon;

            block3.weather = "Weather in " + location + ": " + temp + "° F and " + condition;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://api.weatherapi.com/v1/current.json?key=7d13921413274920be4210715231908&q=" + block4.arrivalCity + "&aqi=no");
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);
            console.log(data.location.name);

            var location = data.location.name;
            var temp = data.current.temp_f;
            var condition = data.current.condition.text;
            var conditionIcon = data.current.condition.icon;

            block4.weather = "Weather in " + location + ": " + temp + "° F and " + condition;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    
}

function pullFlights(block1, block2, block3, block4){
    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/flights?api_key=" + flightAPI + "&airline_icao=JBU&_view=array");
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);
            
            block1.flightIataCode = data.response[0].flight_iata;
            block1.flightNumber = data.response[0].flight_number;
            block1.arrivalAirportIataCode = data.response[0].arr_iata;

            block2.flightIataCode = data.response[1].flight_iata;
            block2.flightNumber = data.response[1].flight_number;
            block2.arrivalAirportIataCode = data.response[1].arr_iata;

            block3.flightIataCode = data.response[2].flight_iata;
            block3.flightNumber = data.response[2].flight_number;
            block3.arrivalAirportIataCode = data.response[2].arr_iata;

            block4.flightIataCode = data.response[3].flight_iata;
            block4.flightNumber = data.response[3].flight_number;
            block4.arrivalAirportIataCode = data.response[3].arr_iata;

        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

function pullFlightInfo(block1, block2, block3, block4){

    console.log(block4);
    console.log(block3);
    console.log(block3.arrivalAirportIataCode);

    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/flight?flight_iata=" + block1.flightIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            var arrivalAirportIataCode = data.response.arr_iata;
            console.log("Arrival Airport Code: " + arrivalAirportIataCode);

            block1.gateNumber = data.response.dep_gate;
            block1.departureTime = data.response.dep_time;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://airlabs.co/api/v9/flight?flight_iata=" + block2.flightIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            var arrivalAirportIataCode = data.response.arr_iata;
            console.log("Arrival Airport Code: " + arrivalAirportIataCode);

            block2.gateNumber = data.response.dep_gate;
            block2.departureTime = data.response.dep_time;

            console.log(gateNumber);
            console.log(departureTime);
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://airlabs.co/api/v9/flight?flight_iata=" + block3.flightIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            var arrivalAirportIataCode = data.response.arr_iata;
            console.log("Arrival Airport Code: " + arrivalAirportIataCode);

            block3.gateNumber = data.response.dep_gate;
            block3.departureTime = data.response.dep_time;

            console.log(gateNumber);
            console.log(departureTime);
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    console.log(block3);
    console.log(block3.arrivalAirportIataCode);
    request.open("GET", "https://airlabs.co/api/v9/flight?flight_iata=" + block4.flightIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            console.log(request);
            var data = JSON.parse(request.response);
            console.log(data);

            var arrivalAirportIataCode = data.response.arr_iata;
            console.log("Arrival Airport Code: " + arrivalAirportIataCode);

            block4.gateNumber = data.response.dep_gate;
            block4.departureTime = data.response.dep_time;

            console.log(gateNumber);
            console.log(departureTime);
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    
}

function airportLookup(block1, block2, block3, block4){
    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/airports?iata_code=" + block1.arrivalAirportIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            block1.arrivalCity = data.response.city;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://airlabs.co/api/v9/airports?iata_code=" + block2.arrivalAirportIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            block2.arrivalCity = data.response.city;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://airlabs.co/api/v9/airports?iata_code=" + block3.arrivalAirportIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            block3.arrivalCity = data.response.city;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    request.open("GET", "https://airlabs.co/api/v9/airports?iata_code=" + block4.arrivalAirportIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        if(request.status==200){
            var data = JSON.parse(request.response);

            block4.arrivalCity = data.response.city;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

function updateScreens(block1, block2, block3, block4){
    for(var i = 1; i<5; i++){
        document.getElementsByClassName("flightNumber" + i).innerHTML = "#" + `${"block" + i}`.flightNumber;
        document.getElementsByClassName("gateNumber" + i).innerHTML = "#" + `${"block" + i}`.gateNumber;
        document.getElementsByClassName("airport" + i).innerHTML = `${"block" + i}`.arrivalAirport;
        document.getElementsByClassName("time" + i).innerHTML = `${"block" + i}`.boardingTime;
        document.getElementsByClassName("gateNumber" + i).innerHTML = "#" + `${"block" + i}`.gateNumber;
    }
}

onLoad();
