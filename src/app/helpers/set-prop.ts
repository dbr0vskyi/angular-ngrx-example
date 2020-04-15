import * as SeamlessImmutable from "seamless-immutable";
const { static: seamless } = SeamlessImmutable;

export const setProp = <S, T>(...propNames: string[]) => (
  state: S,
  action: T
) => {
  const lastProp = propNames[propNames.length - 1];
  const newPropValue = action[lastProp];

  return seamless.setIn(state, propNames, newPropValue);
};
