import imp
from rest_framework import serializers
from organization.models import Organization, OrganizationDetail, OrganizationProfile

class OrganizationSerializer(serializers.ModelSerializer):
          
    class Meta:
        model   = Organization
        fields = '__all__'