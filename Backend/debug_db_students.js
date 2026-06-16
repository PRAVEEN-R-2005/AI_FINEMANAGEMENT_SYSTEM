const Student = require('./models/Student');

Student.getStudents((err, results) => {
  if (err) {
    console.error('DEBUG: SQL ERROR', err);
    process.exit(1);
  }
  console.log('DEBUG: RESULTS', results);
  process.exit(0);
});
