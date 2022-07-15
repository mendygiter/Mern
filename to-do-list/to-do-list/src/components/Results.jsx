const Results = props => {
    return(
    <div>
            <h1>Results</h1>
             {props.myTasks.map((t, i) =>
                <div key = {i}>
                    <input type="checkbox" name="IsCompleted" checked={t.IsCompleted} onChange={() => props.HandleCheck (i)} />
                    <p>{t.Task}</p>


                    <button onClick={ () => props.DeleteTask(i)}>Delete</button>
                </div>


            )}

        </div>
    )
}

export default Results;

// write a funtion pass the index recreate the list without item included