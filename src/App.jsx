import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Conocenos from './components/Conocenos'
import Proyectos from './components/Proyectos'
import Servicios from './components/Servicios'
import AchievementShowcase from './components/AchievementShowcase'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const App = () => {
  return (

    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">

        <Navbar />
        <Inicio />
        <Conocenos />
        <Proyectos />
        <Servicios />
        <AchievementShowcase />
        <Equipo />
        <Contacto />
        <Footer />





    </main>
    
  )
}

export default App