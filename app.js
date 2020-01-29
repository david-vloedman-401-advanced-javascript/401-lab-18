'use strict';


const io = require('socket.io')(3000);


io.on('connection', socket => {
  console.log(`Connected on ${socket.id}`);
});

const school = io.of('/school');

school.on('connection', socket =>{
  console.log(`School channel`, socket.id);

  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('submit', payload => {
    console.log(payload);
    school.to('instructor').emit('submit', payload);    
  });

  socket.on('grade', payload => {
    school.to('student').emit('grade', payload);
  });
  
});