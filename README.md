## A) Preparar entorno de programación
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


## B) Utilizar entorno de programación Bitnami MEAN
  
####Crear un proyecto Cordova con angularjs y onsenui
```bash
$ # 1.- instalar proyecto angular
$ mkdir miapp && cd miapp
$ yo angular miapp          #(contestar Sass NO, Bootstrap NO, ENTER)
$ grunt serve               # arranca nuestra nueva app y se previsualiza en http://localhost:9000
$ # ahora podemos encontrar nuestro codigo en C:\Bitnami\meanstack-2.6.5-0\miapp

$ # 2.- if you want OnsenUI framework to be installed
$ bower install onsenui --save
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

```bash
$ grunt serve              
```




dispositivos-moviles
====================


##index.html
```html
...
<script src="js/app.js"></script>     
...
```
##app.js
```javascript
  var app = angular.module('myApp', ['onsen']);

  app.controller('Page1Ctrl', function($scope) {
       $scope.mivariable = "Hola desde Angular"
   });
 
  app.controller('Page2Ctrl', function($scope) {
       $scope.mivariable = "Hola desde Angular otra vez"
   });  
```
##page1.html
```html
<div ng-controller="Page1Ctrl">
    <h3>{{mivariable}}</h3>
</div>   
```
##page2.html
```html
<div ng-controller="Page2Ctrl">
    <h3>{{mivariable}}</h3>
</div>   
```



#SIZES BOOTSTRAP

##lg
```html
<div class="container">
	<div class="row">
		<div class="col-lg-6"><div class="well">columna 1</div></div>
		<div class="col-lg-6"><div class="well">columna 2</div></div>
	</div>
</div>
```

##md
```html
<div class="container">
	<div class="row">
		<div class="col-md-3"><div class="well">columna 1</div></div>
		<div class="col-md-3"><div class="well">columna 2</div></div>
		<div class="col-md-3"><div class="well">columna 3</div></div>
		<div class="col-md-3"><div class="well">columna 4</div></div>
	</div>
</div>
```

##sm
```html
<div class="container">
	<div class="row">
		<div class="col-sm-3"><div class="well">columna 1</div></div>
		<div class="col-sm-3"><div class="well">columna 2</div></div>
		<div class="col-sm-3"><div class="well">columna 3</div></div>
		<div class="col-sm-3"><div class="well">columna 4</div></div>
	</div>
</div>
```

##xs
```html
<div class="container">
	<div class="row">
		<div class="col-xs-3"><div class="well">columna 1</div></div>
		<div class="col-xs-3"><div class="well">columna 2</div></div>
		<div class="col-xs-3"><div class="well">columna 3</div></div>
		<div class="col-xs-3"><div class="well">columna 4</div></div>
	</div>
</div>
```

##xs + sm
```html
<div class="container">
	<div class="row">
		<div class="col-xs-6 col-md-3"><div class="well">columna 1</div></div>
		<div class="col-xs-6 col-md-3"><div class="well">columna 2</div></div>
		<div class="col-xs-6 col-md-3"><div class="well">columna 3</div></div>
		<div class="col-xs-6 col-md-3"><div class="well">columna 4</div></div>
	</div>
</div>
```

##xs + sm + clearfix
```html
<div class="container">
	<div class="row">
		<div class="col-xs-6 col-md-3"><div class="well">columna 1</div></div>
		<div class="col-xs-6 col-md-3"><div class="well">columna 2</div></div>
		<div class="clearfix hidden-md hidden-lg">
		<div class="col-xs-6 col-md-3"><div class="well">columna 3</div></div>
		<div class="col-xs-6 col-md-3"><div class="well">columna 4</div></div>
	</div>
</div>
```
