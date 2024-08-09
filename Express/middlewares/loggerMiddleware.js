// const { log } = require("console")

const loggerMiddleware=(req,res,next)=>{
    console.log(` ${req.method} Request: ${req.url}`);

    next();
}

module.exports=loggerMiddleware;

// const loggerMiddleware = (req, res, next) => {
//     console.log('Just testing Middleware');
//     next();
// };

// module.exports = loggerMiddleware;