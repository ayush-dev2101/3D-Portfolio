import arrow from "../assets/images/arrow-down.svg";

type ButtonProps = {
  className?: string;
  id?: string;
  text?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    // Made Dynamic
    <a href="#work" className={`cta-wrapper ${className ?? ""}`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
