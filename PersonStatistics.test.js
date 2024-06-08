const { describe, it, expect } = require('vitest');
const Person = require('../Person');
const PersonStatistics = require('../PersonStatistics');

describe('PersonStatistics', () => {
  const people = [
    new Person(1, 'Alice', 25, true, 85),
    new Person(2, 'Bob', 30, false, 70),
    new Person(3, 'Charlie', 22, true, 90),
    new Person(4, 'David', 28, true, 35),
  ];

  const stats = new PersonStatistics(people);

  it('should calculate the average age', () => {
    expect(stats.getAverageAge()).toBeCloseTo(26.25, 2);
  });

  it('should count the number of students', () => {
    expect(stats.getNumberOfStudents()).toBe(3);
  });

  it('should find the person with the highest score', () => {
    expect(stats.getPersonWithHighestScore().name).toBe('Charlie');
  });

  it('should calculate the average score of students', () => {
    expect(stats.getAverageScoreOfStudents()).toBeCloseTo(70, 2);
  });

  it('should find the oldest student', () => {
    expect(stats.getOldestStudent().name).toBe('David');
  });

  it('should check if anyone is failing', () => {
    expect(stats.isAnyoneFailing()).toBe(true);
  });
});
