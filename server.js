const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const sDocument = require("./swaggerapi.json");
const routeRouter = require('./routers/api.routers.js');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use("", routeRouter);

app.use('/document', swaggerUi.serve, swaggerUi.setup(sDocument));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});