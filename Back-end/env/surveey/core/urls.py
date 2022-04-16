from django.urls import path
from . import views

urlpatterns = [
    path('', views.survey_with_pivot, name='survey_with_pivot'),
    path('data', views.pivot_data, name='pivot_data'),
]