


Categorias()
const categoriascontenedor = document.querySelector('.type-movies')

function Categorias()
{
fetch('https://movie.azurewebsites.net/api/cartelera?title=&ubication=', {method: 'GET'})
.then (respuesta => respuesta.json())
.then (peliculas => {
    peliculas.forEach(pelicula => {
            
            const scrollcontainer = document.createElement('div')
            scrollcontainer.classList.add('scroll-holder')

            const typescroll = document.createElement('div')
            typescroll.classList.add('scroll-tray')

            const typecontainer = document.createElement('div')
            typecontainer.classList = pelicula.Type

            const headertype = document.createElement('h3')
            headertype.textContent = pelicula.Type

            const portadafortype = document.createElement('img')
                portadafortype.src = pelicula.Poster
            
            scrollcontainer.appendChild(typescroll)
            typescroll.appendChild(typecontainer)
            typecontainer.appendChild(headertype)
            typecontainer.appendChild(portadafortype)
            categoriascontenedor.appendChild(scrollcontainer)

        

                            })
                }) 
}

