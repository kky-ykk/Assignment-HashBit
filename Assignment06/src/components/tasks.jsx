

export default function Task({taskObj,remove}) {
    
    return (
        <>

            <div className="taskCon" >
                <div className="task" >
                    {taskObj.task}
                </div>
                <button className="delete" onClick={()=>remove(taskObj.id)}>Delete</button>
            </div>
        
        </>
    )

}