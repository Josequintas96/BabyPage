from django.urls import path, include, re_path
from . import views

# urlpatterns = [
#     path('', views.survey_with_pivot, name='survey_with_pivot'),
#     path('data', views.pivot_data, name='pivot_data'),
# ]

urlpatterns = [
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls'))
]