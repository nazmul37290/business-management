
import { useContext} from 'react';
import { Navigate,  } from 'react-router-dom';
import { UserContext } from '../provider/Context';
import PropTypes from 'prop-types';

const CheckUser = ({children}) => {
    const {user} = useContext(UserContext);
    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" replace />
    }
  
};

export default CheckUser;

CheckUser.propTypes={
    children:PropTypes.any
}