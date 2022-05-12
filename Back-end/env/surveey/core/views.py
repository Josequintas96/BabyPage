from unicodedata import name
from django.shortcuts import redirect, render
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from django.db.models import Count


from rest_framework.generics import ListAPIView

from .models import *
from rest_framework.response import Response
from .serializer import *

from django.http import JsonResponse
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
    
    # @api_view(["DELETE"])
    def delete(self, request):
        if request.method == "DELETE":
            val = request.data.get("user_name");
            objEE = Survey.objects.filter(name = val);
            if objEE:
                objEE.delete()
                # return Response({'status': 'OK'},"File being erase")
                return Response("Database erase, thank for work")
            # return Response("No file, no possible erasure")
            # handler400 = 'rest_framework.exceptions.bad_request'
            handler400 = {
                                "status_code" : 404,
                                "error" : "The resource was not found!!",
                                "value": val,
                                "value2": request.data,
                            }
            return Response(handler400)
        handler400 = {
                                "status_code" : 404,
                                "error" : "The resource is not DELETE"
                            }
        return Response(handler400)
        

    
        
        

class Gender_count_View(APIView):
    
    def get(self, request):
        countsG = [
            {
                # male count
                "symbol": "Niños",
                "amount": Survey.objects.filter(gender = "M").count(),
                "color": "#0033ad",
            },
            {
                "symbol": "Niñas",
                "amount": Survey.objects.filter(gender = "F").count(),
                "color": "#ff00c2",
            }
            ,
            {
                "symbol": "Insertio",
                "amount": Survey.objects.filter(gender = "null").count(),
                "color": "#000000",
            }
        ]
        return Response(countsG)
    
    
class Date_count_View(APIView):
    
    def get(self, request):
        # countsCalendar = {}
        
        countsCalendar = Survey.objects.values(
                        'birth').order_by(
                        'birth').annotate(votes=Count('birth'))
                        

        # Survey.objects.filter(
            # event="birth",
            # ).order_by('birth').values(
            #     'birth__date'
            # ).annotate(count=Count('birth__date'))

        return Response(countsCalendar)
    

    
        return Response(countsCalendar)
        
          
