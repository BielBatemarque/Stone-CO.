# Generated by Django 4.2.4 on 2024-01-26 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('colaboradores', '0002_colaborador_cargo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='colaborador',
            name='cpf',
            field=models.TextField(max_length=11, unique=True),
        ),
    ]