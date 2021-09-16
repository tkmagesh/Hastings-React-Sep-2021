import BugItem from './bug-item';

const BugList = ({bugs, remove, toggle, removeClosed}) => {
    const bugItems = bugs.map(bug => (
        <BugItem key={bug.id} {...{ bug, remove, toggle }} />
    ));
    return (
            <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed()} />
        </section>
    )
}
export default BugList;