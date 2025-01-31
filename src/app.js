const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});