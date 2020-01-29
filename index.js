'use strict';

const studentSubmit = require('./student/student');

setInterval(() => {
  studentSubmit();
}, 1000);