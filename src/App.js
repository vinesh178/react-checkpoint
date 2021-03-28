import Checkpoints from "./components/Checkpoints";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [checkpoints, setCheckpoints] = useState([]);


  useEffect(() => {
    const getCheckpoints = async () => {
      const res = await fetch("http://localhost:8080/checkpoints");

      const data = await res.json();

      setCheckpoints(data);
     
    };
    getCheckpoints();
  }, []);

  const onCheckpointDelete = async (id) => {
    const res = await fetch(`http://localhost:8080/checkpoint/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setCheckpoints(checkpoints.filter((checkpoint) => checkpoint.id !== id))
      : alert("Error Deleting This Checkpoint");
  };

  const onTaskDelete = async (checkpointId, taskId) => {
    const res = await fetch(
      `http://localhost:8080/checkpoint/${checkpointId}/${taskId}`,
      {
        method: "DELETE",
      }
    );
    if (res.status === 200) {
      const getCheckpoints = async () => {
        const res = await fetch("http://localhost:8080/checkpoints");

        const data = await res.json();

        setCheckpoints(data);
      };
      getCheckpoints();
    } else {
      alert("Error Deleting This Task");
    }
  };

  const onTaskToggle = async (task) => {
    const updTask = { ...task, completed: !task.completed };

    const res = await fetch(`http://localhost:8080/task`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    if (res.status === 200) {
      const getCheckpoints = async () => {
        const res = await fetch("http://localhost:8080/checkpoints");

        const data = await res.json();

        setCheckpoints(data);
      };
      getCheckpoints();
    } else {
      alert("Error updating This Task");
    }
  };

  return (
    <div>
      <Header></Header>
      <Checkpoints
        checkpoints={checkpoints}
        onCheckpointDelete={onCheckpointDelete}
        onTaskDelete={onTaskDelete}
        onTaskToggle={onTaskToggle}
      />
    </div>
  );
}

export default App;
