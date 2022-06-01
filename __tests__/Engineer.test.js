const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('david0001', '0001', 'davidchu0001@outlook.com', 'davidchu0001');

    expect(engineer.name).toBe('david0001');
    expect(engineer.id).toBe('0001');
    expect(engineer.email).toBe('davidchu0001@outlook.com');
    expect(engineer.github).toBe('davidchu0001');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('david0001', '0001', 'davidchu0001@outlook.com', 'davidchu0001');

    expect(engineer.getGithub()).toBe('davidchu0001');
});

test("gets engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});