import { PlusOutlined } from "@ant-design/icons";
import {
  ModalForm, ProFieldRequestData,
  ProForm,
  ProFormSelect,
  ProFormText
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import React from "react";
import { queryUser } from "@/api/user";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


const Index: React.FC = () => {

  const queryUserList = async () => {
    const response = await queryUser()
      .then((res) => {
        console.log(res);
        let r: ProFieldRequestData<any> = [];
        res.data.map(item => {
          let temp = {};
          temp["lable"] = item.id;
          temp["value"] = item.username;
          r.push(temp);
        });
        return r;
      }).catch((error) => console.log(error));
    return Promise.resolve(response);
  };

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title="新建项目"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        onCancel: () => console.log("run")
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success("提交成功");
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="项目名称"
          tooltip="最长为 20 位"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name="name"
          label="项目描述"
          tooltip="最长为 100 位"
          placeholder="请输入名称"
        />

      </ProForm.Group>

      <ProForm.Group>
        <ProFormSelect
          showSearch
          request={() => queryUserList()}
          fieldProps={{
            autoClearSearchValue: true,//选中后清空搜索框
            //使用onChange onBlur
            onChange: (value) => {
              return value;
            }
          }}//必须要return一个值出去 表单项才会展示值在输入框上
          width="xs"
          name="useMode"
          label="负责人"
          colProps={{ span: 8 }}
        />

      </ProForm.Group>
    </ModalForm>
  );
};

export default Index;

