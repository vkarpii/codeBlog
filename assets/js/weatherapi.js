fetch('http://api.openweathermap.org/data/2.5/weather?q=Lviv,UA&appid=a178ebf51c7efc965fd41ef907e012be')
    .then(function (resp) { return resp.json()})
    .then(function (data) {
        $('#header-weather').text(data.name+" ,"+Math.round(data.main.temp-273)+"° ,"+data.weather[0]["description"]);
    })
    .catch(function () {
        $('#header-weather').text("WAPI ERROR");
    })