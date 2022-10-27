import React from "react";

const ReadOnlyRow = ({ items, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
              <td>{items.clerk_name}</td>
              <td>{items.item_name}</td>
              <td>{items.quantity}</td>
              <td>{items.date}</td>
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
