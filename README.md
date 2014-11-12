dispositivos-moviles
====================

## A) Preparar entorno de programación para APPs
Descargar e instalar [Bitnami MEAN](https://bitnami.com/stack/mean)  
Este es un entorno de desarrollo con MongoDB, Express, Angular, Node.js (MEAN), que además incluye
 MongoDB, Git, PHP y RockMongo.   

#### 1.- instalar yo bower y grunt [YEOMAN](http://yeoman.io/codelab/setup.html)
Inicio -> Bitnami MEAN stack -> meanstack manager tool  (arranca el servidor)  
Inicio -> Bitnami MEAN stack -> Use Bitnami MEAN stack  (terminal de trabajo)

```bash
npm install --global yo bower grunt-cli
```
#### 2.- Abrir consola de bitnami e instalar el [generador de angular](https://github.com/yeoman/generator-angular)
```bash
npm install --global generator-angular@0.9.8
```


## B) Instalar onsenui en el entorno de programación Bitnami MEAN
  
####Crear un proyecto Cordova con angularjs y onsenui
```bash
$ # 1.- instalar proyecto angular
$ mkdir miapp && cd miapp
$ yo angular miapp          #(contestar Sass NO, Bootstrap NO, ENTER)
$ grunt serve               # arranca nuestra nueva app y se previsualiza en http://localhost:9000
$ # ahora podemos encontrar nuestro codigo en C:\Bitnami\meanstack-2.6.5-0\miapp

$ # 2.- if you want OnsenUI framework to be installed
$ bower install onsenui --save
# si nos da varias opciones seleccionar la última versión
```
##### cambiar en C:\Bitnami\meanstack-2.6.5-0\miapp\bower_components/onsenui/bower.json
esto:
```json
  "main": [
    "build/js/onsenui.js"
  ],
```
por esto:
```json
  "main": [
    "build/js/onsenui.js",
    "build/css/onsenui.css",
    "build/css/onsen-css-components.css"
  ],
```

##### añadimos onsen en app/scripts/app.js para poder usar onsen
esto:
```javascript
angular
  .module('miappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
```
por esto:
```javascript
angular
  .module('miappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'onsen'
  ])
```

## C) Vamos a preparar una app con navegación mediante tabs
#####  en app/index.html dejar las lineas entre body y google analytics así:

```html
  <body ng-app="miappApp">

      <ons-tabbar var="tabbar">

        <ons-tabbar-item
          active="true"
          label="Home"
          icon="home"
          page="navigator.html">
        </ons-tabbar-item>

        <ons-tabbar-item
          label="Settings"
          icon="gear"
          page="views/about.html">
        </ons-tabbar-item>

        <ons-tabbar-item
          label="Mapa"
          icon="gear"
          page="views/localiza.html">
        </ons-tabbar-item>
        
      </ons-tabbar>

    <!-- build:js(.) scripts/oldieshim.js -->
    [NO COPIAR ESTA LINEA AQUI VA EL RESTO DEL CÓDIGO]
```

#####  creamos app/navigator.html y ponemos estas lineas:
```html
<ons-navigator title="Navigator" var="myNavigator" page="views/main.html">
</ons-navigator> 
```

#####  en app/views/main.html poner estas lineas:
```html
<ons-page>
  <ons-toolbar>
    <div class="center">Title</div>
  </ons-toolbar>
</ons-page>
```

```bash
$ grunt serve              
```


**NOTA** es posible que en algún momento algo no funcione porque nos falten librerías, entonces hacer lo siguiente:
```html
# parar grunt serve  
bower install
npm install
grunt serve
```


