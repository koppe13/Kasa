function Banner({ img, texte }) {
  return (
    <div className="kasa-banner-placement">
      <img className="kasa-banner" alt="" src={img}></img>
      <h1 className="kasa-banner-text">{texte}</h1>
    </div>
  );
}

export default Banner;
