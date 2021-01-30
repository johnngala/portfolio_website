from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from website.models import FreelanceProjects
from website.serializers import FreelanceProjectsSerializer


class FreelanceProjectsListView(ListAPIView):
    queryset = FreelanceProjects.objects.order_by('-date_created')
    serializer_class = FreelanceProjectsSerializer
    permissions_classes = (permissions.AllowAny, )
