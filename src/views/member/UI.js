import React from 'react';
import '@/style/member.scss';
import ad1 from '@/assets/member/ad1.png';
import ad2 from '@/assets/member/ad2.png';
import Header from '@/components/Header';

const memberList = [
  {
    nav: '双倍',
    txt: '登录领双倍积分'
  },
  {
    nav: '顾问',
    txt: '专业理财顾问'
  },
  {
    nav: '24 h',
    txt: '24小时专属客服'
  },
  {
    nav: '兑换',
    txt: '专属积分兑换'
  },
  {
    nav: '预约',
    txt: '预约理财产品'
  },
  {
    nav: '免费',
    txt: '提现免手续费'
  }
]

class Com extends React.Component {

  render () {
    return (
      <div className = "box">
        <Header className = { "member-header" } title = { "会员尊享" }  {...this.props}/>
        <div className = "content">
          <div>
            <div className = 'userCard-bg'>
              <div className = "card-box">
                <div className = "vip ico"></div>
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
              <div>
               <h6>高收益理财</h6>
               <p>为您量身打造的理财项目</p>
                <img className = "ad1" src = { ad1 } />
              </div>
              <div>
                <h6>安全无风险</h6>
                <p>为您贴心保障资金安全</p>
                <img className = "ad2" src = { ad2 } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;