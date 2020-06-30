import React from "react";
import { Table, Dropdown } from "react-bootstrap";

import "./transaction.css";

const Tables = () => {
  const Aksi = () => {
    return (
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="down"
          ></Dropdown.Toggle>

          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item style={{ color: "#0ACF83" }} href="#/action-1">
              Aprove
            </Dropdown.Item>
            <Dropdown.Item style={{ color: "#FF0000" }} href="#/action-2">
              Cencle
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };

  return (
    <>
      <Table striped hover variant="dark">
        <thead className="Thead">
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Bukrti Transaksi</th>
            <th>Remaining Aktif</th>
            <th>Status User</th>
            <th>Status Payment</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>{Aksi()}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>{Aksi()}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
