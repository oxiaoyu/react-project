import React, { Component } from 'react';
import '@/style/home/home.scss';

class Com extends Component {
  render() {
    return (
      <div className='headerBox'>
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3258467120,1703592902&fm=26&gp=0.jpg" alt="" />
        <p>为您推荐</p>
      </div>
    )
  }
}

// @import '@/lib/reset.scss';
// .header {
//   @include rect(100%, .42rem);
//   .headerBox {
//     background-color: #0f0;
//     img {
//       @include rect(.24rem, .24rem);
//     }
//     p {

//     }
//   }
// }

export default Com;
