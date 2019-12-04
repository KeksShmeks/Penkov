import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   const messageElements = props.messages.map(message => <MessageComponent text={ message } />);
   return (
      <div>
         <h1>React Chat</h1>
         { messageElements }
      </div>
   )
   
};

ReactDOM.render(
   <MessageField messages={ messages }/>,
   document.getElementById('root'),
);