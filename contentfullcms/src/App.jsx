import { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import './App.css'

  

function App() {
  const [data,setData]=useState([])
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '9rsaq6vnkupv',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'FNcQao3wr05KQQ77a1g_wANZB0aID77iyDLKDLCw3xI',
  environment: 'master',
})
// console.log(client)
useEffect(()=>{
client.getEntries({ content_type: 'projects' }).then((res) => {
  // console.log(res)
  setData(res.items)
})
},[])

 console.log(data)
//  client.getEntry()

  return (
    <>
      <div>
        {data.map((item)=>{
       console.log(item)
        })}
      </div>
    </>
  )
}
// FNcQao3wr05KQQ77a1g_wANZB0aID77iyDLKDLCw3xI      access token
//9rsaq6vnkupv     space id
//contentfulJsmies
export default App
