'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  // write code here
  const modifiedState = { ...state };

  const arrOfObjects = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        modifiedState[key] = action.extraData[key];
      }

      const addingObjects = Object.assign({}, modifiedState);

      arrOfObjects.push(addingObjects);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (key in modifiedState) {
          delete modifiedState[key];
        }
      }

      const removingProps = Object.assign({}, modifiedState);

      arrOfObjects.push(removingProps);
    } else if (action.type === 'clear') {
      for (const key in modifiedState) {
        delete modifiedState[key];
      }

      const clearingProps = Object.assign({}, modifiedState);

      arrOfObjects.push(clearingProps);
    }
  }

  return arrOfObjects;
}

module.exports = transformStateWithClones;
