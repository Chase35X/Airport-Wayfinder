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

function updateScreens(){

}


function pullWeather(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.weatherapi.com/v1/current.json?key=7d13921413274920be4210715231908&q=London&aqi=no");
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status==200){
            console.log(JSON.parse(request.response));
            var data = JSON.parse(request.response);
            console.log(data.location.name);

            var location = data.location.name;
            var temp = data.current.temp_f;
            var condition = data.current.condition.text;
            var conditionIcon = data.current.condition.icon;

            var text = "Weather in " + location + ": " + temp + "° F and " + condition;
            console.log(text);

            document.getElementById("weather2").innerHTML = text;
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

    
}

function pullFlight(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/flights?api_key=" + flightAPI + "&airline_icao=JBU&_view=array");
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status==200){
            console.log(JSON.parse(request.response));
            var data = JSON.parse(request.response);
            console.log();

            
            console.log(data);

            for(var i = 0; i<4; i++){
                var flightCode1 = data.response[i].flight_iata;
                var arrivalAirline1 = data.response[i].arr_iata;
                console.log(flightCode1);
                pullFlightInfo(flightCode1);
                airportLookup(arrivalAirline1);
            }
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

function pullFlightInfo(flightIataCode){
    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/flight?flight_iata=" + flightIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status==200){
            console.log(JSON.parse(request.response));
            var data = JSON.parse(request.response);
            console.log();

            var arrivalAirportIataCode = data.response.arr_iata;
            console.log(arrivalAirportIataCode);

            var gateNumber = data.response.dep_gate;
            var departureTime = data.response.dep_time;

            console.log(gateNumber);
            console.log(departureTime);
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

function airportLookup(airportIataCode){
    let request = new XMLHttpRequest();
    request.open("GET", "https://airlabs.co/api/v9/airports?iata_code=" + airportIataCode + "&api_key=" + flightAPI);
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status==200){
            console.log(JSON.parse(request.response));
            var data = JSON.parse(request.response);
            console.log();

            var arrivalCity = data.response.city;
            console.log(arrivalCity);
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

pullWeather();
// pullFlight();
