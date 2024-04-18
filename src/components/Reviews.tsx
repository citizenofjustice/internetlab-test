import person from "../assets/images/person.png";
import cargoTruck from "../assets/images/cargoTruck.png";
import driver from "../assets/images/driver.png";
import woman from "../assets/images/woman.png";
import manGlasses from "../assets/images/manGlasses.png";
import Slider from "./Slider";

export interface Review {
  avatar: string;
  name: string;
  city: string;
  reviewContent: string;
}

const reviewItems: Review[] = [
  {
    avatar: person,
    name: "Константинов Михаил Павлович",
    city: "Санкт-Петербург",
    reviewContent: `Каждый из нас понимает очевидную вещь: перспективное планирование
  предоставляет широкие возможности для анализа существующих паттернов
  поведения. В своём стремлении улучшить пользовательский опыт мы`,
  },
  {
    avatar: driver,
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    reviewContent:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    avatar: cargoTruck,
    name: "Артем Корнилов",
    city: "Самара",
    reviewContent:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
  },
  {
    avatar: woman,
    name: "Юлия Семенова",
    city: "Кисловодск",
    reviewContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas neque, repellat, maiores, ab alias enim velit reiciendis possimus quam dolorum expedita. Laudantium ea quod ipsam soluta? Vel, doloribus odit.",
  },
  {
    avatar: manGlasses,
    name: "Константин Романов",
    city: "Москва",
    reviewContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas neque, repellat, maiores, ab alias enim velit reiciendis possimus quam dolorum expedita. Laudantium ea quod ipsam soluta? Vel, doloribus odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas neque, repellat, maiores, ab alias enim velit reiciendis possimus quam dolorum expedita. Laudantium ea quod ipsam soluta? Vel, doloribus odit.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="review_header">Отзывы</h2>
      <Slider slides={reviewItems} />
    </section>
  );
};

export default Reviews;
