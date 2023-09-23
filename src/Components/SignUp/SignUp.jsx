import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useCartAction } from "../../Providers/CartProvider";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const { user, cart } = useCart();
  const [userData, setDataUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useCartAction();
  const onSubmit = (values) => {
    navigate("/cards");
    dispatch("signUp" , );
  };

  const validationSchema = Yup.object({
    name: Yup.string("").required("Name is Required"),
    email: Yup.string("")
      .email("Enter a Valid Email")
      .required("Email is Required"),
    password: Yup.string("")
      .required("Password is Required")
      .min(6, `Your Password is Too Short`),
    PasswordComformation: Yup.string("")
      .required("Password is Required")
      .oneOf([Yup.ref("password"), null], "passwords must be matched"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* <div className="formControl">
              <label htmlFor="">Name</label>
              <input type="text" {...formik.getFieldProps("name")} name="name" />
              {formik.errors.name && formik.touched.name && (
                <span className="error">{formik.errors.name}</span>
              )}
            </div> */}
        <Input formik={formik} name="name" label="Name" type="text"/>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="PasswordComformation"
          label="Enter your password again"
          type="password"
        />

        <button
          className={formik.isValid ? "btn" : null}
          type="submit"
          disabled={!formik.isValid}
        >
          SignUp
        </button>
        <Link to="/login">
          <p>Already Signed?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
