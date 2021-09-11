const INITIAL_STATE = {
  isLoading: true,
};

export default function LandingReducer(state = INITIAL_STATE, action) {
  console.log(action, "action");
  switch (action.type) {
    case "LOADING_CHANGE":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return {
        ...state,
      };
  }
}
