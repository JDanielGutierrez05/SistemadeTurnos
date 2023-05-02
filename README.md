# README

- [README](#readme)
  - [Summary](#summary)
  - [Setup](#setup)
    - [install](#install)
    - [database](#database)
    - [envs](#envs)

## Summary

Develoment base for API made on Nodejs.

## Setup

### install

Para este proyecto se requiere tener instalado Node.js en version 14 o superior, tambien usamos algunos paquetes los cuales estan como dependencias en el package.json, por lo tanto para poder iniciar el proyecto se deje ejecutar el comando `npm i o npm install`.

### database

Para la parte de BD se utilizo el docker oficial de postgres y los scripts estan todos probados en la ultima version del mismo. [enlace](https://hub.docker.com/_/postgres)

### envs

en la raiz del proyecto se creo un archivo `.env.example` el cual contiene el nombre de las variables que se necesitan para poder realizar la conexion a mongo.
