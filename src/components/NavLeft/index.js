import React from 'react';
import { Menu } from 'antd';
import menuList from '../../resource/menuConfig';
import './index.less';
import logo from './antdlogo.svg';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class NavLeft extends React.Component {
  componentWillMount(){
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if(!item.children){
        return (
          <Menu.Item title={item.title} key={item.key}>
            {item.title}
          </Menu.Item>
        )
      }
      // 尾递归
      return (
        <SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>
      )
    })
  }

  render () {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt=""/>
          <h1>Hooks Train</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}