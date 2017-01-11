var offset = 5.5;
var restaurantIcon = L.icon({
		iconUrl: '/images/restaurant.png',
		iconSize : [ 45, 50 ],
		iconAnchor : [ 22, 22 ],
		popupAnchor : [ 0, -20 ],
	});
var museumIcon = L.icon({
		iconUrl : '/images/museum.png',
		iconSize : [ 45, 50 ],
		iconAnchor : [ 22, 22 ],
		popupAnchor : [ 0, -20 ],
	});

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = padTime(m);
	s = padTime(s);
	document.getElementById('timeLocal').innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 500);
}

function padTime(time) {
	return (time < 10) ? ("0" + time) : time;
}

function showTime() {
	var utcTime = new Date();
	var local = new Date();
	utcTime.setTime(local.getTime() + local.getTimezoneOffset() * 60000);
	local.setTime(utcTime.getTime() + 3600000 * offset);
	var hours = padTime(local.getHours());
	var mins = padTime(local.getMinutes());
	var secs = padTime(local.getSeconds());
	document.getElementById('timeLocal').innerHTML = hours + ":" + mins + ":" + secs;
	setTimeout(showTime, 500);
}

function addingCurrentLocation(position) {
	var map = L.map('map').setView(
			[ position.coords.latitude, position.coords.longitude ], 13);
	L
			.tileLayer(
					'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
					{
						attribution : 'Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
						minZoom : 10,
						maxZoom : 18
					}).addTo(map);

	var marker = L.marker([ position.coords.latitude, position.coords.longitude ]).addTo(map);
	marker.bindPopup('<b>You are here!</b>');
	marker.on('mouseover', function(e) {
		this.openPopup();
	});
	marker.on('mouseout', function(e) {
		this.closePopup();
	});
}

function addingMarker(latitude, longitude, icon, message, map) {
	var marker = L.marker([ latitude, longitude], {
		icon : icon
	}).addTo(map);
	marker.bindPopup(message);
	marker.on('mouseover', function(e) {
		this.openPopup();
	});
	marker.on('mouseout', function(e) {
		this.closePopup();
	});
}

function initMap(map) {
	L.tileLayer(
					'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
					{
						attribution : 'Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
						minZoom : 10,
						maxZoom : 18
					}).addTo(map);
}

function addingMinneapolisLocation() {
	var map = L.map('map').setView([ 44.9786703, -93.2569869 ], 13);
	initMap(map);
	addingMarker(44.983884, -93.248088, restaurantIcon, '<b>Restaurant Alma</b>', map);
	addingMarker(44.9764597, -93.2355038, restaurantIcon, '<b>Annie Parlour</b>', map);
	addingMarker(44.987636, -93.2211839, restaurantIcon, '<b>Manning Cafe</b>', map);
	var walkerArtPopupMessage = "<p><img src=/images/walker-art.jpg width=300 height=140 style=float: right;><b>Walker Art Center</b><br/>The Walker Art Center is a multidisciplinary contemporary art center in the Loring Park neighborhood of Minneapolis, Minnesota, United States. The Walker is one of the most-visited modern and contemporary art museums in the United States and, together with the adjacent Minneapolis Sculpture Garden and the Cowles Conservatory, it has an annual attendance of around 700,000 visitors. The museum's permanent collection includes over 13,000 modern and contemporary art pieces including books, costumes, drawings, media works, paintings, photography, prints, and sculpture.</p>";
	addingMarker(44.9684358, -93.2885414, museumIcon, walkerArtPopupMessage, map);
	var millCityPopupMessage = "<p><img src=/images/mill-city.jpg width=300 height=140 style=float: right;><b>Mill City Museum</b><br/>Mill City Museum is a Minnesota Historical Society museum in Minneapolis. It opened in 2003, built in the ruins of the Washburn A Mill next to Mill Ruins Park on the banks of the Mississippi River. The museum focuses on the founding and growth of Minneapolis, especially flour milling and the other industries that used ater power from Saint Anthony Falls.</p>";
	addingMarker(44.9786703, -93.2569869, museumIcon, millCityPopupMessage, map);
	var instituteArtPopupMessage = "<p><img src=/images/institute-of-arts.jpg width=300 height=140 style=float: right;><b>Minneapolis Institute of Art</b><br/>The Minneapolis Institute of Art (Mia), formerly known as the Minneapolis Institute of Arts, is a fine art museum located in the Whittier neighborhood of Minneapolis, Minnesota, on a campus that covers nearly 8 acres (32,000 m²), formerly Morrison Park. As a major, government-funded public museum, the Institute does not charge an entrance fee, except for special exhibitions, and allows photography of its permanent collection for personal or scholarly use only. The museum receives support from the Park Board Museum Fund, levied by the Hennepin County commissioners. Additional funding is provided by corporate sponsors and museum members. It is one of the largest art museums in the United States.</p>";
	addingMarker(44.9584829, -93.2733813, museumIcon, instituteArtPopupMessage, map);
}

