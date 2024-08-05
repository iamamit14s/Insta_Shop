import React, { useContext, useEffect } from 'react'
import MyContext from '../../../context/data/MyContext'
import { Link } from 'react-router-dom';

function AddProduct() {

  const  context = useContext(MyContext)
const {products, setProducts, addProduct} = context;

useEffect(()=>{
    window.scrollTo(0,0)
},[])


    return (
      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex-col bg-gray-800 px-10 py-5 rounded-xl lg:w-[30%]'>
                    <div className="relative">
                    <Link to={'/dashboard'} className="absolute top-0 -right-0.5 text-white text-xl mb-4 font-bold">X</Link> 
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                                value={products.title} 
                                onChange={(e)=>setProducts({...products,title:e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={products.price} 
                                onChange={(e)=>setProducts({...products,price:e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            value={products.imageURL} 
                                onChange={(e)=>setProducts({...products,imageURL:e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={products.category} 
                                onChange={(e)=>setProducts({...products,category:e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                       value={products.description} 
                       onChange={(e)=>setProducts({...products,description:e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
        
    )
}

export default AddProduct