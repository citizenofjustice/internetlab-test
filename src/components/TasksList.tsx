import pointer from "../assets/images/pointer.svg";
import truck from "../assets/images/truck.svg";
import stock from "../assets/images/stock.svg";
import bag from "../assets/images/bag.svg";

interface Task {
  icon: string;
  iconAlt: string;
  title: string;
  textContent: string;
}

const tasks: Task[] = [
  {
    icon: pointer,
    iconAlt: "",
    title: "Прочитай задание внимательно",
    textContent: "Думаю у тебя не займет это больше двух-трех минут",
  },
  {
    icon: truck,
    iconAlt: "",
    title: "Изучи весь макет заранее",
    textContent:
      "Подумай как это будет работать на разных разрешениях и при скролле",
  },
  {
    icon: stock,
    iconAlt: "",
    title: "Сделай хорошо",
    textContent: "Чтобы мы могли тебе доверить подобные задачи в будущем",
  },
  {
    icon: bag,
    iconAlt: "",
    title: "Получи предложение",
    textContent:
      "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
  },
];

const TasksList = () => {
  return (
    <section className="tasks">
      <h2 className="tasks_header">Как это работает</h2>
      <ul className="tasks_list">
        {tasks.map((task, index) => (
          <li className="task_item" key={index}>
            <img className="task_icon" src={task.icon} alt={task.iconAlt} />
            <div className="task_text_wrapper">
              <p className="task_title">{task.title}</p>
              <p className="task_text">{task.textContent}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TasksList;
