$(document).ready(function() {
    var citylist = [{
        cityName: "Bangalore",
        cityCode: 1277333
    }, {
        cityName: "Cochin",
        cityCode: 1273874
    }, {
        cityName: "New Delhi",
        cityCode: 1273293
    }, {
        cityName: "Palakkad",
        cityCode: 1260728
    }];
    var cityId;
    loadCities(0);
    loadWeather(cityId);

    $(document).on('click', '.dropdown .dropdown-menu li', function(){
        loadCities($(this).data('index'));
        loadWeather(cityId);
    });

    function loadWeather(cityId) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&APPID=de3bc277144ce6d8ff3a04de56e1922c&units=metric").then(
            function(data) {
                var output = $('#weather-template').html();
                var current_time = new Date();
                var current_temp = data.main.temp;
                var temp_max = data.main.temp_max;
                var temp_min = data.main.temp_min;
                output = output.replace('mainweather', data.weather[0].main).replace('weathermain', data.weather[0].main).replace('currenttemp', current_temp).replace('maxtemp', temp_max).replace('mintemp', temp_min);
                $('.weather-panel').html(output);
                if (data.weather[0].main == 'Clear') {
                    $('.weather-bg').css('background-color', '#5EBCFF');
                } else if (data.weather[0].main == 'Sunny') {
                    $('.weather-bg').css('background-color', '#FFD759');
                } else if (data.weather[0].main == 'Clouds') {
                    $('.weather-bg').css('background-color', '#6D767F');
                } else if ((data.weather[0].main == 'Haze') || (data.weather[0].main == 'Fog')) {
                    $('.weather-bg').css('background-color', '#C2D6FF');
                } else if ((data.weather[0].main == 'Rain') || (data.weather[0].main == 'Drizzle')) {
                    $('.weather-bg').css('background-color', '#4295FF');
                } else if (data.weather[0].main == 'Thunderstorm') {
                    $('.weather-bg').css('background-color', '#59577F');
                } else if (data.weather[0].main == 'Mist') {
                    $('.weather-bg').css('background-color', '#B0CFFF');
                }

            },
            function() {
                console.log('error fetching data');
            });
    }

    function loadCities(cityIndex){
        $('.dropdown .dropdown-menu').html('');
        $('#city-name').html('' + citylist[cityIndex].cityName + '<span class="caret"></span>');
        cityId = citylist[cityIndex].cityCode;
        for (var i = 0; i < citylist.length; i++) {
            if (i != cityIndex) {
                $('.dropdown .dropdown-menu').append('<li class="h1" data-index=' + i + '>' + citylist[i].cityName + '</a></li>')
            }
        }
    }
});
