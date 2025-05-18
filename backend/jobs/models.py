from django.db import models

# Create your models here.

class Vacancy(models.Model):
    title = models.CharField(max_length=255)  # Назва вакансії
    location = models.CharField(max_length=255)  # Локація
    department = models.CharField(max_length=255)  # Відділ
    description = models.TextField()  # Опис
    requirements = models.JSONField()  # Вимоги (списком)

    def __str__(self):
        return self.title
