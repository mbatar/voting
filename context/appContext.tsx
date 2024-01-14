"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { AppStateActionType, AppStateType } from "@/context/types";
import { FILL_EMPLOYEES, INCREMENT_VOTE } from "@/constants";

const initialState: AppStateType = {
  employees: [],
};

const reducer = (state: AppStateType, action: AppStateActionType) => {
  switch (action.type) {
    case FILL_EMPLOYEES:
      return { ...state, employees: action.payload };
    case INCREMENT_VOTE: {
      const employees = state.employees.map((employee) =>
        employee.id === action.payload
          ? { ...employee, point: employee.point + 1 }
          : employee
      );
      return { ...state, employees };
    }
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppStateType;
  dispatch: Dispatch<AppStateActionType>;
}>({ state: initialState, dispatch: () => null });

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
