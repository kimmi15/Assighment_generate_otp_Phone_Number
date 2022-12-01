exports.globalErrorHandler = (err, req, res, next) => {            //global error middlaware handler
  console.log(err);
  const status = err.status || 500;     
  const message = err.message || "Something went wrong";
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
};
 //global error middlaware handler
exports.notFoundErrorHandler = (req, res, next) => {
  const error = {
    status: 404,
    message: "API endpoint does not exists",
  };
  next(error);      //global error handler
};
