import { useState } from "react"
import Background from "./Componnets/Background/Background";
import Navbar from "./Componnets/Navbar/Navbar";
import Hero from "./Componnets/Hero/Hero";

function App() {
  let heroData =[
    {text1:"Drive into", text2:"What you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
    
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false)
  return (
    <div>
          <Background playStatus={playStatus} heroCount={heroCount} />
          <Navbar />
          <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus} 
           />
    </div>
  )
}

export default App
