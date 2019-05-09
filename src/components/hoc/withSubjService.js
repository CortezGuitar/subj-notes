import React from 'react';
import { SubjServiceConsumer } from '../../service';

export default WrappedComponent => {
  const withSubjService = ({ ...props }) => {
    return (
      <SubjServiceConsumer>
        {subjService => {
          return <WrappedComponent {...props} subjService={subjService} />;
        }}
      </SubjServiceConsumer>
    );
  };

  return withSubjService;
};