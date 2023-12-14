import { PageContainer } from '@ant-design/pro-components';
import { connect, useModel } from '@umijs/max';
import { Button, Form, Input } from 'antd';
function mapStateToProps(state: any) {
  return {
    count: state.count,
    about: state['About.model'],
    loading: state.loading,
  };
}

const HomePage: React.FC = (props: any) => {
  // console.log(props);
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
      <Button onClick={handleSubmit}>Click me</Button>
      <h1>Count {props.count.num}</h1>
      <Button
        onClick={() =>
          props.dispatch({
            type: 'count/add',
          })
        }
      >
        Increase
      </Button>
      <Button
        onClick={() =>
          props.dispatch({
            type: 'count/decrement',
            payload: 2,
          })
        }
      >
        Decrease (-2)
      </Button>
      <h2>{props.loading.global ? 'Loading... ' : ''}</h2>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/addAsync',
          });
        }}
      >
        Add Async
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/decrementAsync',
          });
        }}
      >
        Decrement Async
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'count/throwError',
          });
        }}
      >
        Throw Effect Error
      </Button>
    </PageContainer>
  );
};

export default connect(mapStateToProps)(HomePage);
