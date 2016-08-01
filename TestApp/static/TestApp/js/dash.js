$(document).ready(function () {
	
	$.ajax({
		url: "dash/dau",
		success: DAU
	})

	$.ajax({
		url: "dash/wau",
		success: WAU
	})

	$.ajax({
		url: "dash/mau",
		success: MAU
	})

	$.ajax({
		url: "dash/table",
		success: ChurnChart
	})

	$.ajax({
		url: "dash/nu_daily",
		success: NUDaily
	})

	$.ajax({
		url: "dash/nu_weekly",
		success: NUWeekly
	})

	$.ajax({
		url: "dash/nu_monthly",
		success: NUMonthly
	})

	$.ajax({
		url: "dash/dgen",
		success: SDKGenDaily
	});

	$.ajax({
		url: "dash/wgen",
		success: SDKGenWeekly
	});

	$.ajax({
		url: "dash/mgen",
		success: SDKGenMonthly
	});

	$.ajax({
		url: "dash/dedit",
		success: APIEditDaily
	})

	$.ajax({
		url: "dash/wedit",
		success: APIEditWeekly
	})

	$.ajax({
		url: "dash/medit",
		success: APIEditMonthly
	})
	
	$.ajax({
		url: "dash/dimport",
		success: APIImportDaily
	})

	$.ajax({
		url: "dash/wimport",
		success: APIImportWeekly
	})

	$.ajax({
		url: "dash/mimport",
		success: APIImportMonthly
	})
})

