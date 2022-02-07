<div align="justify">


# Despliegue y CI / CD con Netlify <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" >



- **Nombre: Ridel**
- **Apellidos: Saavedra Flores**
- **GitHub:** https://github.com/shakarr/

# índice

- [1. Introducción](#1-introducción)
  - [1.1 ¿Qué es Netlify?](##11-qué-es-netlify)
  - [1.2 Objetivo](##12-objetivo)
- [2. Instalación y configuración](#2-instalación-y-configuración)
- [3. Despliegue de una app con react](#3-despliegue-de-una-app-con-react)
- [4. CI/CD Pipeline con Netlify y github actions](#4-cicd-pipeline-con-netlify-y-github-actions)
  - [4.1 Configurar el entorno](#41-configurar-el-entorno)
  - [4.2 Configurar el github workflow](#42-configurar-el-github-workflow)
  - [4.3 Testeando el Workflow](#43-testeando-el-workflow)

# 1. Introducción

## 1.1 ¿Qué es Netlify?

Netlify es una plataforma la cual nace de la necesidad de automatizar proyectos webs estáticos. Esta herramienta aúna en la tareas de integración continua y de despliegue de infraestructuras web en un flujo de ejecución único, es decir que todo se ejecuta en un único proceso

## 1.2 Objetivo

El objetivo de esta herramienta, al igual que de cualquier otra del mismo tipo, es automatizar el despliegue de aplicaciones con la implementación de test de integración continua

# 2. Instalación y configuración

Lo primero que tenemos que hacer es registrarnos, para ello vamos a ir a la siguiente dirección: <https://www.netlify.com/> y le daremos al botón de **Sign Up** y seguir los pasos de registro

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.001.png"/>
</p>

y ya podríamos acceder al dashboard

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.002.png"/>
</p>

nos pedirá algunas configuraciones, como un nombre de equipo y algunas otras más

# 3. Despliegue de una app con react

Una vez echo los pasos del apartado anterior, deberíamos tener un dashboard como el siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.003.png"/>
</p>

ahora, para seleccionar el repositorio, le daremos a **import from Git** y nos saldrá algo como lo siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.004.png"/>
</p>

seleccionaremos GitHub en nuestro caso, y seleccionamos el repositorio que queremos desplegar:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.005.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.006.png"/>
</p>

luego seleccionaremos, el nombre del equipo en caso de haber más de uno, la rama en la cual vamos a desplegar, y el comando para construir la app, en esta caso: **yarn build** y le damos a deloy

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.007.png"/>
</p>

nos saldrá algo como lo siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.008.png"/>
</p>

y como podemos ver se ha desplegado correctamente

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.009.png"/>
</p>

si queremos ver el output de la consola solo tendríamos que hacer click **Production** y podriamso ver la consola

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.010.png"/>
</p>

En caso de que quisiéramos cambiar el nombre de dominio por uno mas de nuestro agrado, solo tendríamos que ir a: **Domain Settings** > **Options > Edit site name**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.009.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.011.png"/>
</p>

y nos saldrá un panel como el siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.012.png"/>
</p>

y como vemos ya se ha cambiado el nombre de nuestra app

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.013.png"/>
</p>

# 4. CI/CD Pipeline con Netlify y github actions

## 4.1 Configurar el entorno

Como ya tenemos la app desplegada, vamos ha hacer lo siguiente, nos vamos a ir a opciones y vamos a deshabilitar la construcción automática

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.014.png"/>
</p>

lo siguiente que vamos a hacer es generar un token de netlify y añadirlo a github, para ello, en netlify no iremos a **User Settings > Applications > New access token**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.015.png"/>
</p>

ahora en github no iremos a **Settings > Secrets > Actions > New Secret**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.016.png"/>
</p>

y pondremos el token en el value y ya lo tendríamos guardado

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.017.png"/>
</p>

ahora vamos a guardar el id de la app como un secreto también, para ello no iremos a netlify y luego a: **Settings > Site information > app id**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.018.png"/>
</p>

y lo añadimos como hicimos con el token, y para un id de dev también

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.019.png"/>
</p>

## 4.2 Configurar el github workflow

Dentro de la carpeta **.git** vamos a crear un directorio llamado **workflow** para ello hacemos un **mkdir .github/workflows**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.020.png"/>
</p>

ahora dentro de la carpeta vamos a crear el archivo **development.yml:**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.021.png"/>
</p>

y luego tendremos también el archivo **production.yml:**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.022.png"/>
</p>

ahora vamos a crear un tag para probar el que todo funciona correctamente, para ello haremos lo siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.023.png"/>
</p>

y como vemos todo ha ido correctamente, por lo que el archivo de **production.yml** funciona correctamente

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.024.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.025.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.026.png"/>
</p>

como podemos ver ha pasado el deploy y se ha desplegado en netlify

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.027.png"/>
</p>

## 4.3. Testeando el Workflow

Lo primero que haremos será crear el archivo **cypress.js** en el root del proyecto

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.028.png"/>
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.029.png"/>
</p>

luego vamos a crear una carpeta llamada **cypress/integration** la cual contendrá tests, en este caso vamos a crear el siguiente:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.030.png"/>
</p>

acto seguido, instalamos cypress, para ello hacemos un **npm install cypress**

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.031.png"/>
</p>

y crearemos el archivo **test.yml** dentro del directorio de **workflow** con el siguiente contenido:

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.032.png"/>
</p>

esto lo que hará es que cada vez que hagamos un pull, cypress abrirá la app en google, en el puerto **3000** y comprobara que todo funciona correctamente

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.033.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.034.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.035.png"/>
</p>

<p align="center">
    <img src="img/Aspose.Words.8a68f0a9-7f37-491c-a814-d0285d7cc175.036.png"/>
</p>

</div>
