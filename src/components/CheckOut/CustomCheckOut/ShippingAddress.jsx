import { Formik } from "formik";
import React from "react";

const validate = (values) => {
  const { name, email, address } = values;
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }
  if (!name) {
    errors.name = "Required";
  }
  if (!address) {
    errors.address = "Required";
  }

  return errors;
};

const ShippingAddress = ({ setShipping }) => {
  const initialValues = {
    email: "",
    name: "",
    address: "",
  };

  return (
    <div>
      <h3>Shipping Address</h3>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          setShipping(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  values={values.name}
                  className={"shipping-input" + (name ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  values={values.email}
                  className={"shipping-input" + (email ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  onChange={handleChange}
                  values={values.address}
                  className={"shipping-input" + (address ? "error" : "")}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ShippingAddress;
