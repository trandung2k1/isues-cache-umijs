import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form, Input } from 'antd';

const HomePage: React.FC = () => {
  const { handleSubmit, settFilter, filter } = useModel('global');
  console.log(filter);
  return (
    <PageContainer>
      <Form
        onFinish={(values) =>
          settFilter((prev: any) => ({ ...prev, query: values.name }))
        }
      >
        <Form.Item label="Name" name={'name'}>
          <Input />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
      <Button onClick={handleSubmit}>Click</Button>
    </PageContainer>
  );
};

export default HomePage;
