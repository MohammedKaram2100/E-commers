import axios from 'axios';
import {Domin} from '../store/Index';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

export default function useLogin() {
  const navigator = useNavigate();
  const Login = async (values) => {
    if (values.conformePassword == values.password) {
      let data = {
        identifier: values.email,
        password: values.password,
      };
      await axios
        .post(Domin + '/api/auth/local', data)
        .then((res) => {
          values.rememberIndex
            ? localStorage.setItem('token Auth', JSON.stringify(res.data))
            : sessionStorage.setItem('token Auth', JSON.stringify(res.data));
          toast.success('Login successful');
          navigator('/');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Login failed Ferest go to Register');
          navigator('/rejester');
        });
    } else {
      toast.error('Password and ConformePassword must be the same');
    }
  };
  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigator('/login');
  };
  const Rejester = async (values) => {
    if (values.conformePassword == values.password) {
      let data = {
        username: values.Name,
        email: values.email,
        password: values.password,
      };
      await axios
        .post(Domin + '/api/auth/local/register', data)
        .then((res) => {
          values.rememberIndex
            ? localStorage.setItem('token Auth', JSON.stringify(res.data))
            : sessionStorage.setItem('token Auth', JSON.stringify(res.data));
          toast.success('Rejester successful');
          console.log(res.data);
          navigator('/');
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response?.data?.error?.message);
          toast.error(err.response?.data?.error?.message || 'Rejester failed');
        });
    } else {
      toast.error('Password and ConformePassword must be the same');
    }
  };
  return {Login, Logout, Rejester};
}
