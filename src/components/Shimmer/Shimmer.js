import "./Shimmer.scss";

const Shimmer = () => {
  const renderCards = () => {
    return Array.from({ length: 32 }, (_, index) => (
      <div key={index} className="shimmer">
        <div className="shine box"></div>
        <div className="shine lines"></div>
        <div className="shine lines"></div>
      </div>
    ));
  };

  return <div className="container">{renderCards()}</div>;
};

export default Shimmer;
