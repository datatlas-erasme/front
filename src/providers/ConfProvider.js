import React from 'react';
import instanceConf from '../../public/api/conf/instance';

export const ConfContext = React.createContext(instanceConf);

export const ConfProvider = (props) => {
  return <ConfContext.Provider value={instanceConf} {...props} />;
};

export default ConfProvider;
