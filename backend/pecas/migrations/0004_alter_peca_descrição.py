# Generated by Django 4.2.4 on 2024-03-05 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pecas', '0003_remove_peca_dimensoes_peca_descrição_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peca',
            name='descrição',
            field=models.TextField(max_length=100, null=True),
        ),
    ]
