const BugItem = ({bug, toggle, remove}) => {
    return (
        <li key={bug.id}>
            <span
                className={"bugname " + (bug.isClosed ? 'closed' : '')}
                onClick={() => toggle(bug)}
            >{bug.name}</span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" onClick={() => remove(bug)} />
        </li>
    )
}

export default BugItem;