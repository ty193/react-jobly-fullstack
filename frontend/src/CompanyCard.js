import React from "react";
import { Link } from "react-router-dom";
import defaultLogo from "./default-logo.png";

function CompanyCard({ item = {} }) {
  const { name, description, logo_url, handle } = item;
  return (
    <Link className="Card card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img src={logo_url || defaultLogo} alt={`${name} Logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
