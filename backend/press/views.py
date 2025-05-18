from rest_framework import viewsets
from .models import PressRelease
from .serializers import PressReleaseSerializer

class PressReleaseViewSet(viewsets.ModelViewSet):
    queryset = PressRelease.objects.all()
    serializer_class = PressReleaseSerializer
