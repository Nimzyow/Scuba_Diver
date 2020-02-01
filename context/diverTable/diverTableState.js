import React, { useReducer } from "react";
import DiverTableContext from "./diverTableContext";
import DiverTableReducer from "./diverTableReducer";

import * as Types from "../../components/Types";

const DiverTableState = props => {
  const initialState = {
    depth: "10",
    bottomTime: "2",
    surfaceInterval: "00:00",
    pressureGroupCategory: "A",
    pressureGroupAfterSICategory: "A",
    safetyStop: "RECOMMENDED",
    rNT: 0,
    aBT: 2,
    tBT: 2
  };

  const [state, dispatch] = useReducer(DiverTableReducer, initialState);

  const setDepth = value => {
    dispatch({ type: Types.SET_DEPTH, payload: value });
  };

  const setBottomTime = value => {
    dispatch({ type: Types.SET_BOTTOM_TIME, payload: value });
  };

  const setSurfaceInterval = value => {
    dispatch({ type: Types.SET_SURFACE_INTERVAL, payload: value });
  };

  return (
    <DiverTableContext.Provider
      value={{
        depth: state.depth,
        bottomTime: state.bottomTime,
        surfaceInterval: state.surfaceInterval,
        pressureGroupCategory: state.pressureGroupCategory,
        pressureGroupAfterSICategory: state.pressureGroupAfterSICategory,
        safetyStop: state.safetyStop,
        rNT: state.rNT,
        aBT: state.rNT,
        tBT: state.tBT,
        setDepth,
        setBottomTime,
        setSurfaceInterval
      }}
    >
      {props.children}
    </DiverTableContext.Provider>
  );
};

export default DiverTableState;
