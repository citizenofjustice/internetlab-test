import plus from "../assets/images/plusRounded.svg";
import { useRef, useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="accordion">
        <div
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className="accordion_collapsed"
        >
          <p className="accordion_title">{title}</p>
          <img
            src={plus}
            className={`accordion_toggle ${isOpen ? "turned" : ""}`}
            alt={isOpen ? "закрыть" : "открыть"}
          />
        </div>
        <div
          className={`accordion_content ${isOpen ? "opened" : ""}`}
          ref={contentHeight}
          style={{
            height: isOpen ? contentHeight.current?.scrollHeight : 0,
          }}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default Accordion;
