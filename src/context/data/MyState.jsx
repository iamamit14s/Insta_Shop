import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";



const MyState = (props) => {
  
 const  Navigate= useNavigate();
  
  const [mode, setMode] = useState("light");

  const [loading, setLoading] = useState(false);
     
  //COLOR TOGGLE MODE
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };


  //Add PRODUCT TO FIRESTORE
const initialProductsState= {
  title: '',
  price: '',
  imageURL:'',
  category: '',
  description:'',
  time: Timestamp.now(),
  date: new Date().toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }),
}
  const [products, setProducts] = useState(initialProductsState);

  const addProduct = async () => {
    if (
      products.title == '' ||
      products.price == '' ||
      products.imageURL == '' ||
      products.category == '' ||
      products.description == ''
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const productRef = doc(collection(fireDB,'products'))
      await setDoc(productRef,{...products,id:productRef.id})
      toast.success("Product added successfully",{
        position:"top-right",
        autoClose:1000,
        hideProgressBar:true,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:'colored'
      });
      setTimeout(() => {
        Navigate("/dashboard")
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setTimeout(() => {
      setProducts(initialProductsState);
    }, 800);
  };

  //RETRIEVING UPDATED PRODUCT DATA IN FIRESTORE
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q =  query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
         productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Update Product IN FIRESTORE Functionality
  const editHandle = (item) => {
    setProducts(item);

  };
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated Successfully");
      getProductData();
      setTimeout(() => {
        Navigate("/dashboard") ;
      }, 800);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setTimeout(() => {
      setProducts(initialProductsState);
    }, 800);
  };

  // Delete Product Functionality
  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product deleted successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Set ordered data to firestore 
  // const addOrder = async(orderData)=>{
  //   setLoading(true)
  //   try {
  //     const orderRef = doc(collection(fireDB,'order'));
  //     await setDoc(orderRef,{...orderData,id:orderRef.id})
  //     toast.success('Order has been placed')
  //     setLoading(false);
      
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);   
  //   }
  // }

  //clear cart after order
  // const [cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')))
  // const clearCart=()=>{
  //   setCartItems([])
  //   localStorage.setItem('cartItems',JSON.stringify([]));
  //   console.log('CART ITEMS CLEARED',cartItems);
  // }


  //Get Order Data
  const [order, setOrder] = useState([]);
  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setOrder(ordersArray);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Get USER DATA
  const [user, setUser] = useState([]);
  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        const userData = doc.data();
        usersArray.push({
          ...userData,
          time: userData.time?.toDate().toLocaleString(),
        });
        setUser(usersArray);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //FILTER LOGIC
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const closeUpdateProduct = ()=>{
    Navigate("/dashboard")
    
  }

  useEffect(() => {
    getOrderData();
    getProductData();
    getUserData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,        
        getProductData,
        addProduct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        closeUpdateProduct ,
        order,
        getOrderData,
        initialProductsState,
      }}
    >
      <div>{props.children}</div>
    </MyContext.Provider>
  );
};

export default MyState;
