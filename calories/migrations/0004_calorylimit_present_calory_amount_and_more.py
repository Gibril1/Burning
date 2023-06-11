# Generated by Django 4.2.2 on 2023-06-09 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calories', '0003_alter_calorylimit_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='calorylimit',
            name='present_calory_amount',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='calorylimit',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]