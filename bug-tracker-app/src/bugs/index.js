import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux'

import BugStats from './components/bug-stats';
import BugSort from './components/bug-sort';
import BugEdit from './components/bug-edit';
import BugList from './components/bug-list';
import bugActionCreators from './actions';

//Using hooks
/* 
const BugTracker = () => {
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, remove, toggle, removeClosed} = bugActionDispatchers;
    const bugs = useSelector(appState => appState.bugsState);
    return (
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs}/>
            <BugSort/>
            <BugEdit addNew={addNew}/>
            <BugList {...{bugs, remove, toggle, removeClosed}}/>
        </>
    )
};

export default BugTracker; 
*/

/* **************************************************************** */
const BugTracker = ({bugs, addNew, remove, toggle, removeClosed}) => {
    return (
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs}/>
            <BugSort/>
            <BugEdit addNew={addNew}/>
            <BugList {...{bugs, remove, toggle, removeClosed}}/>
        </>
    )
};
function mapStateToProps(appState){
     const bugs = appState.bugsState;
     return { bugs : bugs}
}

function mapDispatchToProps(dispatch) {
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps) (BugTracker) ;

/* **************************************************************** */