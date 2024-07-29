import express from "express";
import router from "./router.config.js";
const app = express();

//express body-parser
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

//routes mounts
app.use("/api/v1", router);

//404 route
app.use((req, res, next) => {
  next({
    code: 404,
    message: "Resource not found",
    status:"NOT_FOUND"
  });
});

//error handling middleware
app.use((error, req, res, next) => {
  console.log("--------Error handler---------"+error)
  let result = error.detail || null;
  let message = error.message || "Server error...";
  let status = error.status || "INTERNAL_SERVER_ERROR";
  let code = error.code || 500;
  res.status(code).json({
    result:result,
    message:message,
    status:status,
    meta:null
  })
});

export default app;
