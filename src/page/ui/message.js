import React from  'react';
import {Card, Button, message, Space} from 'antd';

export default function Message () {
  return (
    <div>
      <Card title="全局提示框" className="card-wrap">
        <Space>
        <Button type="primary" onClick={()=>{showMessage('success')}}>success</Button>
        <Button type="primary" onClick={()=>{showMessage('error')}}>error</Button>
        <Button type="primary" onClick={()=>{showMessage('info')}}>info</Button>
        <Button type="primary" onClick={()=>{showMessage('warning')}}>warning</Button>
        <Button type="primary" onClick={()=>{showMessage('warn')}}>warn</Button>
        <Button type="primary" onClick={()=>{showMessage('loading')}}>loading</Button>
        </Space>
      </Card>
    </div>
  )
}

const showMessage = (type) => {
  message[type]("恭喜你，React课程晋级成功！");
}