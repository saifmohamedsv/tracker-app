import React, { useReducer, useState } from "react";

export default (reducer, actions, state) => {
  const Context = React.useContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, state);

    let boundActions = {};

    for (const action in actions) {
      boundActions[action] = actions[action](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
