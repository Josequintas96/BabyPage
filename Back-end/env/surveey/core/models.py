from django.db import models
  
# Create your models here.

GENDER_C = (
    ("M", "MALE"),
    ("F", "FEMALE")
)


  
class Survey(models.Model):
    name = models.CharField(max_length=30)
    gender =  models.CharField(
        max_length = 20,
        choices = GENDER_C,
        default = '1')
    birth = models.DateField()
    message = models.TextField()
    
    def _str_(self):
     return self.name
    