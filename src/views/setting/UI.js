import React from 'react';
import '@/style/setting.scss';

const  liData = [{
  ico:'icon-anquan',
  h6: '安全设置',
},
{
  ico:'icon-liebiao',
  h6: '通用',
},
{
  ico:'icon-close-eye',
  h6: '隐私',
},
{
  ico:'icon-guanyu',
  h6: '关于',
},
{
  ico:'icon-fankui',
  h6: '反馈',
},
{
  ico:'icon-tuichu',
  h6: '退出登录',
}]

class Com extends React.Component {
  render () {
    return (
      <div className = "box">
         <header className = "header setting-header">
          <span className = "iconfont icon-fanhui" ></span>
          <i>我的</i>
        </header>
        <div className = "content">
        <div className = "userMenu setMenu">
              <ul>
                {
                  liData.map((item, index) => (
                    <li key = { index }> 
                      <span className ={`iconfont ${item.ico}`} ></span>
                      <div>
                        <h6>{ item.h6 }</h6>
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