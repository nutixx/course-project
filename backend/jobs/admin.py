from django import forms
from .models import Vacancy
from django.contrib import admin

class VacancyAdminForm(forms.ModelForm):
    requirements = forms.CharField(
        widget=forms.Textarea,
        help_text="Введіть вимоги через кому (наприклад: Python, Django, REST)"
    )

    class Meta:
        model = Vacancy
        fields = '__all__'

    def clean_requirements(self):
        data = self.cleaned_data['requirements']
        # Розбиваємо рядок за комами, видаляємо зайві пробіли
        return [item.strip() for item in data.split(',') if item.strip()]

class VacancyAdmin(admin.ModelAdmin):
    form = VacancyAdminForm

admin.site.register(Vacancy, VacancyAdmin)
# Register your models here.