function addingNewYorkLocation() {
	var map = L.map('map').setView([ 40.73, -74.0 ], 12);
	initMap(map);
	addingMarker(40.7227837, -74.0159413, restaurantIcon, '<b>Gramercy Tavern</b>', map);
	addingMarker(40.7027837, -73.9559413, restaurantIcon, '<b>Le Bernardin</b>', map);
	addingMarker(40.6927837, -73.9859413, restaurantIcon, '<b>Porter House Bar and Grill</b>', map);
	addingMarker(40.6892494, -74.0445004, museumIcon, '<b>Statue of Liberty</b>', map);
	addingMarker(40.7613922, -73.9770356, museumIcon, '<b>Museum of Modern Art</b>', map);
	addingMarker(40.7820454, -73.9717106, museumIcon, '<b>American Museum of Natural History</b>', map);
}

function addingBarcelonaLocation() {
	var map = L.map('map').setView([ 41.38, 2.17 ], 13);
	initMap(map);
	addingMarker(41.3856047, 2.18182, restaurantIcon, '<b>Montiel</b>', map);
	addingMarker(41.3763888, 2.1405696, restaurantIcon, '<b>Petit Pau Restaurant</b>', map);
	addingMarker(41.3983671, 2.1981657, restaurantIcon, '<b>Can Dende</b>', map);
	addingMarker(41.4032029, 2.1748507, museumIcon, '<b>Sagrada Família</b>', map);
	addingMarker(41.3915843, 2.1648553, museumIcon, '<b>Casa Batlló</b>', map);
	addingMarker(41.3800475, 2.1200696, museumIcon, '<b>Camp Nou</b>', map);
}

function addingSydneyLocation() {
	var map = L.map('map').setView([ -33.8674729, 151.2018919 ], 13);
	initMap(map);
	addingMarker(-33.8621961, 151.2108531, restaurantIcon, '<b>Cafe Sydney</b>', map);
	addingMarker(-33.8542286, 151.2080945, restaurantIcon, '<b>The Gantry Restaurant & Bar</b>', map);
	addingMarker(-33.8674729, 151.2018919, restaurantIcon, '<b>The Malaya</b>', map);
	addingMarker(-33.8565361, 151.2149964, museumIcon, '<b>Sydney Opera House</b>', map);
	addingMarker(-33.8722287, 151.2379312, museumIcon, '<b>Sydney Harbour Bridge</b>', map);
	addingMarker(-33.89102, 151.277726, museumIcon, '<b>Bondi Beach</b>', map);
}

function addingNewDelhiLocation() {
	var map = L.map('map').setView([ 28.6, 77.18 ], 11);
	initMap(map);
	addingMarker(28.6008569, 77.1784272, restaurantIcon, '<b>Bukhara</b>', map);
	addingMarker(28.5431203, 77.1204713, restaurantIcon, '<b>Neung Roi</b>', map);
	addingMarker(28.5339937, 77.2275823, restaurantIcon, '<b>Gulati Restaurant</b>', map);
	addingMarker(28.6515984, 77.2376435, museumIcon, '<b>Red Fort</b>', map);
	addingMarker(28.5244281, 77.1854559, museumIcon, '<b>Qutb Minar</b>', map);
	addingMarker(28.5524088, 77.2601133, museumIcon, '<b>Lotus Temple</b>', map);
}

