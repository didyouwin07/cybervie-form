import React, { useEffect, useState } from "react";
import { FORM_FIELDS } from "../utils/Constants";
import styles from "./styles/formStyles.module.css";

export default function FormPage() {
  const [formDetails, setFormDetails] = useState({
    fName: "",
    lName: "",
    phoneNo: "",
    email: "",
    edBg: "",
    workEx: "",
    workExDetails: "",
    expectation: "",
    whyCyberView: "",
    howCyberView: "",
  });
  const handleValue = (idx) => {
    console.log(idx);
    if (idx === 0) {
      return formDetails.fName;
    } else if (idx === 1) {
      return formDetails.lName;
    } else if (idx === 2) {
      return formDetails.phoneNo;
    } else if (idx === 3) {
      return formDetails.email;
    } else if (idx === 4) {
      return formDetails.edBg;
    } else if (idx === 5) {
      return formDetails.workEx;
    } else if (idx === 6) {
      return formDetails.workExDetails;
    } else if (idx === 7) {
      return formDetails.expectation;
    } else if (idx === 8) {
      return formDetails.whyCyberView;
    } else return formDetails.howCyberView;
  };

  const handleChange = (e, idx) => {
    const { value } = e.target;
    console.log({ value, idx });
    if (idx === 0) {
      return setFormDetails((prev) => {
        return { ...prev, fName: value };
      });
    } else if (idx === 1) {
      return setFormDetails((prev) => {
        return { ...prev, lName: value };
      });
    } else if (idx === 2) {
      return setFormDetails((prev) => {
        return { ...prev, phoneNo: value };
      });
    } else if (idx === 3) {
      return setFormDetails((prev) => {
        return { ...prev, email: value };
      });
    } else if (idx === 4) {
      return setFormDetails((prev) => {
        return { ...prev, edBg: value };
      });
    } else if (idx === 5) {
      return setFormDetails((prev) => {
        return { ...prev, workEx: value };
      });
    } else if (idx === 6) {
      return setFormDetails((prev) => {
        return { ...prev, workExDetails: value };
      });
    } else if (idx === 7) {
      return setFormDetails((prev) => {
        return { ...prev, expectation: value };
      });
    } else if (idx === 8) {
      return setFormDetails((prev) => {
        return { ...prev, whyCyberView: value };
      });
    } else
      return setFormDetails((prev) => {
        return { ...prev, howCyberView: value };
      });
  };

  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.formContentContainer}>
        <div className={styles.formTitle}>Cybervie Training Enrolment Form</div>
        <div className={styles.formFieldsContainer}>
          {FORM_FIELDS.map((field, idx) => {
            return (
              <div className={styles.formField}>
                <label htmlFor={field.name} className={styles.formLabel}>
                  {field.name}
                </label>
                <div className={styles.formInput}>
                  <input
                    type={field.inputType}
                    id={field.name}
                    value={handleValue(idx)}
                    onChange={(e) => handleChange(e, idx)}
                  />
                </div>
              </div>
            );
          })}
          <div className={styles.buttonsContainer}>
            <div className={styles.submitButton}>Submit</div>
            <div
              className={styles.resetButton}
              onClick={() =>
                setFormDetails({
                  fName: "",
                  lName: "",
                  phoneNo: "",
                  email: "",
                  edBg: "",
                  workEx: "",
                  workExDetails: "",
                  expectation: "",
                  whyCyberView: "",
                  howCyberView: "",
                })
              }
            >
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
