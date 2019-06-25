import React from 'react';
import '@/style/setting.scss';

const  liData = [{
  class: 'anquan',
  ico:'icon-anquan',
  h6: '安全设置',
},
{
  class: 'tongyong',
  ico:'icon-liebiao',
  h6: '通用',
},
{
  class: 'yinshi',
  ico:'icon-close-eye',
  h6: '隐私',
},
{
  class: 'guanyu',
  ico:'icon-guanyu',
  h6: '关于',
},
{
  class: 'fankui',
  ico:'icon-fankui',
  h6: '反馈',
},
{
  class: 'exet',
  ico:'icon-tuichu',
  h6: '退出登录',
}]

class Com extends React.Component {

  setMenuClick (e) {
    if (e.target.className === 'exet') {
      this.props.history.push('/user');
      this.props.changeIsLogin();
    }
  }

  goBack () {
    this.props.history.go(-1);
  }
  render () {
    return (
      <div className = "box">
         <header className = "header setting-header">
          <span className = "iconfont icon-fanhui"  onClick = {this.goBack.bind(this) }></span>
          <i>我的</i>
        </header>
        <div className = "content">
        <div className = "userMenu setMenu">
              <ul onClick = { this.setMenuClick.bind(this)}>
                {
                  liData.map((item, index) => (
                    <li key = { index }  > 
                      <span className ={`iconfont ${item.ico}`} ></span>
                      <div>
                        <h6 className = { item.class }>{ item.h6 }</h6>
                      </div>
                      <span className = 'iconfont icon-qianjin'></span>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Com;