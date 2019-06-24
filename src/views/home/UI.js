import React from 'react';
import '@/style/home/home.scss';

class Com extends React.Component {
  render() {
    return (
      <div className="box">
        <header className="header">
          <div className="header-box">
            <div className='search'>
              <img src={require('@/assets/images/search.png')} alt="" />
              <input type='text' disabled />
            </div>
            <img src={require('@/assets/images/sach.png')} alt='' className='sach' />
          </div>
        </header>
        <div className="content">
          <div className='welcome'>
            <img src={require('@/assets/images/welcome.png')} alt="" />
          </div>
          <ul className='nav'>
            <li>
              <img src={require('@/assets/images/nav1.png')} alt="" />
              <p>为您推荐</p>
            </li>
            <li>
              <img src={require('@/assets/images/nav2.png')} alt="" />
              <p>私人定制</p>
            </li>
            <li>
              <img src={require('@/assets/images/nav3.png')} alt="" />
              <p>理财资讯</p>
            </li>
          </ul>
          <div className='main member'>
            <div className='main-t'>
              <div className='main-t-l'>
                <h3>会员尊享</h3>
                <p>加入会员 尊享权益</p>
              </div>
              <div className='main-t-r'>
                <img src={require('@/assets/images/back.png')} alt='' />
              </div>
            </div>
            <div className='main-b'>
              <img src={require('@/assets/images/member.png')} alt='' />
            </div>
          </div>
          <div className='main recommend'>
            <div className='main-t'>
              <div className='main-t-l'>
                <h3>定投推荐</h3>
                <p>理财产品 信息一览</p>
              </div>
              <div className='main-t-r'>
                <img src={require('@/assets/images/back.png')} alt='' />
              </div>
            </div>
            <div className='main-b recommend-banner'>
              <ul>
                <li>
                  <div className="recommend-news">
                    <span>5.27%</span>
                    <span>平安金通368</span>
                    <span>368天 1000起购</span>
                  </div>
                  <div className="recommend-btn">
                    <span>去看看</span>
                  </div>
                </li>
                <li>
                  <div className="recommend-news">
                    <span>5.27%</span>
                    <span>平安金通368</span>
                    <span>368天 1000起购</span>
                  </div>
                  <div className="recommend-btn">
                    <span>去看看</span>
                  </div>
                </li>
                <li>
                  <div className="recommend-news">
                    <span>5.27%</span>
                    <span>平安金通368</span>
                    <span>368天 1000起购</span>
                  </div>
                  <div className="recommend-btn">
                    <span>去看看</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='main activity'>
            <div className='main-t'>
              <div className='main-t-l'>
                <h3>精彩活动</h3>
                <p>信息活动 精彩纷呈</p>
              </div>
              <div className='main-t-r'>
                <img src={require('@/assets/images/back.png')} alt='' />
              </div>
            </div>
            <div className='main-b'>
              <img src={require('@/assets/images/activity.png')} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;
