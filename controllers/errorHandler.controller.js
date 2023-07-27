const NotFound = (req,res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end(`Not Found => ${req.url}`);
};
const ErrorHandler = {
  NotFound,
};

module.exports = ErrorHandler;
