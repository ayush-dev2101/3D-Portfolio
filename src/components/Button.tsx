import arrow from "../assets/images/arrow-down.svg";

type ButtonProps = {
  className?: string;
  id?: string;
  text?: string;
};

const Button = ({ text, className, id }: ButtonProps) => {
  return (
    // Made Dynamic
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY-offset;

          window.scrollTo({top, behavior: 'smooth'})
        }
      }}
      className={`cta-wrapper ${className ?? ""}`}
    >
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
