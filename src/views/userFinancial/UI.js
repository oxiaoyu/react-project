import React from 'react';
import Header from '@/components/Header';
import "@/style/userFinancial.scss";

const userFlist = [
  {
    title: "我的基金",
    child: [
      {
        h5: "国富估值混合",
        span1: "+1.45%"
      },
      {
        h5: "鹏华中国50混合",
        span1: "+1.18%%"
      },
      {
        h5: "华安宏利混合 ",
        span1: "+1.15%"
      }
    ]
  },
  {
    title: "我的债券",
    child: [
      {
        h5: "大成债券C",
        span1: "+3.23%"
      },
      {
        h5: "泰康丰盈债券",
        span1: "+3.98%"
      }
    ]
  },
  {
    title: "国寿福终身寿险",
    child: [
      {
        h5: "国寿福终身寿险",
        span1: "6584.47元",
        span2: "下次缴费日期：2019/6/30",
      },
      {
        h5: "国寿如意随行两全保险",
        span1: "1756元",
        span2: "下次缴费日期：2020/2/170",
      }
    ]
  }
]


class Com extends React.Component {
  render () {
    return (
      <div className = "box">
        <Header className = { 'userF-header' } title = { "理财管理" } {...this.props}/>
        <div className = "content userF-content">
          <div>
            <div className = "userF-msg">
              <div className = "msg-left">
                <h5>{`Hi! ${'O小鱼'}`}</h5>
                <p><span></span></p>
              </div>
              <div className = "msg-right">
                <i className = "msg-ico" onClick = { () => { this.props.history.push('/users/service') } }></i>
              </div>
            </div>
            <div className = "assets">
              <div>
                <p className = "assets-title">
                  <span>总资产</span>
                  <span>昨日收益</span>
                </p>
                <p className = "assets-num">
                  <span className = "sum">¥16837.36</span>
                  <span className = "num">¥843.58</span>
                </p>
              </div>
            </div>
            <div className = "userFlist">
              {
                userFlist.map((item, index) => (
                  <div key = {index}>
                    <span className = "li-title">{ item.title }</span>
                    <ul>
                      {
                        item.child.map((itm, idx) => (
                          <li key = { idx }>
                              <h5>{ itm.h5 }</h5>
                              <span>{ itm.span1 }</span>
                              { itm.span2 ? <span>{ itm.span2 }</span> : '' }
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;