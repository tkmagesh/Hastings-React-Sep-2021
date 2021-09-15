import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import projectActionCreators from "./actions";

const Projects = ({projects, addNew, remove}) => {
    return (
        <>
            <h3>Projects</h3>
            <ol>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ol>
        </>
    )
}

function mapStateToProps(appState){
    const projects = appState.projectsState;
    return { projects : projects };
}

function mapDispatchToProps(dispatch){
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return projectActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);