import Input from "../../common/Input";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";
import { useAuth } from "../../Providers/AuthProvider";
import { useEffect } from "react";
const initialValues = {
  name: "",
  email: "",
  password: "",
  PasswordComformation: "",
};


const LoginForm = () => {
  const { login, logout, user, isAuthicated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
login(values.email , values.password);

};
console.log(isAuthicated);
  useEffect(() => {
    if (isAuthicated) {
      navigate("/cards");
    }
  }, [isAuthicated]);
  const validationSchema = Yup.object({
    email: Yup.string("")
      .email("Enter a Valid Email")
      .required("Email is Required"),
    password: Yup.string("")
      .required("Password is Required")
      .min(6, `Your Password is Too Short`),
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
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />

        <button
          className={formik.isValid ? "btn" : null}
          type="submit"
          disabled={!formik.isValid}
        >
          LogIn
        </button>
        <Link to="/login">
          <p>SignUp</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
