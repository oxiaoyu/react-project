import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
    changeIsLogin () {
      dispatch({
        type: 'changeIsLogin',
        data: ''
      })
    }
})

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;