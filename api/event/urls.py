from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.urls import path

urlpatterns = [
    path('<int:pk>/', views.EventDetail.as_view(), name="event-detail"),
    path('', views.EventList.as_view(), name="event-list"),
]

urlpatterns = format_suffix_patterns(urlpatterns)