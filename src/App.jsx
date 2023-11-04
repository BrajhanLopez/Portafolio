import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Swicht from './components/Swicht'
import Whatsapp from './components/Whatsapp'


function App() {
  const [theme, settheme] = useState(true)

  return (
    <div className={theme?'dark':'light'}>
    <Header  theme={theme}/>
    <Swicht theme={theme} settheme={settheme} />   
    <Main />
    <Contact />
    <Footer />
    <Whatsapp/>
    </div>
  )
}

export default App
