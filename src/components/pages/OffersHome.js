import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("/offers");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`/offers/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <NavLink className="btn btn-light" exact to="/UserHome" role="button">Go To User Page</NavLink>
      <NavLink className="btn btn-light" exact to="/VehicleHome" role="button">Go To Vehicle Page</NavLink>
      <NavLink className="btn btn-light" exact to="/offers/add" role="button">Add Offer Request</NavLink>
      </div>
      <div className="py-4">
        <h1>offers Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">titel</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">startcity</th>
              <th scope="col">endcity</th>
              <th scope="col">starttime</th>
              <th scope="col">endtime</th>
              <th scope="col">freestorage</th>
              <th scope="col">resourceType</th>
              <th scope="col">vehicleType</th>
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
                <td>{user.titel}</td>
                <td>{user.name}</td>
                <td>{user.no}</td>
                <td>{user.startcity}</td>
                <td>{user.endcity}</td>
                <td>{user.starttime}</td>
                <td>{user.endtime}</td>
                <td>{user.freestorage}</td>
                <td>{user.resourceType}</td>

                <td>{user.vehicleType}</td>
                <td>{user.rout}</td>
                <td>{user.cost}</td>
                <td>{user.status}</td>
                <td>
                  <Link className="btn btn-primary " to={`/offer/display/${user._id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary "
                    to={`offer/add`}
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


