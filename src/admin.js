import React, {useState} from 'react';
import { Layout, Row, Col, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from '@ant-design/icons';
import NavLeft from './components/NavLeft';
import Util from './utils';
import './style/common.less';

const { Header, Sider, Content } = Layout;

/**
 * 使用class定义组件
 */
// export default class Admin extends React.Component{
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };
//   render () {
//     return (
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <NavLeft />
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="site-layout-background" style={{ padding: 0 }}>
//             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: this.toggle,
//             })}
//           </Header>
//           <Content className="site-layout-background" style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//           }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               Bill is a cat.
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     )
//   }
// }

/**
 * 使用函数定义组件
 */
export default function Admin (props) {
  const [collapsed, setCollapsed] = useState(false);
  const [userName] = useState('埼玉');
  return (
    <Layout className="container">
      <Sider className="nav-left" trigger={null} collapsible collapsed={collapsed}>
        <NavLeft />
      </Sider>
      <Layout className="site-layout main">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row className="header-top">
            <Col span="1">
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
                style:{padding:'11px 8px'},
              })}
            </Col>
            <Col span="14"></Col>
            <Col span="3" style={{textAlign: "right"}}><Today /></Col>
            <Col span="4" style={{paddingRight:10,textAlign:"right"}}>
              {`你好，${userName}`}
            </Col>
            <Col span="2"><Button type="link" danger style={{marginLeft: 10}}>退出</Button></Col>
          </Row>
          <Row className="breadcrumb">

          </Row>
        </Header>
        <Content className="content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

function Today () {
  let today = Util.formateDate(new Date());
  const [sysTime] = useState(today);//, setSysTime

  return (
  <span>{sysTime}</span>
  )
}