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

def InHouseFilter(lst):
	for i in lst:
		if i.find("@apimatic") != -1:
			lst.remove(i)

	return  lst		

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
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(days=30)

	events = ["SDKGenerated_WEBSITE", "SDKGenerated_WIDGET", "SDKGenerated_API"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'day',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def wgen(request):
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(weeks=4)

	events = ["SDKGenerated_WEBSITE", "SDKGenerated_WIDGET", "SDKGenerated_API"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'week',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def mgen(request):
	base = datetime.datetime.today().date()
	first_day = base.replace(day=1)
	td = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	for x in range(0, 5):
		last_day = first_day - datetime.timedelta(days=1)
		first_day = last_day.replace(day=1)

	fd = first_day

	events = ["SDKGenerated_WEBSITE", "SDKGenerated_WIDGET", "SDKGenerated_API"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'month',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def dedit(request):
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(days=30)

	events = ["Save_API_Errors", "Save_Auth_Settings", "Save_Basic_Settings", "Save_Codegen_Settings", "Save_Endpoint", "Save_Model"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'day',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]

	date = []
	data2 = {}

	for key in dict:
		for key2 in dict[key]:
			date.append(key2)
		break

	for i in date:
		data2[i] = dict[errors][i] + dict[auth][i]+ dict[basic][i] + dict[codegen][i] + dict[endpoint][i] + dict[model][i]

	return HttpResponse(json.dumps(data2, sort_keys=True, indent=4, separators=(',', ': ')))

def wedit(request):
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(weeks=4)

	events = ["Save_API_Errors", "Save_Auth_Settings", "Save_Basic_Settings", "Save_Codegen_Settings", "Save_Endpoint", "Save_Model"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'week',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]

	date = []
	data2 = {}

	for key in dict:
		for key2 in dict[key]:
			date.append(key2)
		break

	for i in date:
		data2[i] = dict[errors][i] + dict[auth][i]+ dict[basic][i] + dict[codegen][i] + dict[endpoint][i] + dict[model][i]

	return HttpResponse(json.dumps(data2, sort_keys=True, indent=4, separators=(',', ': ')))

def medit(request):
	errors = "Save_API_Errors"
	auth = "Save_Auth_Settings"
	basic = "Save_Basic_Settings"
	codegen = "Save_Codegen_Settings"
	endpoint = "Save_Endpoint"
	model = "Save_Model"

	base = datetime.datetime.today().date()
	first_day = base.replace(day=1)
	td = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	for x in range(0, 5):
		last_day = first_day - datetime.timedelta(days=1)
		first_day = last_day.replace(day=1)

	fd = first_day

	events = ["Save_API_Errors", "Save_Auth_Settings", "Save_Basic_Settings", "Save_Codegen_Settings", "Save_Endpoint", "Save_Model"]

	dict = {}

	for i in events:
		data = api.request(['segmentation'], {
			'event': i,
			'from_date': fd,
			'to_date': td,
			'unit': 'month',
			'where': 'not "@apimatic" in properties["UserEmail"]'
			})['data']['values']
		dict[i] = data[i]

	date = []
	data2 = {}

	for key in dict:
		for key2 in dict[key]:
			date.append(key2)
		break

	for i in date:
		data2[i] = dict[errors][i] + dict[auth][i]+ dict[basic][i] + dict[codegen][i] + dict[endpoint][i] + dict[model][i]

	return HttpResponse(json.dumps(data2, sort_keys=True, indent=4, separators=(',', ': ')))


def dimp(request):
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(days=30)

	event = "ImportAPI"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'day',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def wimp(request):
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(weeks=4)

	event = "ImportAPI"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'week',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def mimp(request):
	base = datetime.datetime.today().date()
	first_day = base.replace(day=1)
	td = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	for x in range(0, 5):
		last_day = first_day - datetime.timedelta(days=1)
		first_day = last_day.replace(day=1)

	fd = first_day

	event = "ImportAPI"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'month',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))


def nu_daily(request):
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(days=30)

	event = "NewUser_Signup"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'day',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_weekly(request):
	td = datetime.datetime.today().date()
	fd = td - datetime.timedelta(weeks=4)

	event = "NewUser_Signup"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'week',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def nu_monthly(request):
	base = datetime.datetime.today().date()
	first_day = base.replace(day=1)
	td = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	for x in range(0, 5):
		last_day = first_day - datetime.timedelta(days=1)
		first_day = last_day.replace(day=1)

	fd = first_day

	event = "NewUser_Signup"

	dict = {}
	data = api.request(['segmentation'], {
		'event': event,
		'from_date': fd,
		'to_date': td,
		'unit': 'month',
		'where': 'not "@apimatic" in properties["UserEmail"]'
		})['data']['values']
	dict[event] = data[event]
		
	return HttpResponse(json.dumps(dict, sort_keys=True, indent=4, separators=(',', ': ')))

def dau(request):

	base = datetime.datetime.today()
	date_list = [base - datetime.timedelta(days=x) for x in range(0, 30)]
	obj = {}
	for d in date_list:
		dt = d.date()
		scr = "function main() {  return Events({ from_date: \"" + str(dt) + "\", to_date: \"" + str(dt) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		data = response.json()
		data2 = []
		for i in data:
			for val in i["key"]:
				data2.append(val)

		data2 = InHouseFilter(data2)
		obj[str(dt)] = len(data2)

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
		data2 = []
		for i in data:
			for val in i["key"]:
				data2.append(val)

		data2 = InHouseFilter(data2)
		obj[str(td)] = len(data2)

	return HttpResponse(json.dumps(obj, sort_keys=True, indent=4, separators=(',', ': ')))

def mau(request):
	base = datetime.datetime.today().date()
	first_day = base.replace(day = 1)
	last_day = base.replace(day = calendar.monthrange(base.year, base.month)[1])

	obj = {}

	for i in range(0, 6):
		scr = "function main() {  return Events({ from_date: \"" + str(first_day) + "\", to_date: \"" + str(last_day) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		data = response.json()
		data2 = []
		for i in data:
			for val in i["key"]:
				data2.append(val)

		data2 = InHouseFilter(data2)
		obj[str(first_day)] = len(data2)
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

	for i in range(0, 6):
		month = CurFirstDay.month
		PrevActiveUsers = []
		CurActiveUsers = []
		CurUserSignUp = []
		PrevUserSignUp = []

		scr = "function main() {  return Events({ from_date: \"" + str(PrevFirstDay) + "\", to_date: \"" + str(PrevLastDay) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		PrevData = response.json()
		#print (PrevData)
		for i in PrevData:
			for val in i["key"]:
				PrevActiveUsers.append(val)

		PrevActiveUsers = InHouseFilter(PrevActiveUsers)

		scr = "function main() {  return Events({ from_date: \"" + str(PrevFirstDay) + "\", to_date: \"" + str(PrevLastDay) + "\"}).filter(function(event){ return event.name == \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		PrevUsers = response.json()
		#print (PrevUsers)
		for i in PrevUsers:
			for val in i["key"]:
				PrevUserSignUp.append(val)

		PrevUserSignUp = InHouseFilter(PrevUserSignUp)

		scr = "function main() {  return Events({ from_date: \"" + str(CurFirstDay) + "\", to_date: \"" + str(CurLastDay) + "\"}).filter(function(event){ return event.name != \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		CurData = response.json()
		#print (CurData)
		for i in CurData:
			for val in i["key"]:
				CurActiveUsers.append(val)

		CurActiveUsers = InHouseFilter(CurActiveUsers)				

		scr = "function main() {  return Events({ from_date: \"" + str(CurFirstDay) + "\", to_date: \"" + str(CurLastDay) + "\"}).filter(function(event){ return event.name == \"NewUser_Signup\"}).groupBy([\"distinct_id\"], mixpanel.reducer.count())}"
		response = requests.post("https://mixpanel.com/api/2.0/jql", auth=(user, ''), data={"script" : scr})
		CurUsers = response.json()
		#print (CurUsers)
		for i in CurUsers:
			for val in i["key"]:
				CurUserSignUp.append(val)

		CurUserSignUp = InHouseFilter(CurUserSignUp)

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