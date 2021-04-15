from django.conf.urls import url
from api.views import company_list, vacancies_list, vacancy_detail, company_detail, vacancies_by_company,top_ten

urlpatterns = [
  url('companies/', company_list),
  url('companies/<int:company_id>/', company_detail),
  url('vacancies/', vacancies_list),
  url('vacancies/<int:vacancy_id>/', vacancy_detail),
  url('companies/<int:vacancies_id>/vacancies', vacancies_by_company),
  url('vacancies/top_ten/', top_ten)
]
