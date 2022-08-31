
Cartelera()

// const peliculaContenedor = document.querySelector('.card-deck')

const peliculacontenedor2 = document.querySelector('.scroll-tray')


function Cartelera()
{
fetch('https://movie.azurewebsites.net/api/cartelera?title=&ubication=', {method: 'GET'})
.then (respuesta => respuesta.json())
.then (peliculas => {
    peliculas.forEach(pelicula => { 
            
            const div = document.createElement('div')

            const poster = document.createElement('img')
            poster.src = pelicula.Poster

            div.appendChild(poster)
            peliculacontenedor2.append(div)
        }

                            )
                }) 
}
