import os
from django.core.exceptions import ValidationError

def validate_file_extension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extension = ['.pdf']
    if not ext.lower() in valid_extension:
        raise ValidationError('Tipo de archivo no soportado.')

def validate_image_extension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extension = ['.png', '.jpg', '.jpeg', '.jfif', '.pjpeg', '.pjp']
    if not ext.lower() in valid_extension:
        raise ValidationError('Tipo de imagen no soportado.')

def validate_file_size(value):
    filesize = value.size
    if filesize > 10495760:
        raise ValidationError('El tamaño del archivo no puede superar los 10MB.')
                