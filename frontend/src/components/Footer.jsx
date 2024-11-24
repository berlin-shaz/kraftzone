import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaMobileAlt,
  FaWpforms,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdFax,
  MdAccessTime,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-700 text-white pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Logo and About */}
        <div>
          <NavLink to={"/"}>
            <h2 className="text-3xl font-bold text-orange-500 mb-2">
              Kraftzone
            </h2>
          </NavLink>
          <p className="text-gray-300 mb-4">
            Die Kraftzone bietet Dienstleistungen in Berlin und Umgebung an, die
            sich auf professionelle Entrümpelung, Haushalts- und
            Geschäftsauflösungen, sowie umweltgerechte Entsorgung
            spezialisieren.
          </p>

          <p className="font-bold mb-2">Follow Us On:</p>
          <div className="flex space-x-3">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaYoutube className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTiktok className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <NavLink to={"/house-cleaning"}>
            <h3 className="text-lg font-bold mb-4">Leistungen</h3>
          </NavLink>
          <ul className="space-y-2">
            <li>
              <NavLink to={"/leistungen/wohnungsauflosung"}>
                {" "}
                &rsaquo; Wohnungsaufläsung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/buroauflosung"}>
                {" "}
                &rsaquo; Büroauflösung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/kuchenentrumpelung"}>
                {" "}
                &rsaquo; Küchenentrümpelung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/sperrmullabholung"}>
                {" "}
                &rsaquo; Sperrmüllabholung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/kellerentrumpelung"}>
                {" "}
                &rsaquo; Kellerentrümpelung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/tatortreinigung"}>
                {" "}
                &rsaquo; Tatortreinigung
              </NavLink>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Entsorgung</h3>
          <ul className="space-y-2">
          <li>
              <NavLink to={"/leistungen/kuhlschrankentsorgung"}>
                {" "}
                &rsaquo; Kühlschrank Entsorgung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/waschmaschineentsorgung"}>
                {" "}
                &rsaquo; Waschmaschine Entsorgung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/kuchenentsorgung"}>
                {" "}
                &rsaquo; Küchen Entsorgung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/bauschuttentsorgung"}>
                {" "}
                &rsaquo; Bauschutt Entsorgung{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leistungen/elektroschruttentsorgung"}>
                {" "}
                &rsaquo; Elektroschrutt Entsorgung{" "}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Corporate Office */}
        <div>
          <h3 className="text-lg font-bold mb-4">Adresse</h3>
          <div className="flex flex-row items-center space-x-2 mb-2">
            <a
              href="https://www.google.com/maps?q=Groninger+Str.+33,+13347+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label="Open Google Maps"
            >
              <MdLocationOn />
            </a>
            <p>Groninger Str. 33 13347 Berlın</p>
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
          <div className="flex items-center space-x-2 mb-2">
            <MdAccessTime />
            <p>Mo - Fr | 08:00 - 18:00</p>
          </div>
        </div>
      </div>

      {/* end */}
      <div className="w-full flex flex-row items-center bg-slate-400 justify-center space-x-2">
        <p className="text-center">&copy; 2022 Kraftone</p>
        <p className="text-center">&#124;</p>
        <NavLink to={"/impressum"}>
          <p className="text-center">Impressum</p>
        </NavLink>
        <p className="text-center">&#124;</p>
        <NavLink to={"/datenschutz"}>
          <p className="text-center">Datanschutz</p>
        </NavLink>
      </div>

      {/* <div className='md:hidden justify-center h-16 items-center grid grid-cols-3 space-x-2'>
        <div className='text-center'><FaMobileAlt />Only on Mobile
        </div>
        
        <div className='text-center'><FaWhatsapp /> Only on Mobile
        </div>
        
        <div className='text-center'><FaWpforms /> Only on Mobile</div>
      </div> */}
    </footer>
  );
}

export default Footer;
