'use strict';

const io = require('socket.io-client');

const schoolChannel = io.connect('http://localhost:3000/school');

schoolChannel.emit('join', 'instructor');

schoolChannel.on('submit', payload => {
  console.log(payload);
  gradeAssignment(payload);  
});

const grade = num => `Grade: ${num}`;
/**
 * Get on it teach!
 * @param {*} payload 
 */
const gradeAssignment = payload => {
  const graded = {
    assignment: payload,
    grade: grade(Math.floor(Math.random() * 10)),
  };

  schoolChannel.emit('grade', graded);
};
