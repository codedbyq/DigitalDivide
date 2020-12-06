import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import UserIndex from './user_index';

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.entities.users
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: users => dispatch(fetchAllUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);