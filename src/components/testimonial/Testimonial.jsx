import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'

function Testimonial() {
    const context = useContext(MyContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">I recently purchased a few items from [INSTA SHOP], and I am thoroughly impressed with the overall experience. The website is user-friendly, making it easy to browse through various categories and find what I needed quickly.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">My recent shopping experience with [INSTA SHOP] had its ups and downs. On the positive side, the website is well-designed and easy to navigate. I found the products I wanted without any hassle, and the prices were competitive. The customer service team was also responsive and helpful when I had a question about one of the products.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed"> My recent shopping experience with [INSTA SHOP] was seamless, and I received my order confirmation almost instantly. Shipping was surprisingly fast, and the packaging ensured that my items arrived in perfect condition.  Overall, I am very satisfied with my purchase and will definitely shop here again.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial