require('dotenv').config()
const express = require('express'),
        app = express(),
        socket = require('socket.io'),
        PORT = process.env.PORT
       

// App Setup
const server = app.listen(PORT, () => console.log('✨  Magic ✨  is happening on port, ' + PORT + ''));

// Static Files
app.use("/", express.static(__dirname + "/public/views"));
app.use("/", express.static(__dirname + "/public/"));


// Socket Connection and Server
const io = socket(server);
io.on('connection', (socket) => {
        console.log('made socket connection', socket.id);
        // Handle chat event
        socket.on('chat', function(data){
                // console.log(data);
                io.emit('chat', data);
        });

        // Handle typing event
        socket.on('typing', function(data){
                socket.broadcast.emit('typing', data);
        });
            
        
})