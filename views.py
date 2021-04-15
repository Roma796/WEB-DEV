# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http.response import JsonResponse
from api.models import Company, Vacancy


# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(company.to_json())


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(vacancy.to_json())


def vacancies_by_company(request, vacancies_id):
    vacancy = Company.objects.get(id=vacancies_id)
    all_vacancies = Vacancy.objects.all()
    for p in all_vacancies:
        if p.id == vacancy.id:
            return JsonResponse(vacancy.to_json())


def top_ten(request):
    vacancies = Vacancy.objects.filter(id_in=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)
