# Generated by Django 4.2.4 on 2024-03-29 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fornecedores', '0002_alter_fornecedor_cnpj'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fornecedor',
            name='endereco',
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='bairro',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='cep',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='cidade',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='logradouro',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='numero',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='fornecedor',
            name='uf',
            field=models.CharField(max_length=5, null=True),
        ),
    ]