function addingSFLocation() {
	var map = L.map('map').setView([ 37.8089444, -122.4184512 ], 13);
	initMap(map);
	addingMarker(37.8059887, -122.4099154, restaurantIcon, '<b>Bubba Gump Shrimp Co.</b>', map);
	addingMarker(37.8089444, -122.4184512, restaurantIcon, '<b>Scoma Restaurant</b>', map);
	addingMarker(37.7955469, -122.3934177, restaurantIcon, '<b>Hog Island Oyster Co.</b>', map);
	var goldenGatePopupMessage = "<p><img src=/images/golden-gate.jpg width=300 height=140 style=float: right;><b>Golden Gate</b><br/>The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide (1.6 km), three-mile-long (4.8 km) channel between San Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco, California – the northern tip of the San Francisco Peninsula – to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers.</p>";
	addingMarker(37.8199286, -122.4782551, museumIcon, goldenGatePopupMessage, map);
	var unionSqPopupMessage = "<p><img src=/images/union-sq.jpg width=300 height=140 style=float: right;><b>Union Square</b><br/>Union Square is a 2.6-acre (1.1 ha) public plaza bordered by Geary, Powell, Post and Stockton Streets in downtown San Francisco, California. Union Square also refers to the central shopping, hotel, and theater district that surrounds the plaza for several blocks. The area got its name because it was once used for rallies and support for the Union Army during the American Civil War, earning its designation as a California Historical Landmark. Today, this one-block plaza and surrounding area is one of the largest collections of department stores, upscale boutiques, gift shops, art galleries, and beauty salons in the United States, making Union Square a major tourist destination, a vital, cosmopolitan gathering place in downtown San Francisco, and one of the world's premier shopping districts.</p>";
	addingMarker(37.7879384, -122.4075056, museumIcon, unionSqPopupMessage, map);
	var alcatrazPopupMessage = "<p><img src=/images/alcatraz.jpg width=300 height=140 style=float: right;><b>Alcatraz Island</b><br/>Alcatraz Island is located in the San Francisco Bay, 1.25 miles (2.01 km) offshore from San Francisco, California, United States.[2] The small island was developed with facilities for a lighthouse, a military fortification, a military prison (1868), and a federal prison from 1933 until 1963.[5] Beginning in November 1969, the island was occupied for more than 19 months by a group of aboriginal people from San Francisco who were part of a wave of Native activism across the nation with public protests through the 1970s. In 1972, Alcatraz became a national recreation area and received designation as a National Historic Landmark in 1986.</p>";
	addingMarker(37.8269775, -122.4229555, museumIcon, alcatrazPopupMessage, map);
}

function loadWeather(location, woeid) {
  $
			.simpleWeather({
				location : location,
				woeid : woeid,
				unit : 'f',
				success : function(weather) {
					html = '<h2><i class="icon-' + weather.code + '"></i> '
							+ weather.temp + '&deg;' + weather.units.temp
							+ '</h2>';
          html += '<div class="weather-list">';
					html += '<ul><li>' + weather.city + ', ' + weather.region
							+ '</li>';
					html += '<li class="currently">' + weather.currently
							+ '</li>';
					html += '<li>' + weather.wind.direction + ' '
							+ weather.wind.speed + ' ' + weather.units.speed
							+ '</li></ul>';
          html += '</div>';
					document.getElementById('weather').innerHTML = html;
				},
				error : function(error) {
					$("#weather").html('<p>' + error + '</p>');
				}
			});
}

$(document).ready(
	function() {
		if (document.title == "TripDaily") {
				startTime();
				// HTML 5 - most browser support add a button to ask for getting
				// current location
				if ("geolocation" in navigator) {
					navigator.geolocation.getCurrentPosition(function(position) {
						loadWeather(position.coords.latitude + ","
								+ position.coords.longitude);
						addingCurrentLocation(position);
					});
				} else {
					loadWeather("Minneapolis, MN", "");
				}
		} else {
			if (document.title == "Minneapolis") {
				offset = -5;
				loadWeather("", "2452078");
				addingMinneapolisLocation();
			} else if (document.title == "New York") {
				offset = -4;
				loadWeather("", "2459115");
				addingNewYorkLocation();
			} else if (document.title == "San Francisco") {
				offset = -7;
				loadWeather("", "2487956");
				addingSFLocation();
			} else if (document.title == "Barcelona") {
				offset = 2;
				loadWeather("", "753692");
				addingBarcelonaLocation();
			} else if (document.title == "Sydney") {
				offset = -1;
				loadWeather("", "1105779");
				addingSydneyLocation();
			} else if (document.title == "New Delhi") {
				offset = 5.5;
				loadWeather("", "28743736");
				addingNewDelhiLocation();
			}
			showTime();
		}
		});
