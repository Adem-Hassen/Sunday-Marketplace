# Generated by Django 4.2.8 on 2023-12-30 03:23

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("order", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="order",
            options={"ordering": ["-created_at"]},
        ),
        migrations.RenameField(
            model_name="order",
            old_name="user",
            new_name="owner",
        ),
        migrations.RenameField(
            model_name="orderitem",
            old_name="Product",
            new_name="product",
        ),
    ]
