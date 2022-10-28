import React from "react";

const ReadOnlyRow = ({ items, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
              <td>{items.name}</td>
              <td>{items.quantity}</td>
              <td>{items.inStock}</td>
              <td>{items.spoilt}</td>
              <td>{items.BuyingPrice}</td>
              <td>{items.SellingPrice}</td>
      <td>
        <button
          type="button"
          className="read-btn"
          onClick={(event) => handleEditClick(event, items)}
        >
          Edit
        </button>
        <button className="delete-btn" type="button" onClick={() => handleDeleteClick(items.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
