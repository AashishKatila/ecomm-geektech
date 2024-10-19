
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
    const socialIcons = [
        {
            source: <FaFacebook size={24} />,
            name: "Facebook",
        },
        {
            source: <FaInstagram size={24} />,
            name: "Instagram",
        },
        {
            source: <FaYoutube size={24} />,
            name: "Youtube",
        },
        {
            source: <FaXTwitter size={24} />,
            name: "X",
        },
    ];

    const company = [
        {
            title: "About Us",
            link: "/",
        },
        {
            title: "Careers",
            link: "/",
        },
        {
            title: "Affiliates",
            link: "/",
        },
        {
            title: "Blog",
            link: "/",
        },
        {
            title: "Contact Us",
            link: "/",
        },
    ];

    const shop = [
        {
            title: "New Arrivals",
            link: "/",
        },
        {
            title: "Accessories",
            link: "/",
        },
        {
            title: "Men",
            link: "/",
        },
        {
            title: "Women",
            link: "/",
        },
        {
            title: "All Products",
            link: "/",
        },
    ];

    const help = [
        {
            title: "Customer Service",
            link: "/",
        },
        {
            title: "My Account",
            link: "/",
        },
        {
            title: "Find a Store",
            link: "/",
        },
        {
            title: "Legal & Privacy",
            link: "/",
        },
        {
            title: "Gift Card",
            link: "/",
        },
    ];

    const payments = [
        {
            source: <FaCcDiscover size={36} />,
            name: "Discover",
        },
        {
            source: <FaCcPaypal size={36} />,
            name: "Paypal",
        },
        {
            source: <FaCcVisa size={36} />,
            name: "Visa",
        },
        {
            source: <FaCcMastercard size={36} />,
            name: "Mastercard",
        },
    ];

    return (
        <div className="pt-12 px-4 bg-gray-200 md:px-8 lg:px-32  ">
            {/* Top  */}
            <div className="flex gap-8 flex-col md:flex-row justify-between ">
                <div className="flex flex-col gap-y-6 w-full md:w-1/4">
                    <Link to="/" className=" text-2xl tracking-wider">
                        E-COMMERCE
                    </Link>
                    <span className="text-sm tracking-wider">
                        42, Tersapatti, Pokhara, Kaski, Gandaki, Nepal
                    </span>
                    <Link to="/" className="font-semibold text-sm">
                        work.aashish0katila@gmail.com
                    </Link>
                    <Link to="/" className="font-semibold text-sm">
                        +977-9816124226
                    </Link>
                    <div className="flex gap-4 ">
                        {socialIcons.map((icon) => (
                            <div key={icon.name} className="cursor-pointer"> {icon.source} </div>
                        ))}
                    </div>
                </div>
                <div className=" hidden lg:flex w-full md:w-1/2 justify-around">
                    <div className="flex flex-col gap-y-12">
                        <h2 className="font-semibold tracking-wider">COMPANY</h2>
                        {/* Links  */}
                        <div className="flex flex-col gap-4">
                            {company.map((item) => (
                                <Link to={item.link} key={item.title}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-12">
                        <h2 className="font-semibold tracking-wider">SHOP</h2>
                        {/* Links  */}
                        <div className="flex flex-col gap-4">
                            {shop.map((item) => (
                                <Link to={item.link} key={item.title}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-12">
                        <h2 className="font-semibold tracking-wider">HELP</h2>
                        {/* Links  */}
                        <div className="flex flex-col gap-4">
                            {help.map((item) => (
                                <Link to={item.link} key={item.title}>{item.title}</Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  gap-y-6 w-full md:w-1/4">
                    <h2 className="font-semibold">Subscribe</h2>
                    <span>
                        Be the first to get the latest news and items placed in our shop.
                        Don't miss it.
                    </span>
                    <div className="flex mx-2 ">
                        <input type="text" className="w-3/4" />
                        <button className="bg-pink-400 p-2 w-1/4 text-white">Join</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex gap-4 flex-wrap items-center ">
                        {payments.map((item) => (
                            <div key={item.name} className="cursor-pointer">{item.source}</div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom  */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 pb-6">
                <div className="font-semibold ">© Aashish Katila 2024</div>
                <div className="flex flex-col md:flex-row justify-between lg:gap-16">
                    <div>
                        <span className="text-gray-500">Language : </span>
                        <span className="font-semibold">United States | English</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Currency : </span>
                        <span className="font-semibold">$ USD </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
