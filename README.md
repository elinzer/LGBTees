# LGBTees

LGBTees is a passion project of mine - I wanted to strengthen my skills and learn new ones, all while highlighting some awesome threads from LGBTQ+ businesses. <a href='https://lgbtees.herokuapp.com'/>Live site here!</a>

## Built with:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Wiki Links
- <a href='https://github.com/elinzer/LGBTees/wiki/DB-Schema'>DB Schema</a>
- <a href='https://github.com/elinzer/LGBTees/wiki/Feature-List'>Feature List</a>
- <a href='https://github.com/elinzer/LGBTees/wiki/API-Routes'>API Routes</a>

## How to run locally
- Clone this repo
- From the root of the repo, ```cd``` into ```backend``` and run ```npm i``` then ```npm start```
- Inside ```/backend```, create a ```.env``` file and choose a port number and a database file (to view in your browser and have a local db):

``` 
   PORT=
   DB_FILE= 
   ```
- Still in ```/backend```, run the following commands to build the database and seed it with starter data:
```
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
- Finally, run ```npm start``` in ```/backend``` first and then in the ```/frontend``` terminal to start the backend and frontend servers!

## Feature Screenshots

### Home
<img width="1784" alt="Screen Shot 2023-02-20 at 8 54 08 AM" src="https://user-images.githubusercontent.com/101808290/220140025-8eb5895f-add0-4f3f-83f4-6354a4b822b4.png">

### Tees
<img width="1584" alt="Screen Shot 2023-02-20 at 8 54 30 AM" src="https://user-images.githubusercontent.com/101808290/220140148-16acd9d7-4d41-40aa-a434-1e9ad0b23459.png">

### Tees while logged in
<img width="1412" alt="Screen Shot 2023-02-20 at 8 54 53 AM" src="https://user-images.githubusercontent.com/101808290/220140246-c6de898f-c913-46b4-84b9-dadff33e73f7.png">

### Faves
<img width="816" alt="Screen Shot 2023-02-20 at 9 27 08 AM" src="https://user-images.githubusercontent.com/101808290/220146453-4e5f0d23-8f3c-4d3d-ab8a-66f1d199a3c5.png">

