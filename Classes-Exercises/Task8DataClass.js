// Write a class Request that holds data about an HTTP request. It has the following properties:
//  method (String)
//  uri (String)
//  version (String)
//  message (String)
//  response (String)
//  fulfilled (Boolean)
// The first four properties (method, uri, version, message) are set through the constructor,
// in the listed order. The response property is initialized to undefined and the fulfilled
// property is initially set to false.
// Sample Input Resulting object
// let myData = new Request(&#39;GET&#39;,
// &#39;http://google.com&#39;, &#39;HTTP/1.1&#39;, &#39;&#39;)
// console.log(myData);

// Request {
// method: &#39;GET&#39;,
// uri: &#39;http://google.com&#39;,
// version: &#39;HTTP/1.1&#39;,
// message: &#39;&#39;,
// response: undefined,
// fulfilled: false
// }
class Request{
    // responce=undefined;
    // fulfilled=false;
     constructor(method,url,version,message){
        this.method=method;
        this.url=url;
        this.version=version;
        this.message=message; 
    Object.defineProperty(this, 'responce', {
        value: undefined,
        writable: true,
        enumerable: true, 
        configurable: true
    });
     Object.defineProperty(this, 'fulfilled', {
        value: false,
        writable: true,
        enumerable: true, 
        configurable: true
    });
   

     }
 }

 let myData=new Request("GET","http://google.com","HTTP/1.1","");
 console.log(myData);