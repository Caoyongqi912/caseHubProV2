import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import NewProject from '@/components/NewProject';
import { pageProject } from '@/api/project';
import columns from '@/pages/Project/columns';

export default () => {
  const actionRef = useRef<ActionType>(); //Table action 的引用，便于自定义触发
  const getProjectPage = async (values: API.IPageProject) => {
    console.log(values);
    const response = await pageProject({ ...values })
      .then((res) => {
        return {
          data: res.data.items,
          total: res.data.pageInfo.total,
          success: res.msg,
          pageSize: res.data.pageInfo.page,
          current: res.data.pageInfo.limit,
        };
      })
      .catch((error) => console.log(error));
    return Promise.resolve(response);
  };

  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      // @ts-ignore
      request={({ pageSize, current }, sort, filter) => {
        return getProjectPage({ pageSize, current, sort, filter });
      }}
      editable={{
        //可编辑表格的相关配置
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage', //持久化列的类类型， localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 sessionStorage
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
        span: 6,
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
        reload: true,
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          console.log('======' + values);
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
        // onChange: (page) => console.log(page)
      }}
      onSubmit={(params) => {
        console.log('submit', params);
      }}
      dateFormatter="string"
      headerTitle="Project List"
      toolBarRender={() => [<NewProject />]}
    />
  );
};