function DAU(data, status){
	var arr = JSON.parse(data);
	var keys = [];
	var vals = [];
	var i = 0;

	for (key in arr){
		keys[i] = key;
		vals[i] = arr[key];
		i = i + 1;
	}

	$("#l11").hide()
	$("#c11").show()

	var myChart = new Chart($("#chart11"), {
		type: 'line',
		data: {
			labels: keys,
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

function WAU(data, status){
	var arr = JSON.parse(data);
	var keys = [];
	var vals = [];
	var i = 0;

	for (key in arr){
		keys[i] = key;
		vals[i] = arr[key];
		i = i + 1;
	}

	$("#l12").hide()
	$("#c12").show()

	var myChart = new Chart($("#chart12"), {
		type: 'line',
		data: {
			labels: keys,
			datasets: [{
				label: "Weekly Active Users",
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
				text: "Weekly Active Users"
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

function MAU (data, status) {
	var arr = JSON.parse(data);
	var keys = [];
	var vals = [];
	var i = 0;

	for (key in arr){
		keys[i] = key;
		vals[i] = arr[key];
		i = i + 1;
	}

	$("#l13").hide()
	$("#c13").show()

	var myChart = new Chart($("#chart13"), {
		type: 'line',
		data: {
			labels: keys,
			datasets: [{
				label: "Monthly Active Users",
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
				text: "Monthly Active Users"
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

function ChurnChart(data, status) {
	var arr = JSON.parse(data)
	//alert(data)
	months = []
	churn = []
	cau = []
	pau = []
	rejoin = []
	su = []
	up = []
	up2 = []
	am = []
	nam = []

	i = 0
	for (key in arr){
		months[i] = arr[key]["Name"]
		churn[i] = arr[key]["Churn"]
		cau[i] = arr[key]["Monthly Active Users"]
		pau[i] = arr[key]["Opening"]
		rejoin[i] = arr[key]["Rejoiners"]
		su[i] = arr[key]["Sign Ups"]
		up[i] = arr[key]["Users from previous month"]
		up2[i] = arr[key]["Users prior to this month"]
		am[i] = arr[key]["Active Users from monthly Sign Ups"]
		nam[i] = arr[key]["Non Active New Sign Ups"]
		i++
	}

	$("#ltb").hide()

	$('#tb').append('<table id = "tb2" style="height: 100%" class="highlight responsive-table"></table>');
	var table = $('#tb2');
	table.append("<thead id = \"thd\"><tr id=\"trd\"><th>&nbsp</th></tr></thead>")
	table.append("<tr id = 'pau'><td>Opening</td></tr>")
	table.append("<tr id = 'ch'><td>(Churn)<td></tr>")
	table.append("<tr id = 're'><td>Rejoiners<td></tr>")
	table.append("<tr id = 'am'><td>Current Month Active Sign Ups<td></tr>")
	table.append("<tr id = 'cau'><td>Current Active Users<td></tr>")


	for (i = 0; i < months.length; i++){
		$('#trd').append("<th>" + months[i] + "</th>")
	}

	for(j = 0; j < su.length; j++){
		$('#pau').append("<td>" + pau[j] + "</td>");

		if (j == 0){
			$('#am').children().last().remove()
			$('#ch').children().last().remove()
			$('#cau').children().last().remove()
			$('#re').children().last().remove()
		}

		$('#am').append("<td>" + am[j] + "</td>")
		$('#ch').append("<td>" + churn[j] + "</td>");
		$('#re').append("<td>" + rejoin[j] + "</td>");
		$('#cau').append("<td>" + cau[j] + "</td>");
	}

	var data = {
	    labels: months,
	    datasets: [{
	        label: "Monthly Active Sign Ups",
	        type: "line",
	        fill: false,
			backgroundColor: "rgba(0, 0, 0, 1)",
			borderColor: "#19B4AC",
	        data: am
	    }, {
	    	label: "Churn",
	        type: "line",
	        fill: false,
			backgroundColor: "rgba(0, 0, 0, 1)",
			borderColor: "#9DDF95",
	        data: churn
	    }, {
	    	label: "Rejoiners",
	        type: "line",
	        fill: false,
			backgroundColor: "rgba(0, 0, 0, 1)",
			borderColor: "#8895AD",
	        data: rejoin
	    }, {
	        label: "Monthly Active Users",
	        type: "bar",
	        fill: false,
			backgroundColor: '#0D4352',
			borderColor: '#0D4352',
			hoverBackgroundColor: '#0D4352',
			hoverBorderColor: '#0D4352',
	        data: cau
	    }]
	};

	$("#lch").hide()
	$("#cch").show()

	var myChart = new Chart($("#c-chart"), {
		type: 'bar',
		data: data,
		options: {
	        responsive: true,
	        title: {
	            display: true,
	            position: "bottom",
	            text: 'Churn Chart'
	        },
	         scales: {
	            yAxes: [{
	                //stacked: true,
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

function NUDaily (data, status) {
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

	$("#l21").hide()
	$("#c21").show()

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

function NUWeekly(data, status){
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

	$("#l22").hide()
	$("#c22").show()

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

function NUMonthly (data, status) {
	var arr = JSON.parse(data);
	var data2 = []
	var i = 0;
	var MonthlyDates = [];
	var MonthlyVals = [];

	for (key in arr){
		data2 = arr[key]
	}

	$("#l23").hide()
	$("#c23").show()

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

function SDKGenDaily(data, status){
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

	$("#l31").hide()
	$("#c31").show()


	var myChart = new Chart($("#chart31"), {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: SDKLabels[0],
				data: API,
				fill: false,
				backgroundColor: "rgba(0, 0, 0, 1)",
				borderColor: "#19B4AC",
			},
			{
				label: SDKLabels[1],
				data: Web,
				fill: false,
				backgroundColor: "rgba(0, 0, 0, 1)",
				borderColor: "#8895AD",
			},
			{
				label: SDKLabels[2],
				data: Widget,
				fill: false,
				backgroundColor: "rgba(0, 0, 0, 1)",
				borderColor: "#9DDF95",
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
	                //stacked: true,
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

function SDKGenWeekly(data, status) {
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

	$("#l32").hide()
	$("#c32").show()

	var myChart = new Chart($("#chart32"), {
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

function SDKGenMonthly(data, status){
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

	$("#l33").hide()
	$("#c33").show()

	var myChart = new Chart($("#chart33"), {
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

function APIEditDaily(data, status){
	var arr = JSON.parse(data);
	var dates = []
	var vals = []
	var i = 0;

	for(var key in arr){
		dates[i] = key;
		vals[i] = arr[key]
		i++;
	}

	$("#l41").hide()
	$("#c41").show()

	var myChart = new Chart($("#chart41"), {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: "API Edits",
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

function APIEditWeekly(data, status){
	var arr = JSON.parse(data);
	var dates = []
	var vals = []
	var i = 0;

	for(var key in arr){
		dates[i] = key;
		vals[i] = arr[key]
		i++;
	}

	$("#l42").hide()
	$("#c42").show()

	var myChart = new Chart($("#chart42"), {
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

function APIEditMonthly(data, status){
	var arr = JSON.parse(data);
	var dates = []
	var vals = []
	var i = 0;

	for(var key in arr){
		dates[i] = key;
		vals[i] = arr[key]
		i++;
	}

	$("#l43").hide()
	$("#c43").show()

	var myChart = new Chart($("#chart43"), {
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

function APIImportDaily(data, status){
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

	$("#l51").hide()
	$("#c51").show()

	var myChart = new Chart($("#chart51"), {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: lbl,
				data: values,
				fill: false,
				backgroundColor: "rgba(0, 0, 0, 1)",
				borderColor: "#19B4AC",
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

function APIImportWeekly(data, status){
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

	$("#l52").hide()
	$("#c52").show()

	var myChart = new Chart($("#chart52"), {
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

function APIImportMonthly(data, status){
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

	$("#l53").hide()
	$("#c53").show()

	var myChart = new Chart($("#chart53"), {
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
	this.tab = 2;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})

app.controller('AUController', function(){
	this.tab = 2;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})

app.controller('ChurnController', function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})

app.controller('SDKController', function(){
	this.tab = 2;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})

app.controller('EditController', function(){
	this.tab = 2;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})


app.controller('ImportController', function(){
	this.tab = 2;

	this.selectTab = function(setTab){
		this.tab = setTab;		
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
})