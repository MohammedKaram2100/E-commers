import Forms from '../Components/Forms';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
export default function Login() {
  return (
    <>
      <Header />
      <div className=" w-full min-h-screen flex items-center justify-center bg-gray-100">
        <Forms />
      </div>
      <Footer />
    </>
  );
}
