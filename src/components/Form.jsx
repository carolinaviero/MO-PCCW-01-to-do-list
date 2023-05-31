export const Form = ({ value, setValue, handleClick }) => {
    return (
        <form>
            <label>Add task: </label>
            <input type="text" name="task" id="task" onChange={(event) => setValue(event.target.value)} value={value}/>
            <button type="button" onClick={handleClick}>submit</button>
        </form>
    )
}
