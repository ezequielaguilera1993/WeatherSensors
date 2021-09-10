# WhateverWeather

## Instruciones

1. Clonar el repo: git clone https://github.com/ezequielaguilera1993/WhateverWeather.git
2. cd api <div>Lo que viene, ejecutarlo en la carpeta api</div>
3. npm install
4. npm run seed (este genera muchos sensores y eventos asociados de forma randomizada)
5. npm start (levanta el servidor)
6. cd .. ; cd client <div>Lo que viene, ejecutarlo en la carpeta client</div>
7. npm install
8. npm start

<br/>
<br/>


#### La SPA esta hecha enteramente en Typescript que me gusta mucho mas, se estilizó con Sass, componentizo con ReactJs, manejando estados globales con Redux. Back con Express y Type, DB con MongoDB y ODM Mongoose.

<br/>
<br/>

## Pantalla inicial

#### Las tarjetas que estan con fondo negro, son las que al menos un evento se disparo. Al hacer hover sobre una tarjeta, aparecen indicadores de edicion, una cruz que si se toca elimina el Sensor, y un lapiz y un borde en negro en el nombre para editarlo. Para mejorar al experiencia de usuario al ir escribiendo sobre el nombre se va guardando automaticamente en base de datos (aca faltaría un guardando... quizas)

#### Con el boton de la derecha se accede a crear un Sensor

![](https://i.imgur.com/b4HVP3B.png)

<br/>
<br/>

## Crear sensor

#### Se guarda en base de datos, y si sale bien (status 200) se actualiza el estado de redux.

![](https://i.imgur.com/rfa98sA.png)

<br/>
<br/>

## Eventos asociados a un sensor

Al tocar el boton "Ir a Eventos" sobre cada sensor. Se rutea hacia un componente que renderiza los Eventos asociados a ese Sensor en específico. Siguiendo el mismo código de colores, el negro son eventos que se dispararon. Sea porque su valor supero la temperatura maxima o es inferior a la temperatura minima (<= y >= es)

![](https://i.imgur.com/5Cw9G9d.png)

<br/>
<br/>

## Crear evento

#### Podemos crear eventos dandole un value.

![](https://i.imgur.com/SnRQXiZ.png)
<br/>
<br/>

#### Me quedo cosas pendientes que voy a ir sumando, como agregarle socket.io que la mejoraria muchisimo, algun gradiente de colores en los Sensores que vaya de azul a rojo, dependiendo la temp minima y máxima que maneje, un valor que vaya variando y al llegar a extremos actualice estos min y max entre otras cosas.


### Ante cualquier consulta que surja, dejo mi información de contacto

### ～ 𝐂𝐯: https://drive.google.com/drive/folders/1N-7CiVb7uNXslN5gYVhKVT38DBef0FDr?usp=sharing

### ～ 𝐏𝐨𝐫𝐭𝐟𝐨𝐥𝐢𝐨: https://www.ezequielaguileraportfolio.com/

### ～ 𝐆𝐢𝐭𝐡𝐮𝐛: https://github.com/ezequielaguilera1993

### ～ 𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐞: https://certificates.soyhenry.com/cert?id=fbcc4c4e-28ff-4827-b313-851de1e7fb12

### ～ 𝐏𝐡𝐨𝐧𝐞: +541128676833

### ～ 𝐄𝐦𝐚𝐢𝐥: ezequielaguilera1993@gmail.com

## Saludos!
