from django.db import models

# Create your models here.

class PressRelease(models.Model):
    image = models.ImageField(upload_to='press_images/')  # Фотографія
    title = models.CharField(max_length=255)  # Назва
    location = models.CharField(max_length=255)  # Місцезнаходження
    date = models.DateField()  # Дата
    description = models.TextField()  # Опис

    def __str__(self):
        return self.title
