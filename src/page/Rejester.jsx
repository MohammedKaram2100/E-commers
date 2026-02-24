import {ErrorMessage, Field, Form, Formik} from 'formik';
import {RejasterFormSchema, RejasterFormValues} from '../Schema/ScimaLogin';
import useLogin from '../hook/usLogin';
export default function Rejester() {
  const {Rejester} = useLogin();
  return (
    <div className=" w-full min-h-screen flex justify-center items-center">
      <Formik
        initialValues={RejasterFormValues}
        validationSchema={RejasterFormSchema}
        onSubmit={Rejester}
      >
        <Form className="fieldset border-base-300 rounded-box  w-[35%] border p-4">
          <legend className="fieldset-legend text-black text-4xl">
            Rejester
          </legend>

          <label className="label">User Name</label>
          <Field
            type="text"
            name="Name"
            className="input bg-gray-200 w-full "
            placeholder="User Name"
          />
          <ErrorMessage
            name="Name"
            className="text-red-500 text-sm"
            component="div"
          />
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
          <label className="label flex ">
            <Field
              type="checkbox"
              name="rememberIndex"
              className="checkbox checkbox-neutral"
            />
            <p> Remember me</p>
          </label>

          <button
            type="submit"
            className="btn btn-neutral mt-4 hover:bg-gray-800"
          >
            Rejester
          </button>
        </Form>
      </Formik>
    </div>
  );
}
