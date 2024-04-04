// function myName(){
//     console.log('vishal');
// }

// myName()

// console.log(React);

// let main=document.getElementById('main')
// let div=document.createElement('div');
// let b=document.createElement('b');
// let p=document.createElement('p');
// b.innerText='name'
// p.innerText='my name is yogesh'
// div.append(b,p)
// main.appendChild(div)

// how to create element in react
console.log(React)
// let main = document.getElementById('main')
let b=React.createElement('b',{},'name')
let p=React.createElement('p',{className:'para'},'my name is vishal')

let div = React.createElement('div',{id:'devi',className:'vishal'},b,p);

console.log(div);

console.log(ReactDOM);
ReactDOM.render(div,document.getElementById('root'))


// main.append(div)