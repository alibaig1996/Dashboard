
ctx= document.getElementById("chart");

function generateColorArray(arr){
  for(var i=0;i<arr.length;i++)
  {
    colorArr.push(get_random_color());
  }
}

function get_random_color() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return hue;
}

$(document).ready(function () {
	 $("#b1").click(function () {
	 	 $.ajax({
	 	 	url: "sdk/gen",
	 	 	success: makeChart
	 	 })
	 })
})

function makeChart (data, status) {
	$('.displayChart').empty();
    $('.displayChart').append('<canvas id="chart" width="350" height="130"></canvas>');
  
  ctx= document.getElementById("chart");
	var arr = JSON.parse(data);
	var SDKLabels = [];
	var data = [];
	var dates = [];
	var Web = [];
	var Widget = [];
	var API = [];
	var i = 0;

	for(var key in arr) {
	    SDKLabels[i] = key;
	    data[i] = arr[key];
	    i++;
	}
	
	i = 0;

	for(var key in data[0]){
		dates[i] = key;
		API[i] = data[0][key];
		Web[i] = data[1][key];
		Widget[i] = data[2][key];
		i++;
	}

	var myChart = new Chart($("#chart"), {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
				label: SDKLabels[0],
				data: API,
				fill: false,
				backgroundColor: '#71B37C',
				borderColor: '#71B37C',
				hoverBackgroundColor: '#71B37C',
				hoverBorderColor: '#71B37C',
			},
			{
				label: SDKLabels[2],
				data: Widget,
				fill: false,
				backgroundColor: '#EC932F',
				borderColor: '#EC932F',
				hoverBackgroundColor: '#EC932F',
				hoverBorderColor: '#EC932F',
			},
			{
				label: SDKLabels[1],
				data: Web,
				fill: false,
				backgroundColor: '#36A2EB',
				borderColor: '#36A2EB',
				hoverBackgroundColor: '#36A2EB',
				hoverBorderColor: '#36A2EB',
			}]
		},
		options: {
	        scales: {
	            yAxes: [{
	                stacked: true,
	                ticks: {
	                	beginAtZero: true,
	                }
	            }],
	            xAxes: [{
	            	stacked: true,
	            }]
	        }
	    }
	})
}