import React from 'react';
import { AppToast as AppToastComponent } from './AppToastComponent'; //Assuming we have a component named AppToastComponent

type AppToastProps = {
  position: { vertical: string; horizontal: string };
  message: string;
  severity: string;
};

const AppToast: React.FC<AppToastProps> = ({ position, message, severity }) => {
  return (
    <AppToastComponent
      position={position}
      message={message}
      severity={severity}
    />
  );
};

export default AppToast;
