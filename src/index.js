//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

const greetingMessage = <div>Hello React!</div>;

console.log("Hello React!!");

//ReactDOM.render(greetingMessage, document.getElementById('root') );

ReactDOM.createRoot(document.getElementById('root')).render(greetingMessage);

