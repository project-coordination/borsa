import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";

const Offer = () => {
  const [Offer, setOffer] = useState({
    titel:"", 
    name:"", 
    email:"", 
    no:"", 
    startcity:"",
    endcity:"", 
    starttime:"", 
    endtime:"",
    freestorage:"",
    resourceType:"",
    vehicleType:"",
    rout:"",
    cost:"", 
    status:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadOffer();
  }, []);
  const loadOffer = async () => {
    const res = await axios.get(`/offers/${id}`);
    setOffer(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/OfferHome">
        back to Home
      </Link>
      <h1 className="display-4"> Offer titel: {Offer.titel}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">name: {Offer.name}</li>
        <li className="list-group-item">email: {Offer.email}</li>
        <li className="list-group-item">phone: {Offer.no}</li>
        <li className="list-group-item">from city: {Offer.startcity}</li>
        <li className="list-group-item">to city: {Offer.endcity}</li>
        <li className="list-group-item">from time: {Offer.starttime}</li>
        <li className="list-group-item">to time: {Offer.endtime}</li>
        <li className="list-group-item">can have: {Offer.freestorage}</li>
        <li className="list-group-item">resource Type: {Offer.resourceType}</li>
        <li className="list-group-item">vehicle Type: {Offer.vehicleType}</li>
        <li className="list-group-item">Route For Vehicle: {Offer.rout}</li>
        <li className="list-group-item">Cost: {Offer.cost}</li>
        <li className="list-group-item">Status: {Offer.status}</li>
      </ul>
    </div>
  );
};

export default Offer;
