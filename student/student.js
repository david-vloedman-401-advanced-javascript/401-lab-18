'use strict';

const io = require('socket.io-client');

const studentChannel = io.connect('http://localhost:3000/school');

studentChannel.emit('join', 'student');

studentChannel.on('grade', payload => {
  console.log(payload, `Graded`);
});


const assignment = (num) => `Lab ${num}`;
/**
 *  @function
 *  Get to submittin' kid!
 */
const submit = () => {    
  let lab = assignment(Math.floor(Math.random() * 100));
  studentChannel.emit('submit', lab);
};









module.exports = submit;