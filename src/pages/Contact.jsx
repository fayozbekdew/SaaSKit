import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Select from "../components/Select";
import Table from "../components/Table";
import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";
import { ContactDefault } from "../constants/common";

function Contact() {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState(ContactDefault);
  function openModal() {
    setOpen(true);
  }
  function filterContact(company) {
    if (company == "All") {
      setCompany(ContactDefault);
    } else {
      setCompany(ContactDefault.filter((com) => com.company == company));
    }
  }
  return (
    <div>
      <span className="flex items-center justify-between my-5">
        <small className="flex gap-x-2">
          <p>Company:</p>
          <Select
            action={filterContact}
            options={[
              "All",
              "Udemy",
              "Coursera",
              "Pluralsight",
              "Udemy",
              "Coursera",
              "Pluralsight",
              "Udemy",
              "Coursera",
              "Pluralsight",
              "Udemy",
            ]}
          />
        </small>
        <PrimaryButton action={openModal} title="Add contact" />
      </span>
      <Table
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
        <Modal setOpen={setOpen}>
          <div className="flex flex-col gap-y-2">
            <TextInput label={"Full name"} placeholder={"John Doe"} />
            <TextInput label={"Email"} placeholder={"johndoe@gmail.com"} />
            <div className="w-full flex flex-col border-b-2 border-iconGray pb-1 gap-y-1">
              <p>Role</p>
              <Select options={["Chef", "Admin", "Teacher", "Developer"]} />
            </div>
            <div className="w-full flex flex-col border-b-2 border-iconGray pb-1 gap-y-1">
              <p>Company</p>
              <Select options={["Udemy", "Google", "Upwork", "Slack"]} />
            </div>
            <TextInput label={"Forecast"} placeholder={"50%"} />
            <TextInput label={"Activity"} placeholder={"10 min ago"} />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Contact;
