import React, { useState } from "react";

const User = ({ user }) => {
  const { id, name, username, email, phone, website, company } = user;

  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>{company.name}</td>
      <td>
        <button
          onClick={handleChecked}
          className="font-bold border-2 border-black px-2 rounded-sm bg-red-400"
        >
          { isChecked ? "true" : "false" }
        </button>
      </td>
    </tr>
  );
};

export default User;
