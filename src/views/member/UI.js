import React from 'react';
import '@/style/member.scss';
import ad1 from '@/assets/ad1.png';
import ad2 from '@/assets/ad2.png';

const memberList = [
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  }
]

class Com extends React.Component {

  goBack () {

  }
  render () {
    return (
      <div className = "box">
        <header className = "member-header">
          <span className = "iconfont icon-fanhui" onClick = { this.goBack.bind(this) } ></span>
          <span className = "title">会员尊享</span>
          <span className = "right"></span>
        </header>
        <div className = "content">
          <div>
            <div className = 'userCard-bg'>
              <div className = "card-box">
                <div className = "vip"></div>
                <div className = "userCard">
                 <span> { `中午好，尊敬的${ 'O小鱼' }` }</span>
                </div>
              </div>
            </div>
            <ul className = "navs">
              {
                memberList.map((item, index) => (
                  <li key = { index }>
                    <span className = "pic ico"></span>
                    <p className = "nav">{ item.nav }</p>
                    <p className = "txt">{ item.txt }</p>
                  </li>
                ))
              }
            </ul>
            <div className = "AD">
              <img className = "ad1" src = { ad1 } />
              <img className = "ad2" src = { ad2 } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;