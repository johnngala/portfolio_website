from django.urls import path
from .views import FreelanceProjectsListView

urlpatterns = [
    path('', FreelanceProjectsListView.as_view())
]
