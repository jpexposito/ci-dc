<p align="center"><img src="https://user-images.githubusercontent.com/73592097/152687804-e294d7e9-9e97-4c92-b07d-c681542591d0.png" height="400px"></p>


***

# Índice #

## 1. ¿Qué es Travis CI? ##
## 2. Requisitos Previos ##
## 3. ¿Cómo usar Travis ##
## 4. Ventajas ##
## 5. Funciones de Travis CI ##
## 6. Travis usando <img src="https://user-images.githubusercontent.com/73592097/152375522-7d9ee0ad-57af-453e-ba14-9821bf6619c9.png" width="100px" height="30px"/> ##
## 7. Compilación de código ##



***


### 1. ¿Qué es Travis CI? <img src="https://user-images.githubusercontent.com/73592097/152708940-3d61801f-c70d-4b38-8ea3-0a853d0a537c.png"/>  ###
Es un sistema de Integración continua, nos permite crear,probar e implementar código de forma rápida y sencilla. Fundado en 2011 por la comunidad de Travis CI,Idera. Integrado con GitHub 
<hr/>

### 2. Requisitos Previos <img src="https://user-images.githubusercontent.com/73592097/152683389-1050ea2e-94fd-490b-a62f-ff1b3bd328e2.png" width="50px" height="50px"/> ###  
- Repositorio GitHub, con permisos de propietario.
- Cuenta en Travis-CI
- Docker configurado (Opcional)

<hr/>


