import { useSelector, useDispatch } from 'react-redux';

function Notification(){
    const msg = useSelector(state => state.notification);
    const dispatch = useDispatch();
    const onClearClick = () => {
        dispatch({type : 'REMOVE_NOTIFICATION'})
    }
    return(
        <div>
            <div>{msg}</div>
            { msg && <input type="button" value="Clear" onClick={onClearClick} /> }
        </div>

    );
}

export default Notification;
