import { useRef, useState } from "react";
import { Review } from "./Reviews";
import SliderIndicator from "./SliderIndicator";
import useMediaQuery from "../hooks/useMediaQuery";
import right from "../assets/images/chevronR.svg";

interface SliderProps {
  slides: Review[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50;
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextSlide() : prevSlide();
  };

  let slide = 100;
  if (isTablet) slide = 100 / 2;
  if (isDesktop) slide = 100 / 3;

  const translateValue = currentIndex * -slide;

  return (
    <>
      <div className="slider_wrapper">
        <span onClick={prevSlide} className="slider_button slider_button_prev">
          <img src={right} alt="стрелка влево" />
        </span>
        <div className="slider">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="slides_container"
            style={{ transform: `translateX(${translateValue}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="review" key={index} ref={slideRef}>
                <div className="review_author">
                  <img
                    className="author_image"
                    src={slide.avatar}
                    alt={`автор отзыва ${currentIndex}`}
                  />
                  <div>
                    <p className="author_name">{slide.name}</p>
                    <p className="author_city">{slide.city}</p>
                  </div>
                </div>
                <p className="review_content">{slide.reviewContent}</p>
              </div>
            ))}
          </div>
        </div>
        <span onClick={nextSlide} className="slider_button slider_button_next">
          <img src={right} alt="стрелка вправо" />
        </span>
      </div>
      <SliderIndicator
        slides={slides}
        activeIndex={currentIndex}
        onClick={goToSlide}
      />
    </>
  );
};

export default Slider;
