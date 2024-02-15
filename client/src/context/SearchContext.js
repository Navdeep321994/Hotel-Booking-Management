import { createContext, useReducer ,useState } from "react";

const INITIAL_STATE = { title: undefined, dates: [],options: { adult: undefined, children: undefined, room: undefined,},
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  // other context logic...

  return (
    <SearchContext.Provider value={{ dates, setDates }}>
      {children}
    </SearchContext.Provider>
  );
};
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        title: state.title,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

