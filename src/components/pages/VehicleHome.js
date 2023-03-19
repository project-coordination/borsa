import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/registerVehicle");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`/registerVehicle/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <NavLink className="btn btn-light" exact to="/UserHome" role="button">Go To User Page</NavLink>
      <NavLink className="btn btn-light" exact to="/OfferHome" role="button">Go To Offer Page</NavLink>
      <NavLink className="btn btn-light" exact to="/vehicle/add" role="button">Add Vehicle Request</NavLink>
      </div>
      <div className="py-4">
        <h1>Vehicle Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Type</th>
              <th scope="col">Route</th>
              <th scope="col">Cost</th>
              <th scope="col">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.no}</td>
                <td>{user.city}</td>
                <td>{user.vehicleType}</td>
                <td>{user.rout}</td>
                <td>{user.cost}</td>
                <td>{user.status}</td>
                <td>
                  <Link className="btn btn-primary " to={`/vehicle/display/${user._id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary "
                    to={`vehicle/add`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger "
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;


