$(document).ready(function () {
	var arr1 = ['A', 'B', 'C', 'D'];
	var arr2 = [5, 10, 15, 20];
	var myChart = new Chart($("#chart"), {
		type : 'bar',
		data: {
				labels: arr1,
				datasets: [{
					label: 'bla',
					data: arr2,
					fill: false,
					backgroundColor: "#36A2EB",
					borderColor: "#36A2EB",
					hoverBackgroundColor: "#36A2EB",
					hoverBorderColor: "#36A2EB",
			}]
		}
	})

	$.ajax({
		url: "dash/nu_daily",
		success: function (data, status) {
			var arr = JSON.parse(data);
			var data2 = []
			var i = 0;
			var DailyDates = [];
			var DailyVals = [];
			
			for (key in arr){
				data2 = arr[key]
			}

			for(var key in data2){
				DailyDates[i] = key;
				DailyVals[i] = data2[key];
				i++;
			}

			var myChart = new Chart($("#chart21"), {
				type: 'line',
				data: {
					labels: DailyDates,
					datasets: [{
						label: "NewUser_Signup",
						data: DailyVals,
						fill: false,
						backgroundColor: "rgba(0, 0, 0, 1)",
						borderColor: "rgba(255, 255, 255, 1)",
					}]
				},
				options: {
					title: {
						display: true,
						position: "bottom",
						text: "User SignUps"
					},
			        scales: {
			            yAxes: [{
			                ticks: {
			                	beginAtZero: true,
			                }
			            }],
			        }
			    }
			})		
		}
	})

	$.ajax({
		url: "dash/nu_weekly",
		success: function (data, status) {
			var arr = JSON.parse(data);
			var data2 = []
			var i = 0;
			var WeeklyDates = []; 
			var WeeklyVals = []; 

			for (key in arr){
				data2 = arr[key]
			}

			for(var key in data2){
				WeeklyDates[i] = key;
				WeeklyVals[i] = data2[key];
				i++;
			}

			var myChart = new Chart($("#chart22"), {
				type: 'line',
				data: {
					labels: WeeklyDates,
					datasets: [{
						label: "NewUser_Signup",
						data: WeeklyVals,
						fill: false,
						backgroundColor: "rgba(0, 0, 0, 1)",
						borderColor: "rgba(255, 255, 255, 1)",
					}]
				},
				options: {
					title: {
						display: true,
						position: "bottom",
						text: "User SignUps"
					},
			        scales: {
			            yAxes: [{
			                ticks: {
			                	beginAtZero: true,
			                }
			            }],
			        }
			    }
			})
		}
	})


	$.ajax({
		url: "dash/nu_monthly",
		success: function (data, status) {
			var arr = JSON.parse(data);
			var data2 = []
			var i = 0;
			var MonthlyDates = [];
			var MonthlyVals = [];

			for (key in arr){
				data2 = arr[key]
			}

			for(var key in data2){
				MonthlyDates[i] = key;
				MonthlyVals[i] = data2[key];
				i++;
			}

			var myChart = new Chart($("#chart23"), {
				type: 'line',
				data: {
					labels: MonthlyDates,
					datasets: [{
						label: "NewUser_Signup",
						data: MonthlyVals,
						fill: false,
						backgroundColor: "rgba(0, 0, 0, 1)",
						borderColor: "rgba(255, 255, 255, 1)",
					}]
				},
				options: {
					title: {
						display: true,
						position: "bottom",
						text: "User SignUps"
					},
			        scales: {
			            yAxes: [{
			                ticks: {
			                	beginAtZero: true,
			                }
			            }],
			        }
			    }
			})
		}
	})


	$.ajax({
		url: "dash/gen",
		success: SDKGen
	});

	$.ajax({
		url: "dash/edit",
		success: APIEdit
	})
	
	$.ajax({
		url: "dash/import",
		success: APIImport
	})
})

