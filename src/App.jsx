import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LocalFesta from './components/LocalFesta'
import Presentes from './components/Presentes'
import SobreMim from './components/SobreMim'
import Amigos from './components/Amigos'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LocalFesta />
        <Presentes />
        <SobreMim />
        <Amigos />
      </main>
    </>
  )
}

export default App
