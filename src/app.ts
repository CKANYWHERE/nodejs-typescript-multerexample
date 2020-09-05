import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import methodOverride from 'method-override'
import io from 'socket.io'
import imageRoute from './Router/ImageRouter'

const app = express();
const port = process.env.PORT || 7940
const server = app.listen(port)

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/vnd.api+json'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.set('socketio',io)
app.use('/api/v1/uploadImage/',imageRoute)


server.timeout = 10000

console.log('server is running on ' + port);

exports = module.exports = app;