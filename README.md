# NetflixThumbnails.tsx
carrusel de thumbnails estilo netflix
## Uso
NetflixThumbnails.tsx recibe un array de objetos HTML
``` js 
import './assets/App.css'
import NetflixThumbnails from './components/NetflixThumbnails/NetflixThumbnails.tsx'

export default function App() {
  return (
    <div className="App">
      <NetflixThumbnails
      lista = {[
            <div>
              <h2>TITULO</h2>
              <p>Párrafos</p>
              <p>LOREM IPSUM</p>
            </div>, 
            <div>
              <h2>TITULO</h2>
              <p>Párrafos</p>
              <p>LOREM IPSUM</p>
            </div>
      ]}/>
    </div>
  )
}
