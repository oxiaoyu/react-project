import React from 'react';
import '@/style/licai.scss';
import Tuijian from '@/components/licai/tuijian.jsx';
import Wenjian from '@/components/licai/wenjian.jsx';
class Com extends React.Component {
  render () {
    return (
      <div className = "box">
        <header className = "header ">
          <div className = "margin">
          <span className = "iconfont icon-zuojiantou"></span>
            理财
          </div>
        </header>
        <div className = "content">
          <img src = ""/>
          <div className = "moneykind margin">
            <ul>
              <li>
                <span></span>
                <p>基金</p>
              </li>
              <li>
                <span></span>
                <p>债券</p>
              </li>
              <li>
                <span></span>
                <p>保险</p>
              </li>
              <li>
                <span></span>
                <p>借贷</p>
              </li>
              <li className = "last">
                <span></span>
                <p>产品咨询</p>
              </li>
            </ul>
          </div>

          <Tuijian />

          <Wenjian />
        </div>
      </div>
    )
  }
}

export default Com;