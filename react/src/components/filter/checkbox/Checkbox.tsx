const Checkbox:React.FC = (props) => {
    return (
        <>
            <input 
                type="checkbox"
                name={props.name}
                checked={props.isChecked}
                onChange={() => props.handleChange(props.id)}
                id={props.name}
                key={props.id}
            />
            <label htmlFor={props.name} className="checkbox">
                {props.name}
            </label>
        </>
    )
}

export default Checkbox;