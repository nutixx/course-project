from django.urls import path, include
from rest_framework.routers import DefaultRouter
from jobs.views import VacancyViewSet
from press.views import PressReleaseViewSet
from django.contrib import admin

router = DefaultRouter()
router.register(r'vacancies', VacancyViewSet)
router.register(r'press-releases', PressReleaseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]