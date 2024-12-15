import React from 'react';
import locations from '../location.json'; // Importez vos données JSON

const Appartement = () => {
  return (
    <div>
      <h1>Liste des Appartements</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {locations.map((location) => (
          <AppartementCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

const AppartementCard = ({ location }) => {
  const { id, title, cover, description, location: loc, rating, host } = location;

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", width: "300px" }}>
      <img 
        src={cover} 
        alt={title} 
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />
      <h2>{title}</h2>
      <p><strong>Localisation :</strong> {loc}</p>
      <p><strong>Description :</strong> {description}</p>
      <p><strong>Note :</strong> {rating} ⭐</p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <img 
          src={host.picture} 
          alt={host.name} 
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <span>{host.name}</span>
      </div>
    </div>
  );
};

export default Appartement;