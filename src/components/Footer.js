import React from 'react';
import { NavLink }  from 'react-router-dom';


class Com extends React.Component{

  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <footer className = "footer">
        <ul>
          <NavLink to = '/home' >
            <span className = "iconfont icon-shouye"></span>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/liCai">
            <span className = "iconfont icon-qianbao"></span>
            <p>理财</p>
          </NavLink>
          <NavLink to = "/find">
            <span className = "iconfont icon-tingzijiluyin-"></span>
            <p>发现</p>
          </NavLink>
          <NavLink to = "/user">
            <span className = "iconfont icon-wode"></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    )
  }
}

export default Com;