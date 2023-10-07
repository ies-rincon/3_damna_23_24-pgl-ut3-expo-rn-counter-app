import React, { useState } from "react";
import PageOneView from "./one.view";

const PageOneContainer: React.FC<PageOneContainerProps> = ({ color }) => {
  const [clickCounter, setClickCounter] =
    useState<PageOneContainerState["clickCounter"]>(0);
  const handleRefresh = () => setClickCounter(0);
  const handleIncrement = () => setClickCounter(clickCounter + 1);
  const handleDecrement = () => {
    if (clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    }
  };
  const props = {
    clickCounter,
    color,
    handleRefresh,
    handleIncrement,
    handleDecrement,
  };
  return <PageOneView {...props} />;
};

export default PageOneContainer;
