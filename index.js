// require your server and launch
const server = require('./api/server.js')

const port = 9000

server.listen(port, () => {
    console.log(`--- SERVER RUNNING ON http://localhost:${port} ---`)
});