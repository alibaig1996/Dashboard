from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^login$', views.login, name="login"),
	url(r'^$', views.dash, name="dash"),
	url(r'^logincheck$', views.logincheck, name="logincheck"),	
	url(r'^dash/dgen$', views.dgen, name="dgen"),
	url(r'^dash/wgen$', views.wgen, name="wgen"),
	url(r'^dash/mgen$', views.mgen, name="mgen"),
	url(r'^dash/dedit$', views.dedit, name="dedit"),
	url(r'^dash/wedit$', views.wedit, name="wedit"),
	url(r'^dash/medit$', views.medit, name="medit"),
	url(r'^dash/dimport$', views.dimp, name="dimport"),
	url(r'^dash/wimport$', views.wimp, name="wimport"),
	url(r'^dash/mimport$', views.mimp, name="mimport"),
	url(r'^dash/nu_daily$', views.nu_daily, name="nu_daily"),
	url(r'^dash/nu_weekly$', views.nu_weekly, name="nu_weekly"),
	url(r'^dash/nu_monthly$', views.nu_monthly, name="nu_monthly"),
	url(r'^dash/dau$', views.dau, name="dau"),
	url(r'^dash/wau$', views.wau, name="wau"),
	url(r'^dash/mau$', views.mau, name="mau"),
	url(r'^dash/table$', views.table, name="table"),
]