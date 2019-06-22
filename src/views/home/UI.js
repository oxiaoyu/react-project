import React from 'react';
import '@/style/home/home.scss';

class Com extends React.Component {
  render() {
    return (
      <div className="box">
        <header className="header">
          <div className = "header-box">
            <div className = 'search'>
              <img src = { require('@/assets/images/search.png')} alt = ""/>
              <input type = 'text'/>
            </div>
            <img src={require('@/assets/images/sach.png')} alt='' className = 'sach'/>
          </div>
        </header>
        <div className="content">
          <div className = 'welcome'>
            <img src = { require('@/assets/images/welcome.png') }/>
          </div>
          <ul className = 'nav'>
            <li>
              <img src = { require('@/assets/images/nav1.png') }/>
              <p>为您推荐</p>
            </li>
            <li>
              <img src = { require('@/assets/images/nav2.png') }/>
              <p>私人定制</p>
            </li>
            <li>
              <img src = { require('@/assets/images/nav3.png') }/>
              <p>理财资讯</p>
            </li>
          </ul>
          <div className = 'member'>
            <div className = ''>
              <div>
                <h3>会员尊享</h3>
                <p>加入会员  尊享权益</p>
              </div>
              <img src={require('@/assets/images/back.png')} alt='' />
            </div>
            <div>
              <img src={require('@/assets/images/member.png')} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;