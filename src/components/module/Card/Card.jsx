import data from "../../../data/location.json";

function Card() {
  return (
    <div className="kasa-vignette">
      {data.map((location) => (
        <a
          className="kasa-card-typo"
          href={`/logement/${location.id}`}
          key={location.id}
        >
          <article className="kasa-card">
            <img
              className="kasa-image"
              src={location.cover}
              alt={location.title}
            ></img>
            <div className="kasa-card-content">
              <h2 className="kasa-card-text">{location.title}</h2>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default Card;
