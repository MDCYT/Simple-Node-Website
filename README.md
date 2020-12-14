# Simple-Node-Website

[![GitHub stars](https://img.shields.io/github/stars/MDCYT/Simple-Node-Website)](https://github.com/MDCYT/Simple-Node-Website/stargazers) [![GitHub issues](https://img.shields.io/github/issues/MDCYT/Simple-Node-Website)](https://github.com/MDCYT/Simple-Node-Website/issues) [![GitHub license](https://img.shields.io/github/license/MDCYT/Simple-Node-Website)](https://github.com/MDCYT/Simple-Node-Website/blob/main/LICENSE) [![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fsoftware_mdc)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FMDCYT%2FSimple-Node-Website)

Este proyecto de [GitHub](https://github.com/MDCYT/Simple-Node-Website) esta diseñado para que cualquier persona lo use como base para crear sus propias paginas web o proyectos como deseen.

Tambien puedes probarlo desde este [link](https://morning-trail-sunshine.glitch.me).

### Secciones:
Aqui encontraras secciones utiles de como user este proyecto de GitHub:

- [Simple-Node-Website](#simple-node-website)
    - [Secciones:](#secciones)
  - [Instalación](#instalación)
  - [Configuraciones](#configuraciones)
  - [Usos](#usos)
    - [Imagenes Randoms](#imagenes-randoms)
      - [Perros Randoms](#perros-randoms)
      - [Gatos Randoms](#gatos-randoms)
      - [Aves Randoms](#aves-randoms)
      - [Zorros Randoms](#zorros-randoms)
      - [Osos Randoms](#osos-randoms)
      - [Koalas Randoms](#koalas-randoms)
      - [Pandas Randoms](#pandas-randoms)
      - [Pandas Rojos Randoms](#pandas-rojos-randoms)
    - [Convertidor Binario](#convertidor-binario)
    - [Traductor](#traductor)
      - [Forma de Pagina Web](#forma-de-pagina-web)
      - [Forma de API REST](#forma-de-api-rest)


## Instalación
Antes que nada debes asegurar que tienes como minimo [Node.js 12](https://nodejs.org/es/) (Pruebas con el sitio web fueron hechos con Node.js 12, cualquier error con versiones anteriores no se contaran.)

**Primer paso:**

Clonar el respositorio.

```bash
$ git clone https://github.com/MDCYT/Simple-Node-Website.git
```

Luego de eso debemos entrar a la carpeta del proyecto de GitHub.

```bash
$ cd Simple-Node-Website
```

Luego de entrar a la carpeta del Proyecto debemos instalar [modulos NPM](https://www.npmjs.com), para eso usaremos el siguiente comando.

```bash
$ npm install
```
Ahora iniciaremos el proyecto, tenemos 2 formas de iniciarlo, con Nodemon (Cuando editas algo del proyecto el proyecto automaticamente se reincia sin cerrar y volver abrir la terminal, para usareste metodo debes instalar Nodemon `npm install nodemon -D`) o con Node.

Node

```bash
$ npm start
```

Nodemon

```bash
$ npm run dev
```
Ahora puedes entrar a [localhost:3000](https://localhost:3000) para explorar el proyecto.

## Configuraciones

Actualmente tienes algunas opciones de configuraciones que puedes ponerle al proyecto para **perzonalizarlo** a tu gusto.

Primero debemos cambiar el nombre del archivo **.env.example** por **.env**

El archivo **.env** se debe ver algo asi

```env
#Aqui podras cambiar el puerto del proyecto
PORT=3000
#Aqui podras cambiar si quieres quetu proyecto tenga redirección https o no
SSL=false
```

## Usos

Aqui se mostrara los usos que le puedes dar a las funciones del proyecto.

Las cuales puedes experimentar en el menu que sale en el proyecto.

![Imagen del menú](https://i.imgur.com/uIfA7Po.png)

### Imagenes Randoms

Aqui encontraremos la primera sección del proyecto, donde la función de esta sección es mostrar de forma aleatoria imagenes randoms de animales.

![Imagen del menú de imagenes](https://i.imgur.com/VtNkjPN.png)


#### Perros Randoms

En esta sección mostrara imagenes de perros randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Perrito](https://i.imgur.com/ZpuEemf.png)


#### Gatos Randoms

En esta sección mostrara imagenes de gatos randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Gatito](https://i.imgur.com/aE5kVBj.png)


#### Aves Randoms

En esta sección mostrara imagenes de aves randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Ave](https://i.imgur.com/G5DmYPR.png)


#### Zorros Randoms

En esta sección mostrara imagenes de zorros randoms bonitos cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Zorro Bonito UwU](https://i.imgur.com/VZpqXvA.png)


#### Osos Randoms

En esta sección mostrara imagenes deosos randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Oso](https://i.imgur.com/Yt4vGL8.png)


#### Koalas Randoms

En esta sección mostrara imagenes de koalas randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Koala](https://imgur.com/sYj4yAz.png)


#### Pandas Randoms

En esta sección mostrara imagenes de pandas randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Panda](https://imgur.com/Mj3CZ5f.png)


#### Pandas Rojos Randoms

En esta sección mostrara imagenes de pandas rojos (Panda vermelho) randoms cada vez que recargues la pagina o le des al boton de recargar.

![Imagen de un Panda Rojo](https://imgur.com/Rhnr1fg.png)

### Convertidor Binario

En esta seccion podras convertir eltexto en binario o viceversa, como tu desees, algo simple, pero funcional.

![Imagen de antes](https://imgur.com/aPnbOSP.png)

![Imagen de despues](https://imgur.com/Efdd7Ye.png)


### Traductor

En esta seccionveras un pequeño dicionario que puede funcionar de 2 formas, del modo de pagina web y del modo de API REST.

Para entrar a la pagina web debes poner /translate y para entrar en la version API REST debes entrar en /translate.json

#### Forma de Pagina Web

Desde la pagina web puedes seleccionar el idioma de entrada y salida del traductor (Las cuales de ampliaran pronto).

![Imagen de traductor](https://imgur.com/dKQAUTy.png)

#### Forma de API REST

Desde unos query con la forma de `?entrada=[Idioma de entrada]&salida=[Idioma de salida]&text=[Texto a Traducir]`

Los idiomas deben estar en formato ISO 639-1 los cuales puedes encontrar en [esta lista.](http://utils.mucattu.com/iso_639-1.html)

![Imagen de despues](https://imgur.com/KrWkiEU.png)