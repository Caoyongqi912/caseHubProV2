import React, {ReactNode} from 'react';


interface IProps {
  children?: ReactNode;
}

const Index = (props: IProps) => {
  return (
    <>
      {props?.children}
    </>
  );
};

export default Index;
