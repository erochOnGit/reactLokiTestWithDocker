FROM composer/composer
MAINTAINER Occitech <contact@occitech.fr>

RUN docker-php-ext-install pdo_mysql

RUN apt-get update \
   && apt-get install -y libicu-dev \
    && docker-php-ext-install intl
