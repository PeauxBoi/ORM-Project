const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('David', '1017', 'davidchu@outlook.com');

    expect(employee.name).toBe('David');
    expect(employee.id).toBe('1017');
    expect(employee.email).toBe('davidchu@outlook.com');
});

test("gets employee's name", () => {
    const employee = new Employee('David', '1017', 'davidchu@outlook.com');

    expect(employee.getName()).toBe('David');
});

test("gets employee's id", () => {
    const employee = new Employee('David', '1017', 'davidchu@outlook.com');

    expect(employee.getId()).toBe('1017');
});

test("gets employee's email", () => {
    const employee = new Employee('David', '1017', 'davidchu@outlook.com');

    expect(employee.getEmail()).toBe('davidchu@outlook.com');
});

test("gets employee's role", () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});