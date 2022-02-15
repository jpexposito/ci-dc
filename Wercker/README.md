<div align="justify">

# **Wercker**<a name = "id1"></a>

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%20logo.jpeg)

## **Índice**<a name = "id2"></a>
[Portada](#id1)<br>
[Índice](#id2)<br>
[Introducción](#id3)<br>
[Lenguajes con los que trabaja](#id4)<br>
[Identificación](#id5)<br>
[Ejemplo](#id6)<br>

## **Introducción**<a name="id3"></a>
Wercker es una herramienta de Integración Continua (CI) y Despliegue Continuo
(CD), fundada en 2012 que ayuda a los desarrolladores a crear, probar e
implementar las aplicaciones. Estos contenedores se pueden
 automatizar los procesos de creación e
implementación, probando dichos procesos y después implementarlos en varias
plataformas en la nube, como Heroku, AWS y Rackspace. Además, es propiedad de
Oracle desde 2017.

## **Lenguajes con los que trabaja**<a name="id4"></a>
Los lenguajes de programación con los que son compatibles son los siguientes:
Python, Goland (Go), Java (Grandle o Maven), NodeJS y Ruby.

## **Identificación**<a name="id5"></a>
Para identificarse es muy fácil: podemos crearnos una cuenta, o incluso vincular nuestra cuenta de Github o Oracle Cloud. En este caso, nos vamos a loguear con Github. 

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%201.jpg)
 
Nos pedirá la autorización de usar nuestra cuenta de Github, y poniendo el nombre de usuario que queremos tener en Wercker y contraseña.

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%202.jpg)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%203.jpg)

Una vez realizado, podemos crear una aplicación: en este caso, haremos la aplicación Hola Mundo.

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%204.jpg)

## **Ejemplo**<a name="id6"></a>
Nos mostrará cuál es el repositorio de Github que queremos vincular, en este caso, será nuestro repositorio de Wercker-hello-world:

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%205.jpg)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%206.jpg)
 
Luego la clave SSH que por defecto Wercker recomienda no usarlo, y ya con esto creamos el proyecto.

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%207.jpg)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%208.jpg)

Se nos pedirá en qué lenguaje queremos ejecutar la aplicación, y en este caso, usamos Goland (Go). 

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%209.jpg)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%2010.jpg)

Para ello, en nuestro repositorio de Github, creamos un archivo YAML llamado wercker.yml, donde ponemos el código YAML.

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%2011.jpg)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%2012.jpg)

Una vez commiteado el repositorio, automáticamente Wercker empieza a hacer los procesos de trabajo para verificar que nuestra aplicación se encuentra en perfecto estado.

Para finalizar, se nos mostrará que nuestra aplicación ha dado el OK y que tendremos los datos de la aplicación a través de una API.

![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%2013.png)
![](https://github.com/Jorgeev27/ci-dc/blob/main/Wercker/img/Wercker%2014.png)

> Página oficial:
> https://app.wercker.com/

> Documentación
> https://en.wikipedia.org/wiki/Wercker

> GitHub:
> https://github.com/Jorgeev27/

<div align="justify">
