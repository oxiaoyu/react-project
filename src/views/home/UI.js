import React from 'react';

class Com extends React.Component {
  render() {
    return (
      <div className="box">
        <header className="header">
          <img src = { '@/assets/images/back.png' } alt = ''/>
        </header>
        <div className="content">
          首页内容
        </div>
      </div>
    )
  }
}

export default Com;