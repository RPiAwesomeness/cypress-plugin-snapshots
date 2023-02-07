const { initCommands } = require('../commands');

global.Cypress = {
  env: () => ({}),
  config: () => { },
  Commands: { add: jest.fn(), },
  on: () => ({}),
};

global.cy = {};

describe('commands', () => {
  it('initCommands', () => {
    global.before = jest.fn();
    global.cy.task = jest.fn().mockResolvedValue({ passed: true });

    initCommands();

    expect(global.Cypress.Commands.add).toBeCalled();
    expect(global.Cypress.Commands.add.mock.calls.length).toEqual(1);
    expect(global.Cypress.Commands.add.mock.calls[0][0]).toEqual('toMatchImageSnapshot');
    expect(global.before).toBeCalled();
  });
});
