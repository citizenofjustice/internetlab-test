import { Review } from "./Reviews";

interface SliderIndicatorProps {
  slides: Review[];
  activeIndex: number;
  onClick: (index: number) => void;
}

const SliderIndicator: React.FC<SliderIndicatorProps> = ({
  slides,
  activeIndex,
  onClick,
}) => {
  return (
    <div className="slider_indicators">
      {slides.map((_, index) => (
        <div
          className={`dot ${index === activeIndex ? "active" : ""}`}
          onClick={() => onClick(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default SliderIndicator;
