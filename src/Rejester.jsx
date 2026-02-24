import axios from 'axios';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {Domin} from './Stor/zuztant';
export default function Login() {
  const navegat = useNavigate();
  const Rejester = (val) => {
    let Endpoint = '/api/auth/local/register';
    let url = Domin + Endpoint;
    let data = {
      email: val.email,
      password: val.password,
      username: val.username,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        toast.success('Register success!');
        navegat('/');
      })
      .catch((err) => {
        let Errlog = err.response?.data?.error?.message || 'Error occurred';
        toast.error(Errlog);
        console.log(err);
      });
  };

  const formValidition = Yup.object({
    email: Yup.string().required().email('ادخل اليمال الصحيح'),
    password: Yup.string().required('ادخل اليمال باسورد'),
    username: Yup.string().required('username not funde'),
  });

  return (
    <div className=" w-full h-[100vh] flex justify-center items-center bg-violet-200 ">
      <Formik
        validationSchema={formValidition}
        onSubmit={Rejester}
        initialValues={{email: '', password: '', username: ''}}
      >
        <Form className=" flex flex-col gap-3 bg-white p-4 rounded-2xl w-[700px] ">
          <h1 className=" text-3xl text-black">Login</h1>
          <Field
            type="email"
            name="email"
            placeholder="Ener Your emil"
            className=" input bg-[#F5F5F5] hidden md:block w-full p-2.5 "
          />
          <ErrorMessage
            name="email"
            component={'div'}
            className=" text-red-500"
          />
          <Field
            type="text"
            name="password"
            placeholder="Ener Your password"
            className=" input bg-[#F5F5F5] hidden md:block w-full p-2.5 "
          />
          <ErrorMessage
            name="password"
            component={'div'}
            className=" text-red-500"
          />
          <Field
            type="text"
            name="username"
            placeholder="Ener Your username"
            className=" input bg-[#F5F5F5] hidden md:block w-full p-2.5 "
          />
          <ErrorMessage
            name="username"
            component={'div'}
            className=" text-red-500"
          />

          <button type="submit" className=" btn btn-primary">
            {' '}
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
