const actions = [];

export const makePrefix = (prefix: string) => (actionName: string) => {
  const action = `[${prefix}] ${actionName}`;

  if (actions.includes(action)) {
    throw new Error(`Action ${action} already exists`);
  }

  actions.push(action);

  return action;
};
