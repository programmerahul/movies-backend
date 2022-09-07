const express = require("express");
const winston = require("winston");
const cors = require("cors");
const app = express();
app.use(cors());
require("./routes/video");
require("./startups/validate")();
require("./startups/logging")();
require("./startups/routes")(app);
require("./startups/database")();
require("./startups/config")();
require("./startups/prod")(app);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  winston.info(`listening on port ${port}...`);
});
