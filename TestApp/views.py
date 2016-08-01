from __future__ import print_function
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.template import loader
from lib import *
import requests
import imp
import json
import datetime
import calendar

user = 'b498c2c2d9a11a9dd9c15efd0a1a91fe'

# Create your views here.
api = Mixpanel(api_secret='b498c2c2d9a11a9dd9c15efd0a1a91fe')

def index(request):
	return HttpResponse("<h1>This is the index page</h1>")

def dash(request):
	if 'isset' in request.COOKIES.keys():
		template = loader.get_template('static/dash.html')
	else:
		template = loader.get_template('static/login.html')
	return HttpResponse(template.render())

def login(request):
	template = loader.get_template('static/login.html')
	return HttpResponse(template.render())

def logincheck(request):
	hr = HttpResponseRedirect('dash')
	hr.set_cookie('isset', 'true', 7200)
	return hr

def dgen(request):
	webEvent = "SDKGenerated_WEBSITE"
	widgetEvent = "SDKGenerated_WIDGET"
	apiEvent = "SDKGenerated_API"

	data = api.request(['events'], {
		'event': [webEvent, widgetEvent, apiEvent],
		'type' : 'general',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def wgen(request):
	
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

def mgen(request):
	webEvent = "SDKGenerated_WEBSITE"
	widgetEvent = "SDKGenerated_WIDGET"
	apiEvent = "SDKGenerated_API"

	data = api.request(['events'], {
		'event': [webEvent, widgetEvent, apiEvent],
		'type' : 'general',
		'unit' : 'month',
		'interval' : 3,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def dedit(request):
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	data = api.request(['events'], {
		'event': [errors, auth, basic, codegen, endpoint, model],
		'type' : 'general',
		'unit' : 'day',
		'interval' : 30,
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

def wedit(request):
	
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

def medit(request):
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	data = api.request(['events'], {
		'event': [errors, auth, basic, codegen, endpoint, model],
		'type' : 'general',
		'unit' : 'month',
		'interval' : 3,
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


def dimp(request):
	
	event = "ImportAPI"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'day',
		'interval' : 30,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def wimp(request):
	
	event = "ImportAPI"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'week',
		'interval' : 4,
		})['data']['values']

	return HttpResponse(json.dumps(data, sort_keys=True, indent=4, separators=(',', ': ')))

def mimp(request):
	
	event = "ImportAPI"

	data = api.request(['events'], {
		'event': [event],
		'type' : 'general',
		'unit' : 'month',
		'interval' : 3,
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

	base = datetime.datetime.today()
	date_list = [base - datetime.timedelta(days=x) for x in range(0, 30)]
	obj = {}
	for d in date_list:
		dt = d.date()
		scr = "function main() {  return Events({ from_date: \"" + str(dt) + "\", to_date: \"" + str(dt) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		data = response.json()
		obj[str(dt)] = len(data)

	return HttpResponse(json.dumps(obj, sort_keys=True, indent=4, separators=(',', ': ')))
	
def wau(request):
	base = datetime.datetime.today()
	date_list = [base - datetime.timedelta(weeks=x) for x in range(0, 5)]
	obj = {}

	for d in date_list:
		d2 = d - datetime.timedelta(weeks=1)
		fd = d2.date()
		td = d.date()
		scr = "function main() {  return Events({ from_date: \"" + str(fd) + "\", to_date: \"" + str(td) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		data = response.json()
		obj[str(td)] = len(data)

	return HttpResponse(json.dumps(obj, sort_keys=True, indent=4, separators=(',', ': ')))

def mau(request):
	base = datetime.datetime.today().date()
	first_day = base.replace(day = 1)
	last_day = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	obj = {}

	for i in range(0, 3):
		scr = "function main() {  return Events({ from_date: \"" + str(first_day) + "\", to_date: \"" + str(last_day) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		data = response.json()
		obj[str(first_day)] = len(data)
		last_day = first_day - datetime.timedelta(days=1)
		first_day = last_day.replace(day = 1)

	return HttpResponse(json.dumps(obj, sort_keys=True, indent=4, separators=(',', ': ')))

def table(request):
	CurDate = datetime.datetime.today().date()
	CurFirstDay = CurDate.replace(day = 1)
	CurLastDay = CurDate.replace(day = calendar.monthrange(CurDate.year, CurDate.month)[1])

	PrevLastDay = CurFirstDay - datetime.timedelta(days=1)
	PrevFirstDay = PrevLastDay.replace(day = 1)

	obj = {}

	for i in range(0, 3):
		month = CurFirstDay.month
		PrevActiveUsers = []
		CurActiveUsers = []
		CurUserSignUp = []
		PrevUserSignUp = []

		scr = "function main() {  return Events({ from_date: \"" + str(PrevFirstDay) + "\", to_date: \"" + str(PrevLastDay) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		PrevData = response.json()
		for i in PrevData:
			for val in i["key"]:
				PrevActiveUsers.append(val)

		scr = "function main() {  return Events({ from_date: \"" + str(PrevFirstDay) + "\", to_date: \"" + str(PrevLastDay) + "\"}).filter(function(event){ return event.name == \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		PrevUsers = response.json()
		for i in PrevUsers:
			for val in i["key"]:
				PrevUserSignUp.append(val)

		scr = "function main() {  return Events({ from_date: \"" + str(CurFirstDay) + "\", to_date: \"" + str(CurLastDay) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		CurData = response.json()
		for i in CurData:
			for val in i["key"]:
				CurActiveUsers.append(val)

		scr = "function main() {  return Events({ from_date: \"" + str(CurFirstDay) + "\", to_date: \"" + str(CurLastDay) + "\"}).filter(function(event){ return event.name == \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		CurUsers = response.json()
		for i in CurUsers:
			for val in i["key"]:
				CurUserSignUp.append(val)

		Rejoiners = []
		Churn = []

		for k in PrevActiveUsers:
			if k not in CurActiveUsers:
				Churn.append(k)

		for k in CurActiveUsers:
			if (k not in PrevActiveUsers and k not in CurUserSignUp) or (k in PrevUserSignUp and k not in PrevActiveUsers):
				Rejoiners.append(k)

		obj2 = {}
		obj2["Name"] = calendar.month_name[month]
		obj2["Opening"] = len(PrevActiveUsers)
		obj2["Monthly Active Users"] = len(CurActiveUsers)
		obj2["Sign Ups"] = len(CurUserSignUp)
		obj2["Rejoiners"] = len(Rejoiners)
		obj2["Churn"] = len(Churn)
		obj2["Users from previous month"] = len(PrevActiveUsers) - len(Churn)
		x = len(Rejoiners) + (len(PrevActiveUsers) - len(Churn))
		obj2["Users prior to this month"] = x
		y = len(CurActiveUsers) - x
		obj2["Active Users from monthly Sign Ups"] = y
		z = len(CurUserSignUp) - y
		obj2["Non Active New Sign Ups"] = z

		obj[str(CurFirstDay)] = obj2


		CurLastDay = PrevLastDay
		CurFirstDay = PrevFirstDay
		PrevLastDay = PrevFirstDay - datetime.timedelta(days=1)
		PrevFirstDay = PrevLastDay.replace(day = 1)

	return HttpResponse(json.dumps(obj, sort_keys=True, indent=4, separators=(',', ': ')))