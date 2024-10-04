import { useState } from "react";
import Task from "./tasks";


export default function Home() {

    const [tasks, setTask] = useState([]);
    const [inputTask, setInputTask] = useState();

    function add() {
        setTask((prev)=>[...prev,{id:crypto.randomUUID(),task:inputTask}]);
        // console.log("tasks:",tasks);
    }

    function remove(id) {
        console.log("id::",id);
        const newTask=tasks.filter(ele=>ele.id!=id);
        setTask(newTask);
    }


    return (
        <>

            <h1>TO-DO LIST</h1>

            <div className="container">
                <input type="text" id="inputText" onChange={(e) => setInputTask(e.target.value)} />
                <button className="add" onClick={e => add()} >ADD</button>
            </div>

            <div className="tasks" key={1} >
                {

                    tasks.map((singleTask) =>
                        <Task taskObj={singleTask} remove={remove} key={singleTask.id}/>
                    )
                }
            </div>

        </>
    )

}