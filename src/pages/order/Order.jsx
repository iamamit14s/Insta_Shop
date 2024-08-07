import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/MyContext";


function Order() {
  const userId = JSON.parse(localStorage.getItem("user"))?.user?.uid;
  const context = useContext(MyContext);
  const { loading, mode, order, getOrderData} = context;

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
          <h1 className="mb-10 text-center text-2xl font-bold" style={{ color: mode === "dark" ? "white" : "" }}>Order Items</h1>
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
        <div>
          <h1 className="mb-10 mt-10 text-center text-2xl font-bold">Order Items</h1>
          <h2 className=" min-h-screen text-center font-semibold text-4xl text-pink-600 m-12">
          You haven't ordered anything yet. Please Order...!
        </h2>
        </div>
        
      )}
    </Layout>
  );
}

export default Order;
