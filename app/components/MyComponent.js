import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const MyComponent = () => {
  return (
    <div>
      {/* Contact Information and Social Media Section */}
      <div className="w-full h-[58px] bg-black text-white px-5 py-2 flex flex-wrap items-center justify-between gap-4">
        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt />
          <a href="tel:+12255550118" className="hover:underline">(225) 555-0118</a>
          <FaEnvelope />
          <a href="mailto:michelle.rivera@example.com" className="hover:underline">michelle.rivera@example.com</a>
        </div>

        {/* Promotional Text */}
        <div className="text-white text-sm sm:text-xs mt-2 sm:mt-0">
          Follow Us and get a chance to win 80% off
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 mt-2 sm:mt-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-[20px] sm:text-[18px]" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-[20px] sm:text-[18px]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-[20px] sm:text-[18px]" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-[20px] sm:text-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
