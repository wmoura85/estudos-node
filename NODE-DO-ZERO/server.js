// import {createServer} from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hein!')

//     return response.end()

// })

// server.listen(3333)

import { fastify } from "fastify"

const server = fastify()

server.post('/videos', () => {
    return 'Hein!'
})

server.get('/', () => {
    return 'Hein!'
})


server.put('/videos:id', () => {
    return 'Hein!'
})

server.deleteget('/videos:id', () => {
    return 'Hein!'
})


server.listen({
    port: 3333,
})