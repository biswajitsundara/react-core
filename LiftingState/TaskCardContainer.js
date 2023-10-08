import TaskCard from "./TaskCard";
import "./Style.css";
import { useState, useEffect } from "react";

const TaskCardContainer = () => {
  const taskData = [
    {
      name: "Client Presentation",
      desc: "Make sure to work on the powerpoint",
      category: "Critical",
      status: "Pending",
    },
    {
      name: "Send email to CEO",
      desc: "Make sure to include the deadline",
      category: "Reminder",
      status: "Pending",
    },
  ];

  const [completeCount, setCompleteCount] = useState({
    Card1: "Pending",
    Card2: "Pending",
  });

  const [pendingTasks, setPendingTasks] = useState();

  useEffect(() => {
    const countPendingTasks = () => {
      const completeStatus = Object.values(completeCount);
      const pendingStatus = completeStatus.filter(
        (status) => status === "Pending"
      );
      setPendingTasks(pendingStatus.length);
    };

    countPendingTasks();
  }, [completeCount]);

  const handleComplete = (cardname) => {
    setCompleteCount((prevStatus) => ({
      ...prevStatus,
      [cardname]: "Complete",
    }));
  };

  return (
    <div className="task-container">
      <div className="task-heading">
        <h1>Total Pending Tasks {pendingTasks}</h1>
      </div>

      <div className="card-list">
        <TaskCard
          taskData={taskData[0]}
          completeStatus={completeCount.Card1}
          onComplete={() => handleComplete("Card1")}
        />
        <TaskCard
          taskData={taskData[1]}
          completeStatus={completeCount.Card2}
          onComplete={() => handleComplete("Card2")}
        />
      </div>
    </div>
  );
};

export default TaskCardContainer;
