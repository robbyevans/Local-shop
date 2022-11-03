import React, { useState, useEffect, Fragment } from "react";

import { nanoid } from "nanoid";
import "../../../App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import ClerkNavbar from '../ClerkNavbar/Navbar';
import { useNavigate } from "react-router-dom";

function RequestTable() {


  //<<<<-----table functions---->>>
  
  const [request, setRequest] = useState(data);
  const [clerkId,setClerkId]= useState(localStorage.getItem('clerkId'));
 

  //populating the table with data from database
    useEffect(() => {
      fetch(`/clerks/${clerkId}`).then((r) => {
        if (r.ok) {
          r.json().then((data) => setRequest(data.requested_items));
          
        }
      });
    },[]);
    //end

  const [addFormData, setAddFormData] = useState({
    clerk_name: "",
    item_name: "",
    quantity: "",
    date: "",
    clerk_id: clerkId

  });



  const [editFormData, setEditFormData] = useState({
    clerk_name: "",
    item_name:"",
    quantity: "",
    date: "",
  });


  const [editItemId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };



  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      clerk_name: addFormData.clerk_name,
      item_name: addFormData.item_name,
      quantity: addFormData.quantity,
      date: addFormData.date,
      clerk_id: addFormData.clerk_id
    };

    const newItems = [...request, newItem];

    //POSTING TO THE DATABASE

    fetch("/requested_items", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),   
    })
      .then((r) => r.json())
      .then((newItem) => {
        console.log(newItem);
      });

    setRequest(newItems);
  };


  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      clerk_name: editFormData.clerk_name,
      item_name: editFormData.item_name,
      quantity: editFormData.quantity,
      date: editFormData.date
    };

    const newItems = [...request];

    const index = request.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

    //posting edited items to the db

    // fetch(`/requested_items/${editItemId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({editedItem}),
    // })
    //   .then((r) => r.json())
    //   .then((data)=>console.log(data))

    setRequest(newItems);
    console.log(newItems)
    setEditContactId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      clerk_name: item.clerk_name,
      item_name: item.item_name,
      quantity: item.quantity,
      date: item.date,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newItems = [...request];
    const index = request.findIndex((item) => item.id === contactId);
    newItems.splice(index, 1);

    // console.log(contactId)

    fetch(`/requested_items/${contactId}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        // setRequest(spice);
      }
    });

    setRequest(newItems);
  };
  //<<<<<------end of table- functions------>>>>

  return (
<>
    <ClerkNavbar/>
   
    <div className="app-container">
     
      <div className="table-title">
        <h2>Request Items</h2>
      </div>

      {/* //<<<<--- table form input-->> */}

    <form  className="items-form" onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="clerk_name"
        required="required"
        placeholder="Enter Clerk Name..."
        onChange={handleAddFormChange}
      />
        <input
          type="text"
          name="item_name"
          required="required"
          placeholder="item name."
          onChange={handleAddFormChange}
        />
      <input
        type="number"
        name="quantity"
        required="required"
        placeholder="Quantity"
        onChange={handleAddFormChange}
      />
      <input
        type="date"
        name="date"
        required="required"
        placeholder=" Due Date..."
        onChange={handleAddFormChange}
      />
            <button className="one-btn" type="submit">Add+</button>

    </form>
                {/* end of table form input */}

      <form className="actual-table" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            <th>Clerk Name</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {request.map((itemx) => (
              <Fragment>
                {editItemId === itemx.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                  items={itemx}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

    </div>
    </>
  );
};


export default RequestTable