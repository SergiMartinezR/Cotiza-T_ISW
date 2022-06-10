from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header   = 'LinkedIn Clone'
admin.site.site_title    = 'LinkedIn Administrator'
admin.site.index_title   = 'Administrator'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('userauth.urls')),
    path('user/profile/', include('profile.urls')),
    path('user/network/', include('network.urls')),
    path('user/organization/', include('organization.urls')),
    path('user/post/', include('post.urls')),
    path('chat/', include('chat.urls')),
    path('notifications/', include('notification.urls')),
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
