from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm 
from .models import * 

 
class CustomUserCreationForm(UserCreationForm):    
    class Meta:        
        model = UserControl        
        fields = ('email', )  
        
class CustomUserChangeForm(UserChangeForm):    
    class Meta:        
        model = UserControl        
        fields = UserChangeForm.Meta.fields


