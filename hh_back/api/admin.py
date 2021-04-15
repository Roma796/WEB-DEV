# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from api.models import Company, Vacancy

# Register your models here.


@admin.register(Company)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address',)
    search_fields = ('name', 'description', 'salary', 'company')
    list_filter = ('name',)


admin.site.register(Vacancy)

