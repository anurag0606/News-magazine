import image from "../assets/news.jpg";
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", minHeight: "300px" }}
    >
      <img
        src={src ? src : image}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "calc(0.25rem - 1px)",
          borderTopRightRadius: "calc(0.25rem - 1px)",
        }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "This is a news"}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
