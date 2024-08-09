console.log('TEST');
const rootElement=document.getElementById('root');

const rootReactElement=ReactDOM.createRoot(rootElement);
const headingReactElement=React.createElement('h1',{},'Hello from React scr.js');
rootReactElement.render(headingReactElement);
