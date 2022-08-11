import React from 'react';
import { useModel, useAccess, Access } from 'umi';
import { Button, Space } from 'antd';

const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  console.log('============amin==============');
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
