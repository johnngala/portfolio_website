from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import FreelanceProjects

# Apply summernote to all TextField in model.
class FreelanceProjectsAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    summernote_fields = ('content ,')


admin.site.register(FreelanceProjects, FreelanceProjectsAdmin)
