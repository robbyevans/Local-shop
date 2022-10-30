import React, { useState, useEffect } from "react";

function AdminDetails({ storeId }) {
  const [adminName, setAdminName] = useState();
  const [clerks, setClerks] = useState([]);

  useEffect(() => {
    fetch(`/stores/${storeId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setAdminName(data.admin.full_name);
          setClerks(data.clerks);
        });
      }
    });
  }, [storeId]);
  console.log(adminName);
  console.log(clerks);

  return (
    <div>
      <h3>Store Admin: {adminName}</h3>
      <div className="mtable-container">
        <p>Store clerks</p>
        <table className="stable">
          <thead>
            <tr>
              <th>Clerk Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clerks.map((clerk) => {
              return (
                <tr key={clerk.id}>
                  <td>{clerk.full_name}</td>
                  <td>{clerk.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDetails;
