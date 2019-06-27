import React from 'react';
import '@/style/service.scss';
import Header from '@/components/Header'
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      msgList:[]
    }
  }
  render () {
    return (
      <div className = "box">
        <Header className = { "service-header" } title = { "客服服务" } {...this.props}/>
        <div className = "content">
          <div className = "service-userMsg-userMsg">
            <h5>{ `Hi！${ 'O小鱼' }` }</h5>
            <p>中午好，您是VIP会员用户，已为您自动转接专属客服。</p>
            <span className = "user-ico"></span>
          </div>
          <div className = "service-cont">
            <div>
              <p className = "service-date">2019年6月20日17：30</p>
              <ul>
                  <li>
                    <span classNamr = "robet"></span>
                    <p>Hi,Ossicone,我是您的专属理财助理。 很开心为您提供第一次理财服务。</p>
                    <p>我可以分析您的理财状况，帮助您选择 适合您的理财方式！</p>
                  </li>
              </ul>
            </div>
          </div>
          <div className = "service-footer">
            <span className = "Voice"></span>
            <input type="text"/>
            <span>发送</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;