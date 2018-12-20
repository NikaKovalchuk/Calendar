from django.views.generic import TemplateView

from app.settings import ADMIN_USER_ID
from .models import Event
from.serializers import EventSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# @permission_classes((IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly ))
class EventList(APIView):

    def get(self, request, format=None):
        events = Event.objects.filter(
           #user__in = [request.user.id]
        )
        serializer_context = {
            'request': request,
        }
        serializer = EventSerializer(events, many=True, context=serializer_context)
        return Response(serializer.data)

# @permission_classes((IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly ))
class EventDetail(APIView):
    def get_object(self, pk, request):
        try:
            if request.user.id == ADMIN_USER_ID:
                return Event.objects.filter(
                    pk=pk
                ).first()
            else:
                return Event.objects.filter(
                    pk=pk,
                   # user__in=[request.user.id]
                ).first()
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        serializer_context = {
            'request': request,
        }
        if request.user.id == ADMIN_USER_ID:
            event = Event.objects.filter(pk=pk)
        else:
            event = Event.objects.filter(
                pk=pk,
                # user__in=[request.user.id]
            )
        serializer = EventSerializer(event, context=serializer_context, many=True)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        serializer_context = {
            'request': request,
        }
        event = self.get_object(pk, request)
        serializer = EventSerializer(event, data=request.data, context=serializer_context)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        event = self.get_object(pk, request)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self, request, format=None):
        serializer_context = {
            'request': request,
        }
        serializer = EventSerializer(data=request.data, context=serializer_context)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)