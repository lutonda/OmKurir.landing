import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const List = () => { };

const Card = () => {
  return (
    <div
      className="card wow fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay="1s"
      style={{ marginBottom: 15 }}
    >
      <div className="card-header">
        <div className="row">
          <div className="col-md-4"># 90009909</div>
          <div className="col-md-7"></div>
          <div className="col-md-1 text-right">
            <i className="lni lni-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="#" className="btn btn-primary box-blue">
          Go somewhere
        </Link>
        <div className="row">
        <ProgressBar/>
        </div>
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