function SDKGen(data, status) {
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

	var myChart = new Chart($("#chart3"), {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
				label: SDKLabels[0],
				data: API,
				fill: false,
				backgroundColor: '#30A9DE',
				borderColor: '#30A9DE',
				hoverBackgroundColor: '#30A9DE',
				hoverBorderColor: '#30A9DE',
			},
			{
				label: SDKLabels[2],
				data: Widget,
				fill: false,
				backgroundColor: '#EFDC05',
				borderColor: '#EFDC05',
				hoverBackgroundColor: '#EFDC05',
				hoverBorderColor: '#EFDC05',
			},
			{
				label: SDKLabels[1],
				data: Web,
				fill: false,
				backgroundColor: '#E53A40',
				borderColor: '#E53A40',
				hoverBackgroundColor: '#E53A40',
				hoverBorderColor: '#E53A40',
			}]
		},
		options: {
			title: {
				display: true,
				position: "bottom",
				text: "SDK Generation"

			},
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

function APIEdit(data, status){
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

	var myChart = new Chart($("#chart4"), {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
				label: EditLabels[5],
				data: Model,
				fill: false,
				backgroundColor: '#ff7473',
				borderColor: '#ff7473',
				hoverBackgroundColor: '#ff7473',
				hoverBorderColor: '#ff7473',
			},
			{
				label: EditLabels[4],
				data: Endpoint,
				fill: false,
				backgroundColor: '#ffc952',
				borderColor: '#ffc952',
				hoverBackgroundColor: '#ffc952',
				hoverBorderColor: '#ffc952',
			},
			{
				label: EditLabels[2],
				data: Auth,
				fill: false,
				backgroundColor: '#47b8e0',
				borderColor: '#47b8e0',
				hoverBackgroundColor: '#47b8e0',
				hoverBorderColor: '#47b8e0',
			},
			{
				label: EditLabels[3],
				data: Codegen,
				fill: false,
				backgroundColor: "#34314c",
				borderColor: "#34314c",
				hoverBackgroundColor:"#34314c",
				hoverBorderColor: "#34314c",
			},
			{
				label: EditLabels[1],
				data: Basic,
				fill: false,
				backgroundColor: "#e1eef6",
				borderColor: "#e1eef6",
				hoverBackgroundColor: "#e1eef6",
				hoverBorderColor: "#e1eef6",
			},
			{
				label: EditLabels[0],
				data: Errors,
				fill: false,
				backgroundColor: "#ff5f2e",
				borderColor: "#ff5f2e",
				hoverBackgroundColor: "#ff5f2e",
				hoverBorderColor: "#ff5f2e",
			}]
		},
		options: {
			title: {
				display: true,
				position: "bottom",
				text: "API Edits"

			},
	        scales: {
	            yAxes: [{
	                stacked: true,
	                ticks: {
	                	beginAtZero: true,
	                },
	                position: "left"
	            }],
	            xAxes: [{
	            	stacked: true,
	            	//position: "top"
	            }]
	        }
	    }
	})
}

function APIImport(data, status){
	var arr = JSON.parse(data);
	var lbl
	var data2 = [];
	var dates = [];
	var values = [];
	var i = 0;

	for(var key in arr) {
	    lbl = key;
	    data2 = arr[key];
	}

	for(var key in data2){
		dates[i] = key;
		values[i] = data2[key];
		i++;
	}

	var myChart = new Chart($("#chart5"), {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
				label: lbl,
				data: values,
				fill: false,
				backgroundColor: '#C89EC4',
				borderColor: '#C89EC4',
				hoverBackgroundColor: '#C89EC4',
				hoverBorderColor: '#C89EC4',
			}]
		},
		options: {
			title: {
				display: true,
				position: "bottom",
				text: "API Imports"

			},
	        scales: {
	            yAxes: [{
	                ticks: {
	                	beginAtZero: true,
	                }
	            }],
	        }
	    }
	})
}

var app = angular.module('Dashboard', []);
app.controller('SignUpController', function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})