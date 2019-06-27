import React from 'react';
import NoLogin from '@/components/user/NoLogin';
import Login from '@/components/user/Login';
import '@/style/user.scss';

const  liData = [{
  class: 'Member',
  ico:'icon-zuanshi',
  h6: '成为会员',
  p: '尊享会员积分权益',
},
{
  class: '',
  ico:'icon-licaipressed',
  h6: '理财管理',
  p: '专属你的小金库',
},
{
  class: '',
  ico:'icon-wallet',
  h6: '我的卡包',
  p: '卡片管理切换自如',
},
{
  class: '',
  ico:'icon-caifuzhangdan',
  h6: '我的账单',
  p: '账单流水一目了然',
},
{
  class: '',
  ico:'icon-kefu',
  h6: '客服服务',
  p: '全方位为您服务',
}] 

class Com extends React.Component {

  toLigin(e) {
    if(e.target.className === 'toLogin'){
      this.props.history.push('/users/login');
    } else if (e.target.className === 'iconfont icon-set') {
      this.props.history.push('/users/setting');
    } 
  }

  meunEve (index) {
    if ( this.props.isLogin !== 'ok' ) {
      this.props.history.push('/users/login');
    } else {
      if ( index === 0 ) {
        this.props.history.push('/users/member');
      } else if (index === 1 ) {
        this.props.history.push('/users/userFinancial');
      }
    } 
  }
  
  render () {
    return (
      <div className = "box">
        <div className = "content">
          <div onClick = { this.toLigin.bind(this)} className = 'user'>
           { this.props.isLogin === 'ok' ? <Login/> : <NoLogin/>}  
            <div className = "userMenu">
              <ul>
                {
                  liData.map((item, index) => (
                    <li key = { index } className = { item.class } onClick = { this.meunEve.bind(this,index) }> 
                      <span className ={`iconfont ${item.ico}`} ></span>
                      <div>
                        <h6 >{ item.h6 }</h6>
                        <p>{ item.p }</p>
                      </div>
                      <span className = 'iconfont icon-qianjin'></span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          </div>
         
      </div>
    )
  }
}

export default Com;