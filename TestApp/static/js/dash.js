$(document).ready(function () {

	$.ajax({
		url: "dash/dau",
		success: function(data, status){
			var arr = JSON.parse(data);
			var data2 = [];
			var vals = [];
			var i = 0;

			for (key in arr){
				data2[i] = key;
				vals[i] = arr[key];
				i = i + 1;
			}

			var myChart = new Chart($("#chart"), {
				type: 'line',
				data: {
					labels: data2,
					datasets: [{
						label: "Daily Active Users",
						data: vals,
						fill: false,
						backgroundColor: "rgba(0, 0, 0, 1)",
						borderColor: "#19B4AC",
					}]
				},
				options: {
					title: {
						display: true,
						position: "bottom",
						text: "Daily Active Users"
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
						borderColor: "#19B4AC",
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
						borderColor: "#19B4AC",
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
						borderColor: "#19B4AC",
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
				backgroundColor: '#19B4AC',
				borderColor: '#19B4AC',
				hoverBackgroundColor: '#19B4AC',
				hoverBorderColor: '#19B4AC',
			},
			{
				label: SDKLabels[1],
				data: Web,
				fill: false,
				backgroundColor: '#0D4352',
				borderColor: '#0D4352',
				hoverBackgroundColor: '#0D4352',
				hoverBorderColor: '#0D4352',
			},
			{
				label: SDKLabels[2],
				data: Widget,
				fill: false,
				backgroundColor: '#9DDF95',
				borderColor: '#9DDF95',
				hoverBackgroundColor: '#9DDF95',
				hoverBorderColor: '#9DDF95',
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
	var dates = []
	var vals = []
	var i = 0;

	for(var key in arr){
		dates[i] = key;
		vals[i] = arr[key]
		i++;
	}

	var myChart = new Chart($("#chart4"), {
		type: 'bar',
		data: {
			labels: dates,
			datasets: [{
				label: "API Edits",
				data: vals,
				fill: false,
				backgroundColor: '#19B4AC',
				borderColor: '#19B4AC',
				hoverBackgroundColor: '#19B4AC',
				hoverBorderColor: '#19B4AC',
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
				backgroundColor: '#19B4AC',
				borderColor: '#19B4AC',
				hoverBackgroundColor: '#19B4AC',
				hoverBorderColor: '#19B4AC',
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