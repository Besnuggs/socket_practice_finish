const express = require('express'),
        app = express(),
        socket = require('socket.io')
       

// App Setup
PORT = 3500;
const server = app.listen(PORT, () => console.log('✨  Magic ✨  is happening on port, ' + PORT + ''));

// Static Files
app.use(express.static('./public'));

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