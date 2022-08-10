import React, {ReactNode} from 'react';

interface IProps {
  children?: ReactNode;
}

const Auth = (props: IProps) => {
  return (
    <div>
      {props?.children}
    </div>
  );
};

export default Auth;
