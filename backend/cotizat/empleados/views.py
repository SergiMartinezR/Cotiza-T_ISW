from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import empleados_serializer

# Create your views here.

class empleados_view_set(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = empleados_serializer
