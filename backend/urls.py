from django.urls import path, include
from rest_framework.routers import DefaultRouter
from jobs.views import VacancyViewSet
from press.views import PressReleaseViewSet

router = DefaultRouter()
router.register(r'vacancies', VacancyViewSet)
router.register(r'press-releases', PressReleaseViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]