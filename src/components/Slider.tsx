import { useRef, useState } from "react";
import { Review } from "./Reviews";
import SliderIndicator from "./SliderIndicator";

interface SliderProps {
  slides: Review[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50;

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

  return (
    <>
      <div className="slider">
        <button
          onClick={prevSlide}
          className="slider_button slider_button_prev"
        >
          {" "}
          &lt;
        </button>
        <div
          ref={slideRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="review slide"
        >
          <div className="review_author">
            <img
              className="author_image"
              src={slides[currentIndex].avatar}
              alt={`автор отзыва ${currentIndex}`}
            />
            <div>
              <p className="author_name">{slides[currentIndex].name}</p>
              <p className="author_city">{slides[currentIndex].city}</p>
            </div>
          </div>
          <p className="review_content">{slides[currentIndex].reviewContent}</p>
        </div>
        <button
          onClick={nextSlide}
          className="slider_button slider_button_next"
        >
          &gt;
        </button>
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
