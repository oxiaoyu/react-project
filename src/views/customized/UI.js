import React from 'react';
import '@/style/home/customized.scss';
import CommonJs from '@/assets/js/common';
import activity from '@/assets/images/activity.png';

class Com extends React.Component {
  render() {
    return (
      <div className="box-cust">
        <header className="header-cust">
          <div className='back' onClick={CommonJs.goBack.bind(this)}>
            <img src={require('@/assets/images/back.png')} alt='' />
          </div>
          <h3>私人定制</h3>
        </header>
        <div className="content">
          <div className='main'>
            <div className='main-t'>
              <div className='main-t-t'>
                <h3>私人定制</h3>
                <select>
                  <option>按热门排序</option>
                  <option>按最新排序</option>
                </select>
              </div>
              <div className='main-t-b'>
                <p>根据你的需求，推荐最合适您的产品及服务</p>
              </div>
            </div>
          </div>
          <div className='nav' style = {{
            background: 'url(' + activity + ') center center / cover no-repeat'
          }}>
            <h3>选基金</h3>
            <p>震荡不愁，我帮你分忧</p>
            <span>40065人定制过</span>
          </div>
          <div className='nav' style = {{
            background: 'url(' + activity + ') center center / cover no-repeat'
          }}>
            <h3>选基金</h3>
            <p>震荡不愁，我帮你分忧</p>
            <span>40065人定制过</span>
          </div>
          <div className='nav' style = {{
            background: 'url(' + activity + ') center center / cover no-repeat'
          }}>
            <h3>选基金</h3>
            <p>震荡不愁，我帮你分忧</p>
            <span>40065人定制过</span>
          </div>
          <div className='nav' style = {{
            background: 'url(' + activity + ') center center / cover no-repeat'
          }}>
            <h3>选基金</h3>
            <p>震荡不愁，我帮你分忧</p>
            <span>40065人定制过</span>
          </div>
          <div className='nav' style = {{
            background: 'url(' + activity + ') center center / cover no-repeat'
          }}>
            <h3>选基金</h3>
            <p>震荡不愁，我帮你分忧</p>
            <span>40065人定制过</span>
          </div>
         </div>
      </div>
    )
  }
}

export default Com;
