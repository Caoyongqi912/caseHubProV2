import React from 'react';
import { useModel } from '@@/plugin-model/useModel';
import { Space } from 'antd';

const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  return (
    <div>
      <br />
      <Space>
        <h1>hi {currentUser?.username}</h1>
      </Space>
    </div>
  );
};

export default Index;
