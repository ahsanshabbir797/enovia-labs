import React, { useState } from "react";
import styles from "./ContactUs.module.css";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    projectDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Handle change:::", e.target);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Submitted:", formData);

    // Example: Form validation
    if (!formData.email || !formData.firstName || !formData.lastName) {
      alert("Please fill in all required fields.");
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      projectDetails: "",
    });

    // Example: Handle form data (e.g., send it to a server)
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       alert("Your form has been submitted successfully!");
    //       setFormData({
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         phoneNumber: "",
    //         companyName: "",
    //         projectDetails: "",
    //       });
    //     } else {
    //       alert("There was an error submitting the form.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     alert("Something went wrong. Please try again later.");
    //   });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["text-section"]}>
        <p className={styles["top-label"]}>Enovia Labs</p>
        <h1>Let's discuss your project</h1>
        <p>
          We are committed to understanding your requirements and crafting a
          tailored solution that aligns with your goals.
        </p>
        <p>
          Enter your details and someone from our team will reach out to find a
          time to connect with you.
        </p>
      </div>
      <form className={styles["form-section"]} onSubmit={handleSubmit}>
        <div className={styles["form-field"]}>
          <span>
            First Name<sup>*</sup>
          </span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <span>
            Last Name<sup>*</sup>
          </span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <span>
            Email<sup>*</sup>
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <span>
            Phone Number<sup>*</sup>
          </span>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <span>
            Company Name<sup>*</sup>
          </span>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
          />
        </div>
        <div className={styles["form-field"]}>
          <span>
            Project Details<sup>*</sup>
          </span>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Provide details about your project"
            rows={4}
            required
          ></textarea>
        </div>
        <button className={styles["form-btn"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsPage;
