import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Select from "../components/Select";
import Table from "../components/Table";
import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import { ContactDefault } from "../constants/common";
import { addToDB, deleteFromDB, getFromDB } from "../db";
import { useEffect } from "react";

function Contact() {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState([]);
  function openModal() {
    setOpen(true);
  }

  function filterContact(company) {
    if (company == "All") {
      getFromDB("contacts").then(setCompany);
    } else {
      getFromDB("contacts").then((data) =>
        setCompany(data.filter((com) => com.company == company))
      );
    }
  }
  function handleSumbit(newEl) {
    addToDB("contacts", newEl);
    getFromDB("contacts").then(setCompany);
  }
  useEffect(() => {
    getFromDB("contacts").then(setCompany);
  }, []);
  function deleteContact(id) {
    if (id.length > 1) {
      id.forEach((el) => deleteFromDB("contacts", el));
    } else if (id.length == 1) {
      deleteFromDB("contacts", id[0]);
    }
    getFromDB("contacts").then(setCompany);
  }
  return (
    <div>
      <span className="flex items-center justify-between my-5">
        <small className="flex gap-x-2">
          <p>Company:</p>
          <Select
            action={filterContact}
            options={["All", "Udemy", "Coursera", "Pluralsight"]}
          />
        </small>
        <PrimaryButton action={openModal} title="Add contact" />
      </span>
      <Table
        action={deleteContact}
        thead={[
          "Name",
          "Email",
          "Company name",
          "Role",
          "Forecast",
          "Recent activity",
        ]}
        tbody={company}
      />
      {open && (
        <Modal action={handleSumbit} setOpen={setOpen}>
          <div className="flex flex-col gap-y-2">
            <TextInput
              name="fullname"
              label={"Full name"}
              placeholder={"John Doe"}
            />
            <TextInput
              name={"email"}
              label={"Email"}
              placeholder={"johndoe@gmail.com"}
            />
            <div className="w-full flex flex-col border-b-2 border-iconGray pb-1 gap-y-1">
              <p>Role</p>
              <Select
                name={"role"}
                options={["Chef", "Admin", "Teacher", "Developer"]}
              />
            </div>
            <div className="w-full flex flex-col border-b-2 border-iconGray pb-1 gap-y-1">
              <p>Company</p>
              <Select
                name={"company"}
                options={["Udemy", "Coursera", "Pluralsight"]}
              />
            </div>
            <TextInput
              name={"forecast"}
              label={"Forecast"}
              placeholder={"50%"}
            />
            <TextInput
              name={"activity"}
              label={"Activity"}
              placeholder={"10 min ago"}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Contact;
