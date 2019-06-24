import React from 'react';
import '@/style/home/customized.scss';
import CommonJs from '@/assets/js/common';

class Com extends React.Component {
  render () {
    return (
      <div className = "box-cust">
        <header className = "header-cust">
          <div className = 'back' onClick = { CommonJs.goBack.bind(this) }>
            <img src = { require('@/assets/images/back.png') } alt = ''/>
          </div>
          <h3>私人定制</h3>
        </header>
        <div className = "content">
          <div className='main'>
              <div className='main-t'>
                <div className='main-t-l'>
                  <h3>私人定制</h3>
                  <p>根据你的需求，推荐最合适您的产品及服务</p>
                </div>
                <div className='main-t-r'>
                  <img src={require('@/assets/images/go.png')} alt='' />
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
