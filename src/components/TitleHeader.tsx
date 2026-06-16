interface TitleHeaderProps {
  title: string;
  sub: string;
}

const TitleHeader = ({ title, sub }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge mt-7">
        <h4>{sub}</h4>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
