import getAge from './app.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
// console.log(React);
// import func from './app.js'
// // console.log(func);
// function myName(){
//     console.log('hello my name is shivam ');
// }

// for (let i =0;i<100;i++){
//     console.log(i);
// }
// getAge()

let Element = React.createElement('div', {
  id: 'main',
  children: [
    React.createElement('p', { className: 'bold', children: 'iamaasdf' }),
    React.createElement('p', {
      className: 'para',
      children: 'i am a paragraph',
    }),
  ],
})
// let Element = /*#__PURE__*/ React.createElement('div', {
//   id: 'main',
//   children: [
//     /*#__PURE__*/ React.createElement('p', {
//       children: 'i am',
//     }),
//     /*#__PURE__*/ React.createElement('b', {
//       children: 'i am bold tag',
//     }),
//   ],
// })

// let Element=(<div id='main'>
// <p>
//     i am
// </p>
// <b>
//     i am bold tag
// </b>
// </div>)

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(Element)
// getAge()
// console.log('hello react');
