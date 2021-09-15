import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/bug-stats';
import BugSort from './components/bug-sort';
import BugEdit from './components/bug-edit';
import BugList from './components/bug-list';
import bugActionCreators from './actions';

const BugTracker = ({bugs, addNew, toggle, remove, removeClosed}) => {
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