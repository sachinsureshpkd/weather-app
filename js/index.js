$(document).ready(function() {
    loadWeather();

    function loadWeather() {
        var cityId = 6356042;
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&APPID=de3bc277144ce6d8ff3a04de56e1922c&units=metric").then(
            function(data) {
                var output = $('#weather-template').html();
                var current_time = new Date();
                var current_temp = data.main.temp;
                var temp_max = data.main.temp_max;
                var temp_min = data.main.temp_min;
                output = output.replace('currenttime', current_time.getHours() + ":" + current_time.getMinutes()).replace('currentlocation', data.name).replace('mainweather', data.weather[0].main).replace('weathermain', data.weather[0].main).replace('currenttemp', current_temp).replace('maxtemp', temp_max).replace('mintemp', temp_min);
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
});
