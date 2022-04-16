from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *

from django.http import JsonResponse
from django.shortcuts import render
# from core.models import Order
from django.core import serializers
# Create your views here.
  
class ReactView(APIView):
    
    serializer_class = ReactSerializer
  
    def get(self, request):
        detail = [ {"name": detail.name,
                    "birth": detail.birth,
                    "gender": detail.gender,
                    
                    "message": detail.message} 
        for detail in Survey.objects.all() ]
        return Response(detail)
    
  
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
        
def survey_with_pivot(request):
    return render(request, 'survey_with_pivot.html', {})

def pivot_data(request):
    dataset = Survey.objects.all()
    data = serializers.serialize('json', dataset)
    return JsonResponse(data, safe=False)