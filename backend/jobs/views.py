from rest_framework import viewsets
from .models import Vacancy
from .serializers import VacancySerializer
from .telegram_api import send_to_telegram
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.urls import path

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

send_to_telegram_view = send_to_telegram
