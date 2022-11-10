import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React from 'react';
import { newProject } from '@/api/project';
import { currentUser, searchUser } from '@/api/user';

const Index: React.FC = () => {
  return (
    <ModalForm<{
      name: string;
      desc: string;
      adminID: number;
    }>
      title="新建项目"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建项目
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        message.success('提交成功');
        console.log(values);
        try {
          const res = await newProject(values);
          console.log(res);
          if (res.code == 0) {
            message.success(res.msg);
            return true;
          } else {
            message.error(res.msg);
            return false;
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      <ProFormText
        name="name"
        label="项目名称"
        placeholder="input your project name"
        required={true}
      />
      <ProFormText
        name="desc"
        label="项目描述"
        placeholder="input your project desc"
      />
      <ProFormSelect
        showSearch
        name="adminID"
        label="项目负责人"
        placeholder="input your admin name to search"
        rules={[{ required: true, message: 'Please select !' }]}
        debounceTime={2000}
        request={async (params) => {
          let res: any[] = [];
          const searchData: API.IMoHuSearchUser = {
            target: 'username',
            value: params.keyWords,
          };
          const { data }: any[] = await searchUser(searchData);
          console.log('+++', data);
          data.map((item: any) => {
            let r = {};
            r['label'] = item.username;
            r['value'] = item.id;
            res.push(r);
          });
          return res;
        }}
      />
    </ModalForm>
  );
};

export default Index;
