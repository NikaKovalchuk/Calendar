from django.http import Http404, HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from tablib import Dataset

from app.settings import ADMIN_USER_ID
from .models import Event
from .resources import EventResource
from .serializers import EventSerializer, NewEventSerializer


# @permission_classes((IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly ))
class EventList(APIView):

    def get(self, request, format=None):
        events = Event.objects.filter(
            # user__in = [request.user.id]
        )
        serializer_context = {
            'request': request,
        }
        serializer = EventSerializer(events, many=True, context=serializer_context)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer_context = {
            'request': request,
        }
        serializer = NewEventSerializer(data=request.data, context=serializer_context)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class EventsExport(APIView):

    # export
    def get(self, request):
        event_resource = EventResource()
        dataset = event_resource.export()
        response = HttpResponse(dataset.json, content_type='application/json')
        response['Content-Disposition'] = 'attachment; filename="calendar.json"'
        return response

    # import
    def post(self, request):
        event_resource = EventResource()
        dataset = Dataset()
        new_events = request.FILES['file']

        imported_data = dataset.load(new_events.read())
        result = event_resource.import_data(dataset, dry_run=True)

        if not result.has_errors():
            event_resource.import_data(dataset, dry_run=False)  # Actually import now
