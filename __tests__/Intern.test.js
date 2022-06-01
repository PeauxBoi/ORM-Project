const { exportAllDeclaration } = require('@babel/types');
const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('david', '0002', 'davidchu0002@outlook.com', 'SCHOOL');

    expect(intern.name).toBe('david');
    expect(intern.id).toBe('0002');
    expect(intern.email).toBe('davidchu0002@outlook.com');
    expect(intern.school).toBe('SCHOOL');
});

test("gets intern's school", () => {
    const intern = new Intern('david', '0002', 'davidchu0002@outlook.com', 'SCHOOL');

    expect(intern.getSchool()).toBe('SCHOOL');
});

test("gets intern's role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});