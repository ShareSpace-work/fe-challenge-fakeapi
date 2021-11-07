const path = require('path')
const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
})

// Declare a route
fastify.get('/places', async (request, reply) => {
    return [
        { name: 'Office A', url: 'https://www.sharespace.work/pl/coworking/polska/poznan/business-link-maraton', img: '/public/1.png' },
        { name: 'Office B', url: 'https://www.sharespace.work/pl/coworking/niemcy/berlin/wework-warschauer-platz', img: '/public/3.png' },
        { name: 'Office C', url: 'https://www.sharespace.work/pl/coworking/polska/warszawa/solutions-rent-ethos', img: '/public/4.png' },
        { name: 'Office D', url: 'https://www.sharespace.work/pl/biuro-serwisowane/wegry/budapeszt/hubhub-budapest', img: '/public/2.png' },
    ]
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()