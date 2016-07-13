from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'), # Index page
	url(r'^languages$', views.languages, name='languages'), # Languages
	url(r'^sdk$', views.sdk, name='sdk'),
	url(r'^dash$', views.dash, name="dash"),
	url(r'^dash/gen$', views.gen, name="gen"),
	url(r'^dash/edit$', views.edit, name="edit"),
	url(r'^dash/import$', views.imp, name="import"),
	url(r'^dash/nu_daily$', views.nu_daily, name="nu_daily"),
	url(r'^dash/nu_weekly$', views.nu_weekly, name="nu_weekly"),
	url(r'^dash/nu_monthly$', views.nu_monthly, name="nu_monthly"),
	url(r'^dash2$', views.dash2, name="dash2"),
]