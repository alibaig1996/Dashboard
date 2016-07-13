from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from lib import *
import datetime

# Create your views here.

def index(request):
	return HttpResponse("<h1>This is the index page</h1>")

def languages(request):
	template = loader.get_template('test/languages.html')
	event = "SDKGenerated_WEBSITE"
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': '2016-05-23',
		'to_date' : '2016-06-23',
		'on' : 'properties["Language"]',
		'unit' : 'week'
	})
	
	data2 = data['data']['values']

	dict = {};

	for key in data2:
		data3 = data2[key]
		val = 0
		for i in data3:
			val += data3[i]
		dict[key] = val;

	context = {
		'dict' : dict,
	}
	return HttpResponse(template.render(context, request))

def sdk(request):
	template = loader.get_template('static/sdks.html')
	return HttpResponse(template.render())

def dash(request):
	template = loader.get_template('static/dash.html')
	return HttpResponse(template.render())

def gen(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	webEvent = "SDKGenerated_WEBSITE"
	widgetEvent = "SDKGenerated_WIDGET"
	apiEvent = "SDKGenerated_API"

	data = api.request(['events'], {
		'event': [webEvent, widgetEvent, apiEvent],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def edit(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	data = api.request(['events'], {
		'event': [errors, auth, basic, codegen, endpoint, model],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def imp(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	event = "ImportAPI"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_daily(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))	

def nu_weekly(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_monthly(request):
	api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'month',
		'interval' : 3,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def dash2(request):
	template = loader.get_template('static/dash2.html')
	return HttpResponse(template.render())