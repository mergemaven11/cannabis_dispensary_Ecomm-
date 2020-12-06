const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server');
const data = require('./data');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.get('/', (req, res) => res.redirect('/graphql'));
app.use('/graphql', jsonGraphqlExpress.default(data));
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
