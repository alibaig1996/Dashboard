from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from lib import *
import datetime

# Create your views here.
api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')

def index(request):
	return HttpResponse("<h1>This is the index page</h1>")

def languages(request):
	template = loader.get_template('test/languages.html')
	event = "SDKGenerated_WEBSITE"
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

	date = []
	data2 = {}
	
	for key in data:
		for key2 in data[key]:
			date.append(key2)
		break

	for i in date:
		data2[i] = data[errors][i] + data[auth][i]+ data[basic][i] + data[codegen][i] + data[endpoint][i] + data[model][i]

	return HttpResponse(json.dumps(data2, sort_keys=True, indent=4, separators=(',', ': ')))

def imp(request):
	
	event = "ImportAPI"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_daily(request):
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))	

def nu_weekly(request):
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_monthly(request):
	
	event = "NewUser_Signup"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'month',
		'interval' : 6,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def dash2(request):
	template = loader.get_template('static/dash2.html')
	return HttpResponse(template.render())

def addEvent(dict, event): #{	
	data = api.request(['events', 'properties'], {
		'event': event,
		'name' : 'UserEmail',
		'type' : 'unique',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	dict2 = {}

	for key in data:
		list = []
		for key2 in data[key]:
			if data[key][key2] == 1:
				list.append(key2)
		dict2[key] = list

	for key in dict2:
		if key not in dict:
			dict[key] = []
			for i in dict2[key]:
				dict[key].append(i)
		else:
			for i in dict2[key]:
				if i not in dict[key]:
					dict[key].append(i)

	return dict
#}

def dau(request):
	
	webEvent = "SDKGenerated_WEBSITE"
	widgetEvent = "SDKGenerated_WIDGET"
	apiEvent = "SDKGenerated_API"
	importAPI = "ImportAPI"
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"
	createAPI = "CreateAPI"
	apivalid = "APIValidation_Failed"
	export = "Export_APIDescription"
	importfail = "Import_Failed"
	importmodel = "ImportModel_JSON"
	git = "Git_Deployment"
	importAPISDKSIO = "ImportAPI_SDKSIO"
	plan = "Plan_Switch"
	importendpoint = "ImportEndpoint_CURL"

	data = api.request(['events', 'properties'], {
		'event': webEvent,
		'name' : 'UserEmail',
		'type' : 'unique',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	dict = {}

	for key in data:
		list = []
		for key2 in data[key]:
			if data[key][key2] == 1:
				list.append(key2)
				
		dict[key] = list

	dict = addEvent(dict, apiEvent)
	dict = addEvent(dict, widgetEvent)
	dict = addEvent(dict, importAPI)
	dict = addEvent(dict, errors)
	dict = addEvent(dict, auth)
	dict = addEvent(dict, basic)
	dict = addEvent(dict, codegen)
	dict = addEvent(dict, endpoint)
	dict = addEvent(dict, model)
	dict = addEvent(dict, errors)
	dict = addEvent(dict, createAPI)
	dict = addEvent(dict, apivalid)
	dict = addEvent(dict, export)
	dict = addEvent(dict, importfail)
	dict = addEvent(dict, importmodel)
	dict = addEvent(dict, git)
	dict = addEvent(dict, importAPISDKSIO)
	dict = addEvent(dict, plan)
	dict = addEvent(dict, importendpoint)

	dates = {}

	for key in dict:
		for i in dict[key]:
			if i not in dates.keys():
				dates[i] = 1
			else:
				dates[i] = dates[i] + 1

	return HttpResponse(json.dumps(dates, sort_keys=True, indent=4, separators=(',', ': '))) 