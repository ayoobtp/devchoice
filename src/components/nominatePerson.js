import React, { useRef, useEffect, useState, createRef } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import CancelIcon from "@material-ui/icons/Cancel";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "react-modal";

const NominatePerson = () => {
  const [hasScrollReachedBottom, setHasScrollReachedBottom] = useState(false);

  const empListRef = React.createRef();

  const onScroll = () => {
    let hasScrollReachedBottom;
    const distLeftToBottom = Math.ceil(
      empListRef.current.scrollHeight - empListRef.current.scrollTop
    );
    const empListHeight = empListRef.current.clientHeight;

    if (distLeftToBottom === empListHeight) {
      hasScrollReachedBottom = true;
    } else {
      hasScrollReachedBottom = false;
    }
    setHasScrollReachedBottom(hasScrollReachedBottom);
  };

  const customStyles = {
    overlay: {
      backdropFilter: "blur(1px)",
      backgroundColor: "rgba(191, 191, 191, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "12px",
      textAlign: "center",
      height: "fit-content",
      width: "fit-content",
      minWidth: "25%",
      minHeight: "25%",
    },
  };

  const employees = [
    {
      name: "Dwight Schrute",
      email: "dwight@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Pamela Beesly",
      email: "pamela@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Jim Halpert",
      email: "jim@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Andrew Bernard",
      email: "andy@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Michael Scott",
      email: "michael@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Creed Bratton",
      email: "creed@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Angela Martin",
      email: "angela@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Kelly Kapoor",
      email: "kelly@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Ryan Howard",
      email: "ryan@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Oscar Martinez",
      email: "oscar@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Phyllis Vance",
      email: "phyllis@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
    {
      name: "Meredith Palmer",
      email: "meredith@gmail.com",
      image:
        "https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png",
    },
  ];

  return (
    <>
      <div className="nominate-panel">
        <div className="employee-list-panel">
          <h1>Employee list</h1>
          <input
            className="search-name"
            placeholder="Search employee by name..."
          ></input>
          <div
            className={
              "employee-list " +
              (hasScrollReachedBottom ? "reached-bottom" : "")
            }
            onScroll={onScroll}
            ref={empListRef}
          >
            {employees.map((employee, index) => (
              <div className="employee-details" key={index}>
                <img src={employee.image}></img>
                <div>{employee.name}</div>
                <div>{employee.email}</div>
              </div>
            ))}
          </div>
          <div id="scroll-indicator"></div>
        </div>
        <div className="shortlist-panel">
          <div className="shortlist">
            <h1>Shortlisted employees</h1>
            <div className="employee-details">
              <img src="https://findicons.com/files/icons/1580/devine_icons_part_2/512/account_and_control.png"></img>
              <div>Amy Dubanowski</div>
              <CancelIcon className="remove-icon" />
              <EditIcon className="edit-icon" />
            </div>
          </div>
          <button className="confirm-button">Submit</button>
        </div>
      </div>
      <Modal isOpen={false} style={customStyles}>
        <div className="question">Are you sure?</div>
        <button className="confirm-button">Confirm</button>
        <button className="cancel-button">Cancel</button>
      </Modal>
    </>
  );
};

export default NominatePerson;
