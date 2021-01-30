from .models import FreelanceProjects
from rest_framework import serializers

# Serializers define the API representation.


class FreelanceProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelanceProjects
        fields = '__all__'
