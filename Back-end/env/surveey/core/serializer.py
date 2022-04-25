from rest_framework import serializers
from  .models import * 


  
class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ['name', 'gender', 'birth', 'message']
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserControl
        fields = ('email', 'last_login', 'date_joined', 'is_staff')
        
