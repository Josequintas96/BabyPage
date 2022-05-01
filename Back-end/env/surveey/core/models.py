from django.db import models
from django.contrib.auth.models import AbstractUser
  
# Create your models here.

GENDER_C = (
    ("M", "MALE"),
    ("F", "FEMALE")
)
  
  
class Survey(models.Model):
    name = models.CharField(max_length=30, unique=True)
    gender =  models.CharField(
        max_length = 20,
        choices = GENDER_C,
        default = '1')
    birth = models.DateField()
    message = models.TextField()
    
    def _str_(self):
     return self.name
    

class UserControl(AbstractUser):
    name = models.CharField(max_length=24)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=100)
    
    # Any extra fields would go here
    def __str__(self):
        return self.email
    
