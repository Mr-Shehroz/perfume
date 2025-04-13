import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#181818] text-white mt-28 py-16">
            <div className="flex flex-col justify-center items-center gap-4 px-4">
                <h2 className="font-semibold text-xl">GET OUR NEWSLETTER</h2>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                        className="px-4 py-2 w-[250px] sm:w-[300px] rounded-md text-[#AFAFAF] text-center border border-gray-300 shadow-md focus:shadow-lg focus:outline-none focus:border-[#6A9C89] transition duration-300"
                        placeholder="Your Email"
                        type="email"
                    />
                    <button className="bg-[#6A9C89] text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8">
                <div className="flex flex-wrap justify-center items-center gap-5">
                    {["About", "Product", "Catalog", "Faq", "Privacy Policy", "Terms Condition", "Contact"].map(
                        (label, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="text-[#696969] text-lg font-semibold hover:text-white transition duration-300"
                            >
                                {label}
                            </Link>
                        )
                    )}
                </div>
            </div>

            {/* Horizontal line with spacing */}
            <hr className="mt-8 border-gray-700" />

            {/* Footer Bottom Text */}
            <div className="text-center text-sm text-[#696969] mt-4">
                <p>&copy; 2025 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
