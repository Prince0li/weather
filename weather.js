$(document).ready(function() {
	$("#submit").click(function() {
		var city = $("#city").val();
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19",
			success: function(data) {
				var weather = "";
				weather += "<p>Температура: " + data.main.temp + " &#8451;</p>";
				weather += "<p>Тиск: " + data.main.pressure + " hPa</p>";
				weather += "<p>Опис: " + data.weather[0].description + "</p>";
				weather += "<p>Вологість: " + data.main.humidity + " %</p>";
				weather += "<p>Швидкість вітру: " + data.wind.speed + " м/с</p>";
				weather += "<p>Направлення вітра: " + data.wind.deg + " &#176;</p>";
				weather += "<p><img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></p>";
				$("#weather").html(weather);
			}
		});
	});
});
