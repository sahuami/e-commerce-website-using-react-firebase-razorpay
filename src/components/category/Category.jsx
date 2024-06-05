import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext } from "react";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/128/8863/8863863.png',
        name: 'fashion'
    },

    {
        image: 'https://cdn-icons-png.flaticon.com/128/3601/3601647.png',
        name: 'bicycle'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/5258/5258257.png',
        name: 'jeans'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/4287/4287470.png',
        name: 'toys'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/11554/11554135.png',
        name: 'eye wear'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/8802/8802365.png',
        name: 'hair product'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/10716/10716660.png',
        name: 'jewellery'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/9413/9413719.png',
        name: 'watch'
    },

    {
        image: 'https://cdn-icons-png.flaticon.com/128/14120/14120322.png',
        name: 'others'
    },

]



const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <div className="flex flex-col mt-5 ">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-items-center  hide-scroll-bar ">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10 ">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-gradient-to-r from-brown-400 to-brown-900  transition-all hover:scale-95 duration-150 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12 rounded-full shadow-[0_5px_6px_5px_rgba(240,120,0)]">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 style={{ color: mode === 'dark' ? 'white' : '', }} className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />



        </div>
    );
}

export default Category;