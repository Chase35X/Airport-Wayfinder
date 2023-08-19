var w = window.innerWidth;
var h = window.innerHeight;

var hoverCount=0;

var weatherAPI = "7d13921413274920be4210715231908";
var flightAPI = "ef0b6a04867fb62317e7c65ae0fbed02";

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
    request.open("GET", "http://www.api.aviationstack.com/v1/flights?access_key=" + flightAPI + "&flight_status=scheduled&flight_date=2023-08-19");
    request.send();
    request.onload = () => {
        console.log(request);
        if(request.status==200){
            console.log(JSON.parse(request.response));
            var data = JSON.parse(request.response);
            console.log();
        }else{
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }
}

pullWeather();
// pullFlight();
