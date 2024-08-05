import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, orderBy, Timestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MyContext from "../../context/data/MyContext";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import LoginSignupNavbar from "../../components/navbar/LoginSignupNavbar";

const SignUp = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    setLoading(true)
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        email: users.user.email,
        uid: users.user.uid,
        time:Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
       //it is collection of users database which we are storing by creating a reference of users

      await addDoc(userRef,user); 
      //adding user by taking reference of the user and new user created
      toast.success("SignUp successFull",{
        //Use it for other toasts behaviour modification
        position:"top-right",
        autoClose:1000,
        hideProgressBar:true,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
       })
      setName("")
      setEmail("")
      setPassword("")
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      toast.error("SignUp Failed")
      setLoading(false)
    }
  };

  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      {loading && <Loader/>}
      <LoginSignupNavbar />
      <div className="flex justify-center items-center min-h-screen mt-[-40px]">
        <div className="flex flex-col justify-center items-center bg-gray-800 lg:w-1/2 p-10 rounded-xl">
          <div className="">
            <h1 className="text-center text-white text-xl underline underline-offset-8 decoration-pink-600 mb-4 font-bold">
              SignUp 
            </h1>
          </div>
          <div className="">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20rem] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
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
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-center lg:w-1/3 mb-3 ">
            <button
              className="bg-purple-500 text-black w-full font-bold px-2 py-2 rounded-lg hover:bg-purple-800"
              onClick={() => signup()}
            >
              SignUp
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Already have an account{" "}
              <Link
                to="/login"
                className="text-pink-400 underline underline-offset-4"
              >
                {" "}
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
