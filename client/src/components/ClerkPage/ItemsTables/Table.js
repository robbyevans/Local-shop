import React, { useState, Fragment, useEffect } from "react";
import "../../../App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import ClerkNavBar from '../ClerkNavbar/Navbar'


const Table = ({setClerkUser}) => {
 
  //<<<<-----table functions---->>>
  const [items, setItems] = useState(data);
  const [clerkId,setClerkId]= useState(localStorage.getItem('clerkId'));
  console.log(clerkId)


  //populating the table with data from database
  useEffect(() => {
    fetch(`/clerks/${clerkId}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data.items)
          setItems(data.items)
        }
        
        );
      }
      else
      console.log("NO RECORDS FOUND!")
    });
  },[]);


  const [addFormData, setAddFormData] = useState({
    name: "",
    quantity: "",
    inStock: "",
    spoilt: "",
    BuyingPrice: "",
    SellingPrice: "",
    status:"",
    clerk_id:clerkId
  });
  


  const [editFormData, setEditFormData] = useState({
    name: "",
    quantity: "",
    inStock: "",
    spoilt: "",
    BuyingPrice: "",
    SellingPrice: ""
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
    //----POST---->>>>
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      name: addFormData.name,
      quantity: addFormData.quantity,
      inStock: addFormData.inStock,
      spoilt: addFormData.spoilt,
      BuyingPrice: addFormData.buyingPrice,
      SellingPrice: addFormData.sellingPrice,
      clerk_id: addFormData.clerk_id,
      paid:false
    };
    const newItems = [...items, newItem];
    // POSTING TO DATABASE

  fetch("/items", {
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
    setItems(newItems);
  };

  // <<<<<<<-------->>>>>>>

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      name: editFormData.name,
      quantity: editFormData.quantity,
      inStock: editFormData.inStock,
      spoilt: editFormData.spoilt,
      BuyingPrice: editFormData.buyingPrice,
      SellingPrice: editFormData.sellingPrice
    };

    const newItems = [...items];

    const index = items.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

        //posting edited items to the db

  fetch(`/items/${editItemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({editedItem}),
    })
      .then((r) => r.json())
      .then((data)=>console.log(data))

    setItems(newItems);
    console.log(newItems)
    setEditContactId(null);
  };



  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      name: item.name,
      quantity: item.quantity,
      inStock: item.inStock,
      spoilt: item.spoilt,
      BuyingPrice: item.buyingPrice,
      SellingPrice: item.sellingPrice
    };



    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };



  const handleDeleteClick = (contactId) => {
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === contactId);
    newItems.splice(index, 1);

    fetch(`/items/${contactId}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        // setRequest(spice);
      }
    });

    setItems(newItems);
  };
  //<<<<<------end of table- functions------>>>>

  return (

<>
    <ClerkNavBar setClerkuser={setClerkUser}/>
    <div className="app-container">
     
            {/* //<<<<--- table input form-->> */}
          <div className="table-title">
            <h2>Add items</h2>
          </div>
          <form className="items-form" onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Enter a name..."
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
              type="number"
              name="inStock"
              required="required"
              placeholder="available."
              onChange={handleAddFormChange}
            />
            <input
              type="number"
              name="spoilt"
              required="required"
              placeholder=" spoilt items..."
              onChange={handleAddFormChange}
            />
              <input
              type="number"
              name="buyingPrice"
              required="required"
              placeholder="Buying Price"
              onChange={handleAddFormChange}
            />
               <input
              type="number"
              name="sellingPrice"
              required="required"
              placeholder="Selling Price"
              onChange={handleAddFormChange}
            />
            <button className="one-btn"  type="submit">Add</button>
          </form>
          {/* end of table input form*/}

     {/* <<<--------------------->>>>> */}

                  {/* actual table */}
      <form className="actual-table" onSubmit={handleEditFormSubmit}>
        <table className="actual-table">
          <thead>
            <tr>
            <th> Name</th>
            <th>Quantity</th>
            <th>inStock</th>
            <th>spoilt</th>
            <th>BuyingPrice</th>
            <th>SellingPrice</th>
            <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Fragment>
                {editItemId === item.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    items={item}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {/* end of table  */}

    </div>
    </>
  );
};

export default Table;
