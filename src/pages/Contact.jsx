import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Select from "../components/Select";
import Table from "../components/Table";
import { useState } from "react";
import Modal from "../components/Modal";
import TextInput from "../components/TextInput";

function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span className="flex items-center justify-between my-5">
        <small className="flex gap-x-2">
          <p>Company:</p>
          <Select options={["All", "BIG", "Tag"]} />
        </small>
        <button onClick={() => setOpen(true)}>oo</button>
        <PrimaryButton title="Add contact" />
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
        tbody={[
          {
            id: "12jhdf1hjjuie",
            name: "Alisher Uzoqov",
            email: "alisheruzoqov@gmail.com",
            company: "Udemy",
            role: "Teacher",
            forecast: "60%",
            activity: "10 minute ago",
          },
          {
            id: "jhhsdf493h9fuid",
            name: "Alisher Uzoqov",
            email: "alisheruzoqov@gmail.com",
            company: "Udemy",
            role: "Teacher",
            forecast: "60%",
            activity: "10 minute ago",
          },
        ]}
      />
      {open && (
        <Modal setOpen={setOpen}>
          <TextInput placeholder={"Please enter your full name!"} />
          <TextInput placeholder={"Please enter your email!"} />
          <Select options={["Chef", "Admin", "Teacher", "Developer"]} />
          <Select options={["Udemy", "Google", "Upwork", "Slack"]} />
          <TextInput placeholder={"Please enter your forecast!"} />
          <TextInput placeholder={"Please enter latest activity!"} />
        </Modal>
      )}
    </div>
  );
}

export default Contact;
