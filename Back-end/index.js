const express = require('express');

const PersonaRoute = require('./Routers/PersonaRoute');



const app = express();
const port = 3000;

app.use(express.json());



app.get('/', (_request, response) => {
  response.send("heloo");
});

app.use('/persona', PersonaRoute);




app.listen(port, () => console.log(' Online on Port ' + port));
