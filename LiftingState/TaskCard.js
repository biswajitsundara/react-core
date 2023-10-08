import "./Style.css";

const TaskCard = (props) => {
  const { name, desc, category } = props.taskData;
  const { completeStatus, onComplete } = props;
  return (
    <div className="task-card">
      <h3>{name}</h3>
      <p className="chip">{completeStatus}</p>
      <p>{desc}</p>
      <p>{category}</p>

      <button
        disabled={completeStatus === "Complete"}
        onClick={() => onComplete()}
      >
        Complete
      </button>
    </div>
  );
};

export default TaskCard;
