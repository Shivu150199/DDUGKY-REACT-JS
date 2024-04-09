import {Chat} from "./Card";
import Navbar from "./component/navbar/Navbar";


function App() {

//   let name='yogesh'
//   let info='yogesh is looking  at something'
// function printHello(){
//   console.log('hello');
// }
// function printAlert(){
//   alert('hi everyone')
// }

  return (
    <div>
<Navbar/>

{/* <Card name='babu moshai' message='zindagi lambi nahi acchi honi chahiye' time='1998'/> */}
<Chat/>

{/* <Card name='devilal' message='hello every one' time='4 minutes ago'/> */}




      {/* <h1 style={styles.heading}>{name}</h1>
      <p style={styles.para}>{info}</p>
      <button style={styles.btn} onClick={printHello}>
        Click Me
      </button>
      <button style={styles.btn} onClick={printAlert}>
        Click Me
      </button> */}
    </div>
  )
}

// let styles={
//   heading:{
//     backgroundColor:'black',
//     color:'blue'
//   },
//   para:{
//     color:'red'
//   },
//   btn:{
//     border:'transparent',
//     padding:'1rem',
//     backgroundColor:'seaGreen'
//   }
// }


export default App;
