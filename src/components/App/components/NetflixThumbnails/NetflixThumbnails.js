import './assets/NetflixThumbnails.css'
import React, { useRef } from 'react'


export default function NetflixThumbnails( { lista } ) {

  const refNetflixThumbnails = useRef(null)
    let eKey = 0
    let posicionActual = 0

    let Avanzar= (elementoDOM)=>{
      
      if (posicionActual <= (lista.length * -200) + (window.innerWidth -100) ) {
        posicionActual = 100
      }
      posicionActual -= 100
      elementoDOM.style.left = posicionActual +'px'
      console.log(posicionActual)
      
    }

    let Retroceder= (elementoDOM)=>{
      
      if (posicionActual >= 0) {
        console.log('Mayor')
        posicionActual = (lista.length * -200) + window.innerWidth - 200
      }
      posicionActual += 100
      elementoDOM.style.left = posicionActual +'px'
      console.log(posicionActual)
    }

    return (
      <div>
        <div className="NetflixThumbnails__contenido__avanzar"
          onClick={ ()=> { 
            if(refNetflixThumbnails.current) Avanzar(refNetflixThumbnails.current)
            console.log('avanzar')
          }}
        >+</div>
        <div className="NetflixThumbnails__contenido__retroceder"
          onClick= { ()=>{
            if(refNetflixThumbnails.current) Retroceder(refNetflixThumbnails.current)
            console.log('retroceder')
          }}
        >-</div>
        <div className="NetflixThumbnails"  ref={ refNetflixThumbnails }>
        {
          lista.map((e)=>{
            eKey++
            return <div className='NetflixThumbnails__contenido' key={eKey} >
            {e}
            </div>
          })
        }
        </div>
      </div>
    )
  }