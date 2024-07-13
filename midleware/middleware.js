// this should handle all authenticated routes
function myMiddleware(req, res, next) {
    //TODO: check if the user is authenticated before he/she goes any further
    next();
  }
  
  export default myMiddleware;
  