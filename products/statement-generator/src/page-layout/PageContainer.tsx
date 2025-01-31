import React, { useContext } from 'react';

import RoutingContext from 'contexts/RoutingContext';

import useUtilityStyles from 'styles/utilityStyles';

interface IPageContainer {
  children?: any;
  className?: string;
}

const PageContainer = ({ children, className = '' }: IPageContainer) => {
  const { topLevelPageTheme } = useContext(RoutingContext);

  const utilityClasses = useUtilityStyles({
    pageTheme: topLevelPageTheme,
  });

  return (
    <div className={`${utilityClasses.primaryContainer} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
