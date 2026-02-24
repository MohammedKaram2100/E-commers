import axios from 'axios';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {Domin} from './Stor/zuztant';
export default function Login() {
  const navgit = useNavigate();
  const sump = (val) => {
    let Eioint = '/api/auth/local';
    let url = Domin + Eioint;
    let data = {
      identifier: val.email,
      password: val.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        let user = res.data.user;

        toast.success('login sucsses ' + user.username);
        navgit('/');
        if (val.chekd) {
          localStorage.setItem('token', res.data.jwt);
        } else {
          sessionStorage.setItem('token', res.data.jwt);
        }
        // console.log(res);
      })
      .catch((err) => {
        let Errlog = err.response.data.error.message;
        toast.error(Errlog);

        // console.log(err);
      });
    // console.log(val);
  };
  const formValidition = Yup.object({
    email: Yup.string().required().email('ادخل اليمال الصحيح'),
    password: Yup.string().required('ادخل اليمال باسورد'),
  });

  return (
    <div className=" w-full h-[100vh] flex justify-center items-center bg-violet-200 ">
      <Formik
        validationSchema={formValidition}
        onSubmit={sump}
        initialValues={{email: '', password: '', chekd: ''}}
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
          <label className=" flex gap-3 text-black">
            <Field
              className="checkbox checkbox-primary"
              type="checkbox"
              name="chekd"
            />
            Remmber My
          </label>
          <button type="submit" className=" btn btn-primary">
            {' '}
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
