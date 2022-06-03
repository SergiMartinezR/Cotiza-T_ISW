from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import empleados_view_set

router = routers.DefaultRouter()
router.register('', empleados_view_set)

urlpatterns = [
    path('', include(router.urls)),
]