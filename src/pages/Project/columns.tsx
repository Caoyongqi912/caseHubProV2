import { ProColumns } from '@ant-design/pro-components';

const columns: ProColumns[] = [
  {
    title: 'id',
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 50,
  },
  {
    title: 'uid',
    dataIndex: 'uid',
    ellipsis: true,
  },
  {
    title: 'title',
    dataIndex: 'name',
    ellipsis: true, //是否自动缩略
    width: '10%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },

  {
    title: 'desc',
    dataIndex: 'desc',
    ellipsis: true,
  },
  {
    title: 'admin',
    dataIndex: 'adminID',
    ellipsis: true,
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'create_time',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <a>删除</a>,
    ],
  },
];

export default columns;
