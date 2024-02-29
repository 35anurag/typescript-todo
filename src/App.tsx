import { ChangeEvent, FC, useState } from "react";
import "./App.css";

type Todo = {
  text: string;
  deadline: number;
};

const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [taskArray, setTaskArray] = useState<Todo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "text") {
      setText(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { text: text, deadline: deadline };
    setTaskArray([...taskArray, newTask]);
    setText("");
    setDeadline(0);
  };
  return (
    <>
      <div className="App">
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Your Text"
        />
        <input
          type="number"
          name="deadline"
          value={deadline}
          onChange={handleChange}
          placeholder="Deadline (in days)..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {taskArray.map((list, index) => (
          <div key={index}>
            <li>Task: {list.text} Deadline: {list.deadline}</li>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
