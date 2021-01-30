from django.db import models
from datetime import datetime

# Create your models here.


class FreelanceProjects(models.Model):
    businessName = models.CharField(max_length=50)
    siteUrl = models.CharField(max_length=50)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d')
    content = models.TextField()
    date_created = models.DateField(default=datetime.now, blank=True)


def __str__(self):
    return self.title
