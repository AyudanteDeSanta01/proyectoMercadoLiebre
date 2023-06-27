const express = require('express');
const path = require('path');

const app = express();
const PORT=3030;
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get ('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')));

app.get ('/*', (req,res) => res.sendFile(path.join(__dirname, 'views','404notFound.html')));

app.listen(PORT, () => console.log (`Server corriendo en http://localhost:${PORT}`));
