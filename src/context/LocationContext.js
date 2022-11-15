import createDataContext from "./createDataContext";

const LocationReducer = (state, action) => {
  switch (action.type) {
    case "toggle_recording":
      return { ...state, recording: !state.recording };
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const toggleRecording = (dispatch) => () => {
  dispatch({ type: "toggle_recording" });
};

const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_current_location", payload: location });
};

export const { Provider, Context } = createDataContext(
  LocationReducer,
  { toggleRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
