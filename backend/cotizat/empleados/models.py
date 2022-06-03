from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from .validators import validate_file_extension, validate_image_extension, validate_file_size

# Create your models here.


class UserManager(BaseUserManager):
    def _create_user(self, email, name, last_name, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            email=email,
            name=name,
            last_name=last_name,
            is_staff=is_staff,
            is_superuser=is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, email, name, last_name, password=None, **extra_fields):
        return self._create_user(email, name, last_name, password, False, False, **extra_fields)

    def create_superuser(self, email, name, last_name, password=None, **extra_fields):
        return self._create_user(email, name, last_name, password, True, True, **extra_fields)

def file_upload_location(instance, filename):
    filebase, extension = filename.split('.')
    return 'media/empleados/documentos/%scv.%s' % (instance.name, extension)

def image_upload_location(instance, imagename):
    filebase, extension = imagename.split('.')
    return 'media/empleados/imagenes/%spfp.%s' % (instance.name, extension)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('Correo Electrónico',
                              max_length=255, unique=True, blank=False, null=False)
    name = models.CharField('Nombres', max_length=255, blank=False)
    last_name = models.CharField(
        'Apellidos', max_length=255, blank=False)
    image = models.ImageField(
        'Foto de perfil',
        upload_to=image_upload_location,
        validators=[validate_image_extension, validate_file_size],
        max_length=255,
        null=True,
        blank=True
    )
    fecha_nac = models.DateField(
        'Fecha de nacimiento', blank=False, null=False)
    anios_cotizados = models.PositiveIntegerField(
        'Años cotizados',
        validators=[
            MaxValueValidator(100),
            MinValueValidator(10)
        ],
        blank=False,
        null=False
    )
    ultimo_puesto = models.CharField(
        'Último puesto', max_length=255, blank=True)
    empresa = models.CharField(
        'Empresa último puesto', max_length=255, blank=True)
    curriculum = models.FileField('CV', 
        upload_to=file_upload_location,
        validators=[validate_file_extension, validate_file_size],
        blank=True,
        null=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()

    class Meta:
        verbose_name = 'Empleado'
        verbose_name_plural = 'Empleados'

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'last_name', 'fecha_nac', 'anios_cotizados']

    def __str__(self):
        return f'{self.name} {self.last_name}'
