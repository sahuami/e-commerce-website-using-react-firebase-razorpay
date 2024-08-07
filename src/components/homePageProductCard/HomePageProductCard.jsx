import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";


const HomePageProductCard = () => {
    const navigate = useNavigate();


    const context = useContext(myContext);
    const { mode } = context;
    const { loading, getAllProduct } = context;

    

    const cartItems = useSelector((state) => state.cart);

    // console.log(cartItems);

    const dispatch = useDispatch();

    // add to cart function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart")
    }


    // delete from cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-16 ">
            {/* Heading  */}
            <div className="">
                <h1 style={{ color: mode === 'dark' ? 'white' : '', }} className="  text-center mb-5 text-3xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main 1 */}
            <section className="text-gray-600 body-font flex justify-evenly ">
                {/* main 2 */}
                <div className="container py-7 ">

                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    {/* main 3  */}
                    <div className="flex flex-wrap ">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4 ">
                                    <div className="h-full bg-brown-400 border-2 hover:shadow-2xl hover:shadow-gray-500 border-gray-200 rounded-xl overflow-hidden  cursor-pointer shadow-[0_5px_5px_2px_rgba(240,130,0)]">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full  rounded-3xl"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2  style={{ color: mode === 'dark' ? 'white' : '', }} className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                SHOP Karo
                                            </h2>
                                            <h1 style={{ color: mode === 'dark' ? 'white' : '', }} className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 22)}
                                            </h1>
                                            <h1 style={{ color: mode === 'dark' ? 'white' : '', }} className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                {cartItems.some((p) => p.id === item.id)

                                                    ?
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className=" bg-red-700 hover:bg-brown-800 w-full text-white py-[4px] rounded-lg font-bold">

                                                        Delete From Cart
                                                    </button>

                                                    :

                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className=" bg-brown-900 hover:bg-brown-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add To cart
                                                    </button>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;