<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout';

ReactDOM.render(
   <MuiThemeProvider>
      <Layout />
   </MuiThemeProvider>,
   document.getElementById('root'),
);
||||||| 928fe53
=======
import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

let messages = ['Привет', 'Как дела?'];

const handleClick = () => {
   messages.push('Нормально');
   ReactDOM.render(
      <MessageField messages={ messages } />,
      document.getElementById('root'),
   )
}

const MessageComponent = (props) => <div>{ props.text } </div>;

const MessageField = (props) => {
   const messageElements = props.messages.map(message => <MessageComponent text={ message } />);
   return (
      <div>
         <h1>React Chat</h1>
         { messageElements }
         <button onClick={ handleClick }>Отправить сообщениеее</button>
      </div>
   )
   
};

ReactDOM.render(
   <MessageField messages={ messages }/>,
   document.getElementById('root'),
);
>>>>>>> lesson1
