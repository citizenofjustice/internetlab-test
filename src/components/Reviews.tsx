import person from "../assets/images/person.png";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="review_header">Отзывы</h2>
      <div className="review">
        <div className="review_author">
          <img className="author_image" src={person} alt="автор отзыва" />
          <div>
            <p className="author_name">Константинов Михаил Павлович</p>
            <p className="author_city">Санкт-Петербург</p>
          </div>
        </div>
        <p className="review_content">
          Каждый из нас понимает очевидную вещь: перспективное планирование
          предоставляет широкие возможности для анализа существующих паттернов
          поведения. В своём стремлении улучшить пользовательский опыт мы
        </p>
      </div>
      <div className="slider_controls">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </section>
  );
};

export default Reviews;
