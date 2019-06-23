import React from 'react';
import '@/style/login.scss';

class Com extends React.Component {

  componentDidMount () {
  }

  goBack () {
    this.props.history.go(-1);
  }
  onInput (e) {
    if (e.target.type === 'text' || e.target.type === 'password') {
        this.refs[e.target.type].style.opacity = 0;
    }
  }

  inputOnBlur (e) {
      if (e.target.value === '') {
        if (this.refs !== undefined ) {
        this.refs[e.target.type].style.opacity = 1;
        }
      }
  }
  Login () {
    this.props.history.push('/user');
    this.props.changeIsLogin();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header login-header">
          <span className = "iconfont icon-fanhui" ></span>
          <i>我的</i>
        </header>
        <div className = "content">
          <div className = "login-bg"></div>
          <div className = 'inputItem'  onClick = {this.onInput.bind(this)}>
            <div className = 'userName'>
              <span className = "iconfont icon-yonghu"></span>
              <div><input type = 'text'  onBlur={ this.inputOnBlur.bind(this) }/><span ref='text' className = "value">手机号/邮箱/用户名</span></div>
            </div>
            <div className = 'passWord'>
              <span className = 'iconfont icon-mima' ></span>
              <div><input  type = 'password' onBlur={ this.inputOnBlur.bind(this) }/><span ref='password'  className = "value">请输入您的密码</span></div>
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