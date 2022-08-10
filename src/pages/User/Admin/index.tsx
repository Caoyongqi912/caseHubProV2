import React from 'react';
import {useModel, useAccess, Access} from "umi";
import {Button, Space} from "antd";

const Index = () => {
  const {initialState} = useModel('@@initialState')
  const {user, logout, login} = useModel("user")
  const access = useAccess();
  return (
    <div>
      <br/>
      {user?.username}
      <br/>
      <Space>
        <Access accessible={access.isAdmin} fallback={<>没有权限</>}>
          <h1>Access</h1>
        </Access>
        <Button type="primary" onClick={() => {
          login("cyq", "cyq")
        }}>login</Button>
        <Button type="primary" onClick={() => {
          logout()
        }}>logout</Button>
      </Space>
    </div>
  );
};

export default Index;
