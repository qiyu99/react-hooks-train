import React from 'react';
import {Card, Form, Input, Button} from 'antd';
const FormItem = Form.Item;
export default function Login () {
  return (
    <div>
      <Card title="登录行内表单">
        <Form layout="inline">
          <FormItem>
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem>
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Button type="primary">登录</Button>
          </FormItem>
        </Form>
      </Card>
      <Card title="登录行内表单" style={{marginTop:'10px'}}>
        <Form layout="horizontal" style={{width:'300px'}}>
          <FormItem>
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem>
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Button type="primary">登录</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  )
}