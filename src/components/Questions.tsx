import Accordion from "./Accordion";

interface QuestionAnswer {
  question: string;
  answer: string;
}

const questionsData: QuestionAnswer[] = [
  {
    question:
      "Подтверждено: сознание наших соотечественников не замутнено пропагандой?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
  {
    question: "Прототип нового сервиса - это как трубный призыв?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
  {
    question: "Частокол на границе продолжает удивлять?",
    answer:
      "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
  },
  {
    question: "Очевидцы сообщают, что слышали грохот грома градущих изменений?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
  {
    question:
      "И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
  {
    question:
      "Нынче никто не может себе позволить инициировать треск разлетающихся скреп?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
  {
    question: "Высококачественный прототип будущего проекта обнадёживает?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia commodi, libero praesentium maiores velit quas at dolorem eaque voluptates explicabo quos officia ullam ipsa inventore quisquam, asperiores ex? Aliquid, nobis?",
  },
];

const Questions = () => {
  return (
    <section id="questions" className="questions">
      <h2 className="questions_header">Вопросы и ответы</h2>
      {questionsData.map((questionData, index) => (
        <Accordion
          key={index}
          title={questionData.question}
          content={questionData.answer}
        />
      ))}
    </section>
  );
};

export default Questions;
