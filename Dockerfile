FROM php:7.3.8-apache

LABEL maintainer="Bailey Kaplon"

COPY ./app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
