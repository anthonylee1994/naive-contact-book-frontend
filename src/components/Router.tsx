import React from "react";
import { BrowserHistory } from "history";
import { Router as RouterBase } from "react-router-dom";

interface Props {
  history: BrowserHistory;
  children: React.ReactNode;
}

export const Router = ({ children, history }: Props) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <RouterBase
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
