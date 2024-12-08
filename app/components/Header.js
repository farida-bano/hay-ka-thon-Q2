import { FaUser, FaUserPlus, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full h-[58px] bg-white text-black flex justify-between items-center px-5 mt-[70px]">
      <div className="flex items-center">
        <h3 className="text-[24px] leading-[32px] tracking-[0.1px] font-montserrat">Bandage</h3>
        <div className="ml-[40px] flex gap-[15px]">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      </div>
      
      {/* Grouped Login and Register */}
      <div className="flex items-center gap-3">
        <div className="flex gap-3">
          <button className="flex items-center bg-transparent border border-black px-4 py-2 text-black hover:bg-blue-300 hover:text-black transition">
            <FaUser className="mr-2 text-black" /> Login
          </button>
          <button className="flex items-center bg-transparent border border-black px-4 py-2 text-black hover:bg-blue-300 hover:text-black transition">
            <FaUserPlus className="mr-2 text-black" /> Register
          </button>
        </div>

        {/* Cart and Heart icons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-black hover:bg-blue-300 hover:text-black p-2 rounded transition">
            <FaShoppingCart className="mr-2 text-black" />
            <span>1</span>
          </div>
          <div className="flex items-center text-black hover:bg-blue-300 hover:text-black p-2 rounded transition">
            <FaHeart className="mr-2 text-black" />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
