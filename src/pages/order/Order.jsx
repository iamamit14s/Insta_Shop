import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/MyContext";


function Order() {
  const userId = JSON.parse(localStorage.getItem("user"))?.user?.uid;
  const context = useContext(MyContext);
  const { loading, mode, order, getOrderData, setLoading } = context;

  //delete order
  // const deleteOrder = async (orderItem) => {
  //   setLoading(true);
  //   try {
  //     console.log('delete button clicked 1');
      
  //     await deleteDoc(doc(fireDB, "order",orderItem));
  //     console.log('delte button clicked 2');
  //     toast.success("Product deleted successfully");
  //     console.log('delte button clicked 3');
  //     getOrderData();
  //     console.log('delte button clicked 4');
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  const userOrders = order.filter((obj)=>obj.userId===userId)
  useEffect(() => {
    getOrderData();
  }, []);
  return (
    <Layout>
      {loading && <Loader />}
      {userOrders.length > 0 ? (
        <>
          <div className=" h-full pt-10">
            {userOrders
              .map((order) => {
                return (
                  <div
                    key={order.id}
                    className="mx-auto max-w-5xl justify-center px-6 md:flex md:flex-col md:space-x-6 xl:px-0"
                  >
                    {order.cartItems.map((item, id) => {
                      return (
                        <div key={id} className="rounded-lg md:w-2/3">
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <img
                              src={item.imageURL}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="relative mt-5 sm:mt-0">
                                <h2
                                  className="text-lg font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.description}
                                </p>
                                <p
                                  className="mt-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                   ₹ {item.price}
                                </p>
                                <p
                                  className="mt-1 mb-1 text-xs text-gray-700"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  Quantity - {item.quantity}
                              
                                </p>
                                {/* <div
                                  onClick={}
                                  
                                  className=" md:absolute md:top-1 md:right-0 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 cursor-pointer hover:bg-red-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h2 className=" min-h-screen text-center font-semibold text-4xl text-pink-600 m-12">
          You haven't ordered anything yet. Please Order...!
        </h2>
      )}
    </Layout>
  );
}

export default Order;
