import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import LoginSignupNavbar from "../../components/navbar/LoginSignupNavbar";

const Login = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    setLoading(true)
    try{
      const result  = await signInWithEmailAndPassword(auth,email,password)
     toast.success("Login SuccessFul",{
      position:"top-right",
      autoClose:2000,
      hideProgressBar:true,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:'colored'
     })
     localStorage.setItem('user', JSON.stringify(result))
     navigate('/');
     setLoading(false)
    }
    catch(error){
      console.log(error);
      toast.error('Login Failed',{
        position:"top-right",
        autoClose:2000,
        hideProgressBar:true,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
       })
      setLoading(false)

      
      
    }
  };

  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
     <LoginSignupNavbar/>
      <div className=" flex justify-center items-center mt-[-60px] min-h-screen">
      {loading && <Loader/>}
        <div className="flex flex-col justify-center items-center  bg-gray-800 lg:w-1/3 p-10 rounded-xl">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold underline underline-offset-8 decoration-pink-600">
              Login
            </h1>
          </div>
          <div className="">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="email"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="password"
              required
            />
          </div>
          <div className="flex justify-center lg:w-1/3 mb-3 ">
            <button className="bg-yellow-500 text-black w-full font-bold px-2 py-2 rounded-lg  hover:bg-yellow-800"
            onClick={()=>login()}
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account ?
              <Link
                to="/signUp"
                className="text-pink-400 underline underline-offset-4"
              >
                {" "}
                SignUp
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
