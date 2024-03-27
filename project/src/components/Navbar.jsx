import Search from "../Images/Search.png";
import group from "../Images/group.png";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4  ">
                    <div>
                        <span className="text-black text-2xl  px-4 font-extrabold">ECOMMERCE</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-black hover:text-gray-500">Categories</a>
                        <a href="#" className="text-black hover:text-gray-500">Sale</a>
                        <a href="#" className="text-black hover:text-gray-500">Clearance</a>
                        <a href="#" className="text-black hover:text-gray-500">New Stock</a>
                        <a href="#" className="text-black hover:text-gray-500">Trending</a>
                    </div>
                    <div className="flex items-center space-x-4  ">
                        <img src={Search.src} alt="Logo 1" className="h-7" />
                        <img src={group.src} alt="Logo 2" className="h-5" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar