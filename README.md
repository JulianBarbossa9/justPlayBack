# Repositorio Back-end Justplay

El proyecto fue creado con nodeJS y Express además se uso PostgreSQL y Prisma para la base de datos, el proyecto esta alojado en una instancia EC2 de Amazon aca esta el despliegue del [proyecto](https://6543b06e066090068f5f5a65--lighthearted-druid-abaa4a.netlify.app)

## Installation

Clonar el repositorio, en la terminal deseada copie lo siguiente

```bash
git clone https://github.com/JulianBarbossa9/justPlayBack.git
```
Despues de esto vamos a la carpeta creada en la linea de comandos escribimos lo siguiente:
```bash
cd justPlayBack
```

Luego de esto descargamos dependencias del proyecto con:
```bash
npm install
```

En el archivo .env.example hacerle una copia y a la copia llamarlo .env
En el archivo .env donde dice DATABASE_URL copie la conexion de la base de datos que se envio por correo

Con esta ya puede usar el proyecto localmente con el siguiente comando:

```bash
npm run dev
```

en la consola se deberiá ver algo asi:
```bash
The route is loading... /city
The route is loading... /game
The route is loading... /sport
Server is running on port http://localhost:3001
```

Con esto ya esta el server arriba

