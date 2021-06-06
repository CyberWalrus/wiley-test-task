import './style.css';

const TaskForm = ({
  task,
  onChange,
  onSubmit,
  onCancel
}) => {
    if (!task) {
        return null
    }

    return (
        <form className="task-form">
            <div className="task-form__item">
                {task.id || 'New'}
            </div>
            <div className="task-form__item">
                <input
                    type="text"
                    value={task.title}
                    onChange={(event) => onChange('title', event.target.value)}
                />
            </div>
            <div className="task-form__item">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onClick={() => onChange('isCompleted', !task.isCompleted)}
                />
            </div>
            <div className="task-form__item">
                <button type="button" onClick={() => onSubmit(task)}>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}


export default TaskForm;