import { FaFacebookF, FaXing, FaLinkedinIn, FaPinterest, FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdFax } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-2">Kraftzone</h2>
          <p className="text-gray-300 mb-4">Cleaning Service Provider</p>
          <p className="text-gray-300 mb-4">
            There are many variations of passages of Lorem Ipsum available, There are many variations of passages.
          </p>
          <p className="font-bold mb-2">Follow Us On:</p>
          <div className="flex space-x-3">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaXing className="text-xl cursor-pointer" />
            <FaLinkedinIn className="text-xl cursor-pointer" />
            <FaPinterest className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTiktok className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>&rsaquo; Toilet Cleaning</li>
            <li>&rsaquo; Room Cleaning</li>
            <li>&rsaquo; Window Cleaning</li>
            <li>&rsaquo; Garden Cleaning</li>
            <li>&rsaquo; Kitchen Cleaning</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>&rsaquo; Home</li>
            <li>&rsaquo; Über Uns</li>
            <li>&rsaquo; Leistungen</li>
            <li>&rsaquo; Prozess</li>
            <li>&rsaquo; Testamonial</li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-lg font-bold mb-4">Adresse</h3>
          <div className="flex items-center space-x-2 mb-2">
            <MdLocationOn />
            <p>Groninger Str. 33
            13347 Berlın</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <MdPhone />
            <p>030 – 817 999 80</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <MdEmail />
            <p>info@kraftzone.de</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <MdFax />
            <p>+985-8844-000</p>
          </div>
          <div className="mt-3 px-3">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="px-3 py-2 rounded-l-md outline-none"
            />
            <button className="bg-yellow-400 text-blue-900 font-sm px-2 py-2 rounded-r-md">
              Sub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
