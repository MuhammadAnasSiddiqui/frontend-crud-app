import { Link } from "react-router-dom";
import { CustomInput } from "../../common";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../../../context/AuthContext";

const LoginForm = () => {
  const { login, loggingIn } = useAuthContext();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    login(values);
  };
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-[480px] w-full">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h1 className="text-slate-900 text-center text-3xl font-semibold">
              Sign in
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="mt-12 space-y-6">
                  <div>
                    <CustomInput
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && errors.password}
                      className=""
                      showPasswordToggle={true}
                    />
                  </div>

                  <div className="!mt-12">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                    >
                      Sign in
                    </button>
                  </div>
                  <p className="text-slate-900 text-sm !mt-6 text-center">
                    Don't have an account?{" "}
                    <Link
                      to="/auth/signup"
                      className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                    >
                      Register here
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
