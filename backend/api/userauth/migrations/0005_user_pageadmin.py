# Generated by Django 3.1.2 on 2022-06-10 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0004_auto_20220610_1206'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pageadmin',
            field=models.BooleanField(default=False),
        ),
    ]
