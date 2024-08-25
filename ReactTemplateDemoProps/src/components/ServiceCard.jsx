export default function ServiceCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
    <div className="box ">
      <div className="img-box">
        <img src={props.image} alt=""/>
      </div>
      <div className="detail-box">
        <h4>
         {props.title}
        </h4>
        <p>
          {props.description }
        </p>
        <a href="">
          Read More
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>

        </a>
      </div>
    </div>
  </div>
  );
}