import React from 'react';
import '@/style/login.scss';

class Com extends React.Component {

  componentDidMount () {
  }

  goBack () {
    this.props.history.go(-1);
  }
  Login () {
    this.props.history.push('/user');
    this.props.changeIsLogin();
  }

  goBack () {
    this.props.history.go(-1);
  }

  render () {
    return (
      <div className = "box">
        
        <div className = "content">
          <div className = "login-bg">
          <header className = "login-header">
          <span className = "iconfont icon-fanhui" onClick = { this.goBack.bind(this) } ></span>
          <i>我的</i>
        </header>
          </div>
          <div className = 'inputItem'  >
            <div className = 'userName'>
              <span className = "iconfont icon-yonghu"></span>
              <div><input type = 'text' placeholder = "手机号/邮箱/用户名" /></div>
            </div>
            <div className = 'passWord'>
              <span className = 'iconfont icon-mima' ></span>
              <div><input  type = 'password' placeholder = "请输入密码"/></div>
              <div></div>
            </div>
            <button className = "goLogin" onClick = { this.Login.bind(this)}>登录</button>   
            <p className = "more"><a className = "toRegiser">去注册</a><a className = "forget">忘记密码</a></p>         
          </div>
        </div>
      </div>
    )
  }
}

export default Com;