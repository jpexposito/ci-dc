# **Bitbucket Pipelines**<a name = "id1"></a>

![Logo BitBucket](img/logo.png)

## **Índice**<a name = "id2"></a>
[Portada](#id1)<br>
[Índice](#id2)<br>
[Introducción](#id3)<br>
[Herramientas con las que se relaciona](#id4)<br>
[Definición de un Pipeline](#id5)<br>
[Ejemplo de un Pipeline](#id6)<br>
[Conclusión](#id7)<br>

## **Introducción**<a name="id3"></a>
BitBucket es una herramienta de alojamiento de código
y colaboración basada en Git para equipos. Se puede integrar
con Jira, Bitbucket pretende que crees código de calidad mediante
pruebas automatizadas e implementación de código.

## **Herramientas con las que se relaciona**<a name="id4"></a>
BitBucket puede relacionarse con herramientas como Jira, que es un
gestor de proyectos, funciona también con git para la utilización de
repositorios como por ejemplo GitHub.

## **Definición de un Pipeline**<a name="id5"></a>
Para definir un Pipeline en BitBucket necesitaremos definir lo siguiente:

- La imagen de Docker que usaremos (si la necesitamos).
- Luego tendremos que escribir **pipelines:**
- Dentro de **pipelines** definimos **default:**
- En este punto definimos los pasos que hará nuestro Pipeline.
- En este punto definimos **script:** con los comandos que queramos lanzar.
- Podemos elegir en que **branch** queremos que se lance.
- Elegiremos etiquetas específicas de Git si lo deseamos y/o necesitamos.
- También podremos seleccionar un bookmark para una compilación específica.
- Por último podemos seleccionar la rama de destino antes de la ejecución.

![Definir Pipeline](img/1.png)

## **Ejemplo de un Pipeline**<a name="id6"></a>
Este ejemplo será lanzar una imagen de PHP y verificar la versión de PHP, el Pipeline
es el siguiente:

![Pipeline PHP](img/2.png)

El siguiente paso será subirlo al repositorio y lanzarlo, como vemos, el resultado es correcto.

![Pipeline correcto](img/3.png)
