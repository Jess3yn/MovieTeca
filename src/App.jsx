import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import { peliculas } from './lib/db.json'

function App() {
  //<React.Fragment></React.Fragment>
  // <></>
  //<button class="bg-red-500">Hola</button>

  return (
    <>
      <div style={{padding: 50}}>
        <div className='flex gap-3 justify-evenly flex-wrap'> 
          {peliculas.map(p=> <MovieCard 
          key = {p.id} 
          id = {p.id}
          title={p.titulo}
          clasification={p.clasificacion}
          year = {p.anio}
          poster={p.poster}
          duration={p.duracion}
          onFavorite={()=>alert(p.id)}
          />
          )
          }
        </div>
        
      </div>
  
    </>
  )
}

export default App
