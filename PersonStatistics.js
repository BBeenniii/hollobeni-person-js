const Person = require('./Person');

class PersonStatistics {
  constructor(people = []) {
    if (!Array.isArray(people)) {
      throw new Error('People must be an array');
    }
    this._people = people;
  }

  set people(people) {
    if (!Array.isArray(people)) {
      throw new Error('People must be an array');
    }
    this._people = people;
  }

  getAverageAge() {
    const totalAge = this._people.reduce((sum, person) => sum + person.age, 0);
    return this._people.length ? totalAge / this._people.length : 0;
  }

  getNumberOfStudents() {
    return this._people.filter(person => person.isStudent).length;
  }

  getPersonWithHighestScore() {
    return this._people.reduce((max, person) => person.score > max.score ? person : max, this._people[0]);
  }

  getAverageScoreOfStudents() {
    const studentScores = this._people.filter(person => person.isStudent).map(student => student.score);
    const totalScore = studentScores.reduce((sum, score) => sum + score, 0);
    return studentScores.length ? totalScore / studentScores.length : 0;
  }

  getOldestStudent() {
    const students = this._people.filter(person => person.isStudent);
    return students.reduce((oldest, student) => student.age > oldest.age ? student : oldest, students[0]);
  }

  isAnyoneFailing() {
    return this._people.some(person => person.score < 40);
  }
}

module.exports = PersonStatistics;
