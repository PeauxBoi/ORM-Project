const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager("david", '0003', 'davidchu0003@outlook.com', '111-111-1111');
    
    expect(manager.name).toBe('david');
    expect(manager.id).toBe('0003');
    expect(manager.email).toBe('davidchu0003@outlook.com');
    expect(manager.officeNumber).toBe('111-111-1111');
});

test("gets manager's role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});