from django.contrib.auth.models import AbstractUser, UserManager
from api.event.models import Event
from django.db import models

class UserManager(UserManager):
    pass

class User(AbstractUser):

    def __str__(self):
        return self.email

    event = models.ManyToManyField(Event)

    objects = UserManager()