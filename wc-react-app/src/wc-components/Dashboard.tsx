import { Avatar, Table } from 'antd';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import ReactQueryProvider from '../shared/components/ReactQueryProvider';

const getUsers = async () => (await fetch('https://60da97a6801dcb0017290a37.mockapi.io/users')).json();

const Dashboard = () => {
  const { data, isLoading } = useQuery(['users'], getUsers);

  const columns = useMemo(
    () => [
      {
        key: 'id',
        dataIndex: 'id',
        title: 'ID',
      },

      {
        key: 'avatar',
        dataIndex: 'avatar',
        title: 'Avatar',
        render: (avatar: string) => <Avatar src={avatar} />,
      },
      {
        key: 'name',
        dataIndex: 'name',
        title: 'Name',
      },
      {
        key: 'phoneNumber',
        dataIndex: 'phone',
        title: 'Phone Number',
      },
      {
        key: 'actions',
        dataIndex: 'id',
        title: 'Actions',
      },
    ],
    []
  );
  return (
    <Table
      dataSource={data?.items ?? []}
      columns={columns}
      loading={isLoading}
      rowKey="id"
      pagination={{
        total: data?.count,
      }}
    />
  );
};

const DashboardContainer = () => {
  return (
    <ReactQueryProvider>
      <Dashboard />
    </ReactQueryProvider>
  );
};

export default DashboardContainer;
