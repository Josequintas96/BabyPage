"""
Django settings for surveey project.

Generated by 'django-admin startproject' using Django 4.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os # new
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-w)wto($4q+jkmo6ivb@xz8t23&25em#2@^gcdq&gbg77r9gl3e'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['0.0.0.0', 'gaby-val-future-baby2022.herokuapp.com', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    "rest_framework",
    "core",
    "corsheaders",

    # 3rd Party Apps
    "rest_framework.authtoken", # new
    "rest_auth", # new
    "django.contrib.sites", # new
    "allauth", # new
    "allauth.account", # new
    "allauth.socialaccount", # new
    "rest_auth.registration", # new

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    
    # new heroku
    'whitenoise.middleware.WhiteNoiseMiddleware',


]

ROOT_URLCONF = 'surveey.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'surveey.wsgi.application'

REST_FRAMEWORK = {'DEFAULT_PERMISSION_CLASSE' : [ 'rest_framework.permissions.AllowAny'],
                  'DATETIME_FORMAT': "%m/%d/%Y %I:%M%P",
                  'DEFAULT_AUTHENTICATION_CLASSES': ['rest_framework.authentication.TokenAuthentication',],
                  }

CORS_ORIGIN_ALLOW_ALL = True



# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        'ENGINE': 'django.db.backends.postgresql',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'NAME': 'de3sve7l93en5r',
        'HOST': 'ec2-3-211-6-217.compute-1.amazonaws.com',
        'PORT': 5432,
        'USER': 'hvpbhahoinfzyv',
        'PASSWORD': '506a95c7a9c2945638cf26fb22c183b330e7610deac7f0878fb917bc69f7ab35',  
        
    }
}



# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

# USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

# STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



# add to control user
AUTH_USER_MODEL = 'core.UserControl'

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

AUTHENTICATION_BACKENDS = (    "django.contrib.auth.backends.ModelBackend",    "allauth.account.auth_backends.AuthenticationBackend", )

SITE_ID = 1 
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_SESSION_REMEMBER = True
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_UNIQUE_EMAIL = True



#add for deployment
# Option 1
CORS_ORIGIN_WHITELIST = [
    'https://localhost:3000',
]

# Configure Django App for Heroku.
# import import django_heroku
# django_heroku.settings(locals())
# django_heroku.settings(locals())

# Option 2
# CORS_ORIGIN_ALLOW_ALL = True already created

# #Heerroku css

STATIC_URL = '/static/'
STATIC_ROOT =  STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')



