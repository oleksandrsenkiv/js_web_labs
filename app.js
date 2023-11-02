
const express = require('express')
const printerRouter = require("./routes/printer.routes");
const PORT = process.env.PORT || 8080
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', printerRouter);


app.listen(PORT, () => {
  console.log(`Сервер працює на порті http://localhost:${PORT}`);
});