import hero from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_image_wrapper">
          <img className="hero_image" src={hero} alt="фоновая картинка" />
          <div className="over" />
        </div>
        <div className="hero_text_wrapper">
          <div className="hero_text">
            <h1>Говорят, никогда не поздно сменить профессию</h1>
            <p>Сделай круто тестовое задание и у тебя получится</p>
          </div>
          <button className="button">Проще простого!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
