import requests
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

TELEGRAM_TOKEN = '7875314521:AAF1sF8jNnozLTULuhn9Wcvncfc76yMbK0U'
CHAT_ID = '762467129'

@csrf_exempt
def send_to_telegram(request):
    if request.method == 'POST':
        if request.content_type.startswith('multipart/form-data'):
            # Обробка форми з файлом
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            form_type = request.POST.get('formType', 'невідомо')
            file = request.FILES.get('file')
            vacancy_title = request.POST.get('vacancyTitle')
            msg = f"Нова заявка з форми {form_type}\nВакансія: {vacancy_title if vacancy_title else '-'}\nІм'я: {name}\nEmail: {email}\nТекст: {message}"
            # Спочатку надсилаємо текст
            url_msg = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
            payload_msg = {'chat_id': CHAT_ID, 'text': msg}
            requests.post(url_msg, data=payload_msg)
            # Якщо є файл — надсилаємо файл
            if file:
                url_doc = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendDocument"
                files = {'document': (file.name, file.read())}
                data = {'chat_id': CHAT_ID}
                requests.post(url_doc, data=data, files=files)
            return JsonResponse({'status': 'ok'})
        else:
            # Старий варіант — тільки текст
            data = json.loads(request.body)
            message = f"Нова заявка з форми {data.get('formType', 'невідомо')}\nІм'я: {data.get('name')}\nEmail: {data.get('email')}\nТекст: {data.get('message')}"
            url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
            payload = {'chat_id': CHAT_ID, 'text': message}
            requests.post(url, data=payload)
            return JsonResponse({'status': 'ok'})
    return JsonResponse({'error': 'Invalid request'}, status=400)
