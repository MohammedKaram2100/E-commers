import * as Yup from 'yup';

export const LoginFormValues = {
  email: '',
  password: '',
  conformePassword: '',
  rememberIndex: false,
};
export const LoginFormSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  conformePassword: Yup.string().required(),
});
export const RejasterFormValues = {
  Name: '',
  email: '',
  password: '',
  conformePassword: '',
  rememberIndex: false,
};
export const RejasterFormSchema = Yup.object({
  Name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  conformePassword: Yup.string().required(),
});
