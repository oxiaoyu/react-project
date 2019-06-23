import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  isLogin: state.login.isLogin
})

const Com = connect(mapStateToProps)(UI);

export default Com;