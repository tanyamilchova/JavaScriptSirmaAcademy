let rootElement=document.getElementById('root');
let rootReactElement=ReactDOM.createRoot(rootElement);


let headingReactElement=React.createElement('h1',{},'Hello from React scr.js');
// rootReactElement.render(headingReactElement);
// console.log(headingReactElement);
// setTimeout(()=>{
//     rootReactElement.render(headingReactElement);
// },200);


let secondHeadReactElement=React.createElement('h2',{},"create H2 from React");

let headerReactElements=React.createElement('header', {}, headingReactElement, secondHeadReactElement);

    // setTimeout(()=>{
    //     rootReactElement.render(headerReactElements);
    // },200);

    // rootReactElement.render(headerReactElements);

    function Main(){
        return React.createElement(
            'main',
            null, // options
            React.createElement('h3',{},'Main section'), //1st child
            React.createElement('p',{},'Lorem Ipsum')    //2nd child
    
        );
    }
    let bodyElement=React.createElement(
        'div',
        null,
        headerJSX,
        React.createElement(Main,) );
    rootReactElement.render(bodyElement);