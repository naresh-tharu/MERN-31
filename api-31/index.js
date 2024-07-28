import http, { createServer } from "http";
import app from "./src/config/express.config.js";
import "dotenv/config";
//express app mounting
const server = createServer(app);

const port = process.env.PORT || 3005;
server.listen(port, "127.0.0.1", (err) => {
  if (!err) {
    console.log(`Server is running on the port:${port}`);
    console.log(`Press ctrl+c to discontinue the server`);
  }
});
