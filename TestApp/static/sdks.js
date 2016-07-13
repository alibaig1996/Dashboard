
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
	 $("#b2").click(function () {
	 	 $.ajax({
	 	 	url: "dash/edit",
	 	 	success: makeChart
	 	 })
	 })
})

function makeChart (data, status) {
	$('.displayChart').empty();
    $('.displayChart').append('<canvas id="chart" width="350" height="130"></canvas>');
  
	var arr = JSON.parse(data);
	var EditLabels = [];
	var data = [];
	var dates = [];
	var Errors = [];
	var Basic = [];
	var Auth = [];
	var Codegen = [];
	var Endpoint = [];
	var Model = [];
	var i = 0;

	for(var key in arr) {
	    EditLabels[i] = key;
	    data[i] = arr[key];
	    i++;
	}
	
	i = 0;

	for(var key in data[0]){
		dates[i] = key;
		Errors[i] = data[0][key];
		Basic[i] = data[1][key];
		Auth[i] = data[2][key];
		Codegen[i] = data[3][key];
		Endpoint[i] = data[4][key];
		Model[i] = data[5][key];
		i++;
	}

	var myChart = new Chart($("#chart"), {
		type: 'horizontalBar',
		data: {
			labels: dates,
			datasets: [{
				label: EditLabels[0],
				data: Errors,
				fill: false,
				backgroundColor: '#71B37C',
				borderColor: '#71B37C',
				hoverBackgroundColor: '#71B37C',
				hoverBorderColor: '#71B37C',
			},
			{
				label: EditLabels[1],
				data: Basic,
				fill: false,
				backgroundColor: '#EC932F',
				borderColor: '#EC932F',
				hoverBackgroundColor: '#EC932F',
				hoverBorderColor: '#EC932F',
			},
			{
				label: EditLabels[2],
				data: Auth,
				fill: false,
				backgroundColor: '#36A2EB',
				borderColor: '#36A2EB',
				hoverBackgroundColor: '#36A2EB',
				hoverBorderColor: '#36A2EB',
			}
			{
				label: EditLabels[3],
				data: Codegen,
				fill: false,
				backgroundColor: "#FF6384",
				borderColor: "#FF6384",
				hoverBackgroundColor:"#FF6384",
				hoverBorderColor: "#FF6384",
			}
			{
				label: EditLabels[4],
				data: Endpoint,
				fill: false,
				backgroundColor: "#FFCE56",
				borderColor: "#FFCE56",
				hoverBackgroundColor: "#FFCE56",
				hoverBorderColor: "#FFCE56",
			}
			{
				label: EditLabels[5],
				data: Model,
				fill: false,
				backgroundColor: "#14727e",
				borderColor: "#14727e",
				hoverBackgroundColor: "#14727e",
				hoverBorderColor: "#14727e",
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

function makeLine (data, status) {
	$('.displayChart').empty();
    $('.displayChart').append('<canvas id="chart" width="350" height="130"></canvas>');

    ctx= document.getElementById("chart");

    var myChart = new Chart($("#chart"), {
    	type: 'line',
    	data: {

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