import { Link } from "react-router-dom";

const List = () => {};

const Card = () => {
  return (
    <div
      className="card wow fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay="1s"
    >
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="#" className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

const Package = () => {
  return <Card />;
};

const Packages = () => {
  return <Package />;
};

export default Packages;
export { Package };
