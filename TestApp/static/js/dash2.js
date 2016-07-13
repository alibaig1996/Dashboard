$(document).ready(function(){
	new Chartist.Bar('#chart', {
			labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
			series: [
				[60000, 40000, 80000, 70000],
				[40000, 30000, 70000, 65000],
				[8000, 3000, 10000, 6000]
			]
		});

	$.ajax({
		url: "dash/gen",
		success: SDKGen
	});

})
function SDKGen (data, status) {
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

	var d1 = []; var d2 = []; var d3 = [];
	d1.push(SDKLabels[0]); d1.push(API);
	d2.push(SDKLabels[2]); d2.push(Widget);
	d3.push(SDKLabels[1]); d3.push(Web);

	alert(d1);
	new Chartist.Bar('#chart3', {
		label: dates,
		series: [
			d1, d2, d3
		]
	}, {
		stackBars: true,
	})  
}