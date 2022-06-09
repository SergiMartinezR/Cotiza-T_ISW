from dataclasses import field
from rest_framework import serializers
from .models import User
from rest_framework.authtoken.models import Token


class empleados_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            name=validated_data['name'],
            last_name=validated_data['last_name'],
            fecha_nac=validated_data['fecha_nac'],
            anios_cotizados=validated_data['anios_cotizados'],
            image=validated_data['image'],
            ultimo_puesto=validated_data['ultimo_puesto'],
            empresa=validated_data['empresa'],
            curriculum=validated_data['curriculum']
        )
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user
