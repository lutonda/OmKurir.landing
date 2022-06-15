import "./ProgressBar.scss";

const ProgressBar = () => {
    return (
        <div className="progress">
            <div className="circle done">
                <span className="label">1</span>
                <span className="title">0%</span>
            </div>
            <span className="bar bar-half done"></span>
            <span className="bar bar-half"></span>
            <div className="circle">
                <span className="label">2</span>
                <span className="title">25%</span>
            </div>
            <span className="bar"></span>
            <div className="circle">
                <span className="label">3</span>
                <span className="title">50%</span>
            </div>
            <span className="bar"></span>
            <div className="circle">
                <span className="label">4</span>
                <span className="title">75%</span>
            </div>
            <span className="bar"></span>
            <div className="circle">
                <span className="label">5</span>
                <span className="title">100%</span>
            </div>
        </div>
    )
}

export default ProgressBar;