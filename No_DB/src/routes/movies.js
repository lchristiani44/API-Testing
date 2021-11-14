const _ = require('underscore')
const { Router } = require('express')
const router = Router()

// Pseudo Database
let movies = require('../samples.json')

// Retrieve all movies
router.get('/', (req, res) => {
    // res.json({'Message': 'Here are the movies'})
    res.json(movies)
})

// Post new movie
router.post('/', (req, res) => {
    const { title, year, rating } = req.body
    if (title && year && rating) { // Validacion
        const id = movies.length + 1
        const newMovie = {...req.body, id} // Guardo el nuevo objeto en una variable
        // console.log(newMovie)
        movies.push(newMovie) // Actualizo la lista de peliculas
        res.json(newMovie) // Puedo elegir entre enviar la nueva pelicula o el arreglo actualizado.
    } else {
    res.status(400).json({'Error': 'request error'})
    }
})

// Delete por `id`
router.delete('/:id', (req, res) => {
    // const { id } = req.params
    const id = parseInt(req.params.id)
    console.log(id, typeof id)
    if (!id) return res.status(400).json({"error": "El `id` no fue recibido. Por lo tanto, no se puede procesar la solicitud."})
    else {
        console.log(id)
        let updatedMovies = movies.filter(movie => (
            movie.id !== id // ! No reconoce el id. Considera que todos son distintos y por lo tanto los arreglos quedan iguales: LO SOLUCIONO CON parseInt YA QUE POR url SOLO PUEDO PASAR `strings` (OTRA OPCION SERIA USAR EL DOBLE IGUAL PARA LAS COMPARACIONES)
        ))
        console.log(movies.length)
        console.log(updatedMovies.length)
        console.log(updatedMovies)
        if (movies.length !== updatedMovies.length) { // ! No esta entrando aca
            console.log(updatedMovies)
            console.log('Lista actualizada')
            return res.json(updatedMovies)
        } else {
            res.status(400).json({"error": "No existe la pelicula con el `id` indicado"})
        }
    }
})

// Delete por `id` usando la libreria `underscore.js` (Fazt)
// router.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     if (!id) return res.status(400).json({"error": "El `id` no fue recibido. Por lo tanto, no se puede procesar la solicitud."})
//     // Metodo de underscore:
//     _.each(movies, (movie, index) => {
//         if (movie.id === id) {
//             movies.splice(index, 1) // Remuevo una sola movie ubicada en el indice `index` que uso en el metodo `each` de la libreria
//         }
//     })
//     return res.json(movies)
// })

// Update movie
// router.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log(id)
//     const { title, year, rating } = req.body
//     if (title && year && rating) {
//         console.log(title, year, rating)
//         movies = movies.map(movie => {
//             if (movie.id === id) {
//                 movie.title = title
//                 movie.year = year
//                 movie.rating = rating
//             }
//         })
//         console.log(movies)
//         return res.json(movies)
//     }
//     console.log('request error')
//     return res.status(400).json({'Error': 'request error'})
// })

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id, typeof id)
    const { title, year, rating } = req.body
    if (title && year && rating) {
        let updatedMovie = movies.find(movie => (
            movie.id === id // ! No encuentra la pelicula con el id pasado por params. Por lo tanto, no crea updatedMovie...
        ))
        if (!updatedMovie) return res.status(400).json({'Error': 'The `id` passed does not correspond to an existing movie'}) // ! ... y entra aca: LO SOLUCIONO CON parseInt PARA params
        updatedMovie.title = title
        updatedMovie.year = year
        updatedMovie.rating = rating
        return res.json(updatedMovie)
    }
    return res.status(400).json({'Error': 'request error'})
})

module.exports = router