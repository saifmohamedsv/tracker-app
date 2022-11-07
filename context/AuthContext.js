import createDataContext from "./createDataContext";

const authReducer = (state, payload) => {
  switch (state) {
    case "":
      break;

    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
