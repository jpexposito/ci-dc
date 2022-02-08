# Buildkite

![logo](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/buildkite.png)

## Índice
* <a href="#1"> ¿Qué es Buildkite?</a>
* <a href="#2"> ¿Por qué Buildkite?</a>
* <a href="#3"> ¿Cómo empezar?</a>
* <a href="#4"> Diferencias entre Buildkite y Jenkins </a>

<a name="1"></a>

### ¿Qué es Buildkite?

Buildkite es un sistema de IC y DC que podremos usar para nuestros proyectos
de desarrollo en casi cualquier lenguaje de programación.
Permite ejecutar procesos rápidos, seguros y escalables en su propia infraestructura.


![c1](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c1.PNG)

<a name="2"></a>

### ¿Por qué Buildkite?

*   Es rápido
*   Seguro
*   Open Source
*   Calidad - Precio 
*   Interfaz elegante y flexible

![precios](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/unknown.png)

<a name="3"></a>

### ¿Cómo empezar?
Lo primero que tenemos que hacer es registrarnos en la página de Buildkite.

![c2](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c2.PNG)

Depués de registrarnos nos pedirá instalar Buildkite en nuestro repositorio de Github o para todos los repositorios. 

![c1-1](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c1(1).png)

Creamos un repositorio en nuestro Github, con una carpeta llamada buildkite,
para que cuando le digamos a Buildkite de dónde sacará los ficheros de despliegue
y pipeline, los detecte de esa carpeta. La carpeta contendrá los dos siguientes
ficheros.

![c11](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c11.png)


Una vez realizado el paso anterior, podemos empezar a crear nuestro pipeline.

Como hemos visto en Jenkins, se puede hacer tanto desde la propia plataforma o 
desde ficheros externos a la plataforma.

Primero veamos como a ver como se crea desde la plataforma.
Tendremos que crear los steps: que son los pasos a seguir mediante los comandos
que vemos a continuación.

![c10](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c10.png)

Lo ejecutamos y se nos pondrá con el tick verde, indicando que todo ha ido bien.

![c3](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c3.png)

Por otro lado, podemos crear el pipeline diciendole que lo coga desde nuestro
repositorio Github.

![c4](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c4.png)

Creamos dos Steps a seguir, los Steps son como los pasos a seguir del pipeline.
El segundo será el fichero de despliegue, deploy.yml

![deploy.yml](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/Captura2.PNG)

![c6](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c6.png)

El primero ejecutará el fichero pipeline.yml

![pipeline.yml](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/Captura1.PNG)

![c5](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c5.png)

Un requisito que debemos de tener instalado en nuestra máquina es Docker, porque después de crear los pipeline te pide un agente. 
Para ello usaremos el siguiente comando, donde le daremos un token y un agente, el cual será Ubuntu.

![c2-1](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c2(1).png)

Cuando le demos a ejecutar el proceso, nos saldrá la siguiente ventana, para 
crear el build. Aunque no haría falta crearlo.

![c8](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c8.png)

Después de crear el build o simplemente lo cerramos, veremos como se ejecuta 
los dos ficheros.

![c9](https://github.com/OscarELCRACK17/Buildkite-Hello-world/blob/main/img/c9.png)

<a name="4"></a>

###  Diferencias entre Buildkite y Jenkins

| | Buildkite | Jenkins |
|--|----------|---------|
|<b>Producto</b>| Buildkite proporciona todo<br> desde su plataforma. | Jenkins está totalmente alojado <br>y configurado  por el usuario. Comunidad.|
|<b> Pipelines</b> | Se crean desde la misma plataforma o desde <br> un fichero en un repositorio. |  Se crean desde la misma plataforma o desde <br> un fichero en un repositorio. |
| <b>Seguridad y privacidad</b> | Tus datos no salen de sus servidores | Varian según las versiones de software y la compatibilidad. Se debe de examinar desde el entorno del usuario. |
| <b>Licencia</b> | El precio varia con la opción de soporte empresarial <br> a mayor escala. Es de código abierto y se puede usar sin costo alguno. | Es 100% de código abierto. No tiene costo ninguno para ejecutar Jenkins. |
|<b> Apoyo</b> | Por correo electrónico o chat en vivo | Ninguna | 

> Página oficial de Buildkite: <b> [buildkite.com](https://buildkite.com/)</b>












