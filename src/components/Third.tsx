import third from "../assets/images/third.png";

const Third = () => {
  return (
    <section className="third">
      <img src={third} alt="промо" />
      <div className="third_text_wrapper">
        <h2 className="third_header">Круто, ты дошел до третьего блока</h2>
        <div className="third_description">
          <p>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p>
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Third;
