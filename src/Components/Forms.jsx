import {ErrorMessage, Field, Form, Formik} from 'formik';
import {LoginFormValues, LoginFormSchema} from '../Schema/ScimaLogin';
import {IoIosLogIn} from 'react-icons/io';
import {Link} from 'react-router-dom';
import useLogin from '../hook/usLogin';
export default function Forms() {
  const {Login} = useLogin();
  return (
    <Formik
      initialValues={LoginFormValues}
      validationSchema={LoginFormSchema}
      onSubmit={Login}
    >
      <Form className="fieldset border-base-300 rounded-box  w-[35%] border p-4">
        <legend className="fieldset-legend text-black text-4xl">Login</legend>

        <label className="label">Email</label>
        <Field
          type="email"
          name="email"
          className="input bg-gray-200 w-full "
          placeholder="Email"
        />
        <ErrorMessage
          name="email"
          className="text-red-500 text-sm"
          component="div"
        />

        <label className="label">Password</label>
        <Field
          type="password"
          name="password"
          className="input  bg-gray-200 w-full"
          placeholder="Password"
        />
        <ErrorMessage
          name="password"
          className="text-red-500 text-sm"
          component="div"
        />
        <label className="label">ConformePassword</label>
        <Field
          type="password"
          name="conformePassword"
          className="input  bg-gray-200 w-full"
          placeholder="ConformePassword"
        />
        <ErrorMessage
          name="conformePassword"
          className="text-red-500 text-sm"
          component="div"
        />
        <label className="label flex justify-between items-center">
          <div className=" flex gap-1 justify-center items-center">
            <Field
              type="checkbox"
              name="rememberIndex"
              className="checkbox checkbox-neutral"
            />
            <p> Remember me</p>
          </div>
          <Link
            to={'/rejester'}
            className=" flex gap-1 justify-center items-center text-[15px] cursor-pointer hover:text-black"
          >
            Rejester
            <IoIosLogIn className=" font-bold  text-[15px]" />
          </Link>
        </label>

        <button
          type="submit"
          className="btn btn-neutral mt-4 hover:bg-gray-800"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
}
