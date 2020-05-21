import React, { useState } from 'react';
import { Menu } from 'antd';
import menuList from '../../resource/menuConfig';
import './index.less';
import logo from './antdlogo.svg';
import SubMenu from 'antd/lib/menu/SubMenu';

/**
 * 使用class定义组件
 */
// export default class NavLeft extends React.Component {
//   componentWillMount(){
//     const menuTreeNode = this.renderMenu(menuList);
//     this.setState({
//       menuTreeNode
//     })
//   }
//   // 菜单渲染
//   renderMenu = (data) => {
//     return data.map(item => {
//       if(!item.children){
//         return (
//           <Menu.Item title={item.title} key={item.key}>
//             {item.title}
//           </Menu.Item>
//         )
//       }
//       // 尾递归
//       return (
//         <SubMenu title={item.title} key={item.key}>
//           {this.renderMenu(item.children)}
//         </SubMenu>
//       )
//     })
//   }
//   render () {
//     return (
//       <div>
//         <div className="logo">
//           <img src={logo} alt=""/>
//           <h1>Hooks Train</h1>
//         </div>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//           {this.state.menuTreeNode}
//         </Menu>
//       </div>
//     )
//   }
// }

function renderMenu (data) {
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
        {renderMenu(item.children)}
      </SubMenu>
    )
  })
}
/**
 * 使用函数定义组件
 */
export default function NavLeft () {
  /**
   * componentWillMount生命周期未来将被移除
   * 想在渲染之前在componentWillMount内初始化状态。只需在useState中执行即可
   */
  const [menuTreeNode] = useState(renderMenu(menuList)); //, setMenuTreeNode

  return (
    <div>
      <div className="logo">
        <img src={logo} alt=""/>
        <h1>Hooks Train</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {menuTreeNode}
      </Menu>
    </div>
  )
}