### 3. ¿Cómo usar Travis? <img src="https://user-images.githubusercontent.com/73592097/152709285-2a14073c-bc5d-4d86-909d-237bfa9561e6.png"/> ###
- Primero nos crearemos una cuenta en [travis](https://www.travis-ci.com/), podremos registrarnos de tres maneras

  * Gmail
  * GitHub
  * Facebook

  <br/>
En la página oficial de travis, vamos a registrarnos en el botón(llamado  **start today**) esquina superior derecha. 
<img src="https://user-images.githubusercontent.com/73592097/152692062-6c763441-3f10-401b-85c4-9b7fdcddc5fa.PNG" width="800px"/>

En esta página nos encontramos con distintas opciones de registro que nos permiten subir proyectos en un momento,en mi caso elegí GitHub.
<img src="https://user-images.githubusercontent.com/73592097/152692485-a8a780db-cf08-4ba0-89f2-5d5df4e8c186.PNG" width="800px"/>


En el siguiente cuadro aparecera la ventana para autorizar y darle a travis permisos sobre los repositorios de Github
<img src="https://user-images.githubusercontent.com/73592097/152692585-c7bea93b-ef7a-49db-8bab-07b28718d065.PNG" width="800px"/>


Finalmente ya somos usuarios de Travis CI

<br/>
<hr/>


### 4. Ventajas <img src="https://user-images.githubusercontent.com/73592097/152709215-66e882de-da1e-4fd9-81b3-956fbc224e6c.png"/> ### 
Las ventajas de usar travis son las siguientes:
 - **Gratuito** para Proyectos Open Source y de pago para proyectos privados.
 -  **Integración rápida** con GitHub.

![image](https://user-images.githubusercontent.com/73592097/152353373-40d925e8-b3c3-46c6-be1f-0946334018f2.png)

 -  **Testea y construye** aplicaciones que corran en Linux.
 -  **No tiene costos** de mantenimiento.
 -  Intuitiva.
 -  **Verifica la calidad del código**.
 -  **Compilación del código instántanea al subir un repositorio a GitHub.**

<hr/>


### 5. Funciones de Travis CI <img src="https://user-images.githubusercontent.com/73592097/152709304-415b84f4-640f-4631-b20b-359dd5d03159.png"/> ###

- Tablero de mandos
- Depuración de código
- Gestión de pruebas
- Ofrece soporte para :
  -  Java
  -  Python
  -  Node.js
  -  PHP
  -  Ruby...

<hr/>

### 6. Travis usando <img src="https://user-images.githubusercontent.com/73592097/152375522-7d9ee0ad-57af-453e-ba14-9821bf6619c9.png" width="100px" height="30px"/> : ###




Nos crearemos el repositorio de prueba para desplegar en Travis, la carpeta de configuración de travis se llama .**travis.yml**, que se coloca en el directorio raiz

> - languaje-> indicamos el lenguaje a usar
> - script -> script a lanzar 

> - branches-> ramas a supervisar 
> - notifications-> se pueden hacer notificaciones de las pruebas por correo
> - install -> aplicaciones a instalar

Entre otras secuencias de configuración que se encuentran en el siguiente [enlace](https://docs.travis-ci.com/user/job-lifecycle/)

Configuración de ejemplo

<img src="https://user-images.githubusercontent.com/73592097/152694374-070ebf95-9299-4942-b33d-6ca307352106.png" width="800px"/>


Fichero .travis.yml

<img src="https://user-images.githubusercontent.com/73592097/152694406-82376921-6f33-49c7-9ebe-332a4785c23a.png" width="800px"/><img src="" width="800px"/>


Script python 

<img src="https://user-images.githubusercontent.com/73592097/152694422-055b0f6f-04d4-44bd-a21c-eb8b8e18c11c.png" width="800px"/>


Ahora que tenemos nuestro repositorio listo para usar con Travis CI, vamos a sincronizarlo, para desplegar el pequeño script
<hr/>


Una vez iniciado travis, los primero que tenemos que hacer es sincronizar nuestro repositorio para ello, vamos a nuestro perfil> configuración
<img src="https://user-images.githubusercontent.com/73592097/152693144-a6eda9ac-8b6f-4c9e-8d6a-e560a264bed7.PNG" width="800px"/>


Vamos a activar nuestro repositorio para que este supervisado con travis

<img src="https://user-images.githubusercontent.com/73592097/152693268-1f3545c5-88f8-4734-997b-919bcb309e8e.PNG" width="800px"/>
Nos apareceran todos los repositorios de nuestro GitHub, seleccionamos el repositorio para desplegar la aplicación adecuada.


<img src="https://user-images.githubusercontent.com/73592097/152693315-f288ed80-f8cc-40ff-8d14-14d3939e51c7.PNG" width="800px"/>
Una vez, seleccionado el repositorio vemos en el tablero de Travis CI, los repositorios activos

<img src="https://user-images.githubusercontent.com/73592097/152694879-faf7f5d8-a72c-46fb-b08f-1b28638bc19c.png" width="800px"/>

***

### 7. Compilación de código <img src="https://user-images.githubusercontent.com/73592097/152785946-02d943af-562a-420f-8c11-14993d9435f5.png"/> ###

Desde el tablero de repositorios activos, podemos destacar los más importantes, ahora vamos a compilar un pequeño script de ejemplo.

Seleccionamos un repositorio que contiene el fichero **.travis.yml** en la raiz

![image](https://user-images.githubusercontent.com/73592097/152787036-8a246326-31d7-472a-9272-d2c7c6af3194.png)

Veremos los repositorios activos y en la segunda pestaña los que se ejecutan 

![image](https://user-images.githubusercontent.com/73592097/152787771-365b1b81-a350-48f5-adf8-5b4662ddc0db.png)


Una vez seleccionada vemos  la información del repositorio actual. 

![image](https://user-images.githubusercontent.com/73592097/152787721-724b3f5b-e5dc-43f1-91a0-f8803f4e35b5.png)


En la siguiente pestaña las ramas de GitHub, 

![image](https://user-images.githubusercontent.com/73592097/152788511-fef143ce-9851-402d-adca-19f35238d3bf.png)

En la siguiente el historal de construcción

![image](https://user-images.githubusercontent.com/73592097/152788625-ce41e255-4726-4ab4-aedf-a8e68ad69e56.png)

Procederemos a compilar nuestro primer script de ejemplo, vemos que se esta compilando nos muestra el recuadro en amarillo

![image](https://user-images.githubusercontent.com/73592097/152788038-9d179c56-4d6c-456c-a87b-faace65d6f4b.png)

Vemos en tiempo real, la salida de consola, como podemos observar nuestro pequeño script se a ejecutado correctamente mostrando el mensaje por pantalla

![image](https://user-images.githubusercontent.com/73592097/152788111-81c96549-0fff-4fdf-878e-c6db67787924.png)


***

> Autor: **Jesús Joel Meneses Meneses**

> Curso: **2º DAW-DPL**

> Título: **Compilación en TRAVIS CI**

***


