import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Footer = () => {
    return (
        <footer className="border-t-2 border-green-900 text-[#A1A1AA]">
            <div className="grid grid-cols-1 lg:grid-cols-7 sm:grid-cols-2 gap-5 p-9">
                <div className="flex lg:justify-center items-center"><a className="btn text-green-600 font-black btn-ghost text-xl">ARTIFY</a></div>
                <div className="lg:col-span-2 col-span-1">
                    <h1 className='font-bold text-xl text-white'>CONTACT</h1>
                    <p>
                        Street: 2017 Harron Drive <br />
                        City: Baltimore <br />
                        State Full: Maryland <br />
                        Zip Code: 21201 <br />
                        Phone Number: 443-498-7166 <br />
                        Mobile Number: 443-934-9384</p>
                </div>
                <div className="">
                    <h1 className='font-bold text-xl text-white'>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='font-bold text-xl text-white'>Services</h1>
                    <ul>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='font-bold text-xl text-white'>Information</h1>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='font-bold text-xl mb-2 text-white'>Social Links</h1>
                    <div className="flex items-center gap-1">
                       <FaFacebook/>
                        <p>@artify.fb.124.com</p>
                    </div>
                    <div className="flex items-center gap-1 my-2.5">
                        <BsTwitterX/>
                        <p>@artify.twt.e4.com</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CgMail/>
                        <p>artify@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-white border-gray-600 py-5">
                <p className='lg:text-[15px] text-[10px]'>&copy; 2025 ARTIFY. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer