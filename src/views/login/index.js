import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  isLogin: state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  changeIsLogin () {
    dispatch({
      type: 'changeIsLogin',
      data: 'ok'
    })
  }
})

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;