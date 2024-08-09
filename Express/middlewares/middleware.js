//  const testMiddleware=(req, res, next )=>{
// console.log ('Just testing Middleware Test');
// next();
// };
// module.exports=testMiddleware;
const testMiddleware = (req, res, next) => {
    console.log('Just testing Middleware');
    next();
};

module.exports = testMiddleware;