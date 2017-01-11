function httpGetHappiness(url)
{
    var req = new XMLHttpRequest();
    req.open( "GET", url, false ); // false for synchronous request
    req.send( null );
    return req.responseText;
}






function plotChart(){


  var cities = ['newyork travel','newdelhi travel','minneapolis travel','San Francisco travel','sydney travel','Barcelona travel'];
  var happiness = [0.7532467532467533,0.8421052631578947,0.65,0.78,1.03,0.22];
 var values = {
     labels: cities,
     datasets: [
         {
             label: "Sentiment Analysis",
             fillColor: "rgba(220,220,220,0.5)",
             strokeColor: "rgba(220,220,220,0.2)",
             pointColor: "rgba(220,220,220,0.2)",
             pointStrokeColor: "#fff",
             pointHighlightFill: "#fff",
             pointHighlightStroke: "rgba(220,220,220,1)",
             data: happiness
         }
     ]
 };
 var chart1 = document.getElementById("graph").getContext("2d");
 var options = { };
 new Chart(chart1).Line(values,options);
}
