import React from "react";

const Com = () => (
  <div className = "login">
    <div className = "userImg">
      <img src={require('@/assets/钻石.png')} alt = "砖石"/>
    </div>
    <div className = "userMsg">
      <div className = "username">
        {`中午好，尊敬的${'O小鱼'}`}
      </div>
      <p>今日登陆积分：<span>+(10×2) <i className = "iconfont icon-jifen"></i> </span>(会员专享2倍)</p>
    </div>
    <span className = "iconfont icon-set"></span>
  </div>
)

export default Com;