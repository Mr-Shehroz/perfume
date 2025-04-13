'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Store() {
    const allProducts = [
        { src: "/img1.png", name: "Saint Brvbeu", price: "$35.22" },
        { src: "/img2.png", name: "Chamelio", price: "$15.92" },
        { src: "/img3.png", name: "Secta Corm", price: "$32.28" },
        { src: "/img4.png", name: "Beone Neo", price: "$25.98" },
        { src: "/img5.png", name: "Aura Shades", price: "$40.00" },
        { src: "/img1.png", name: "Saint Brvbeu", price: "$35.22" },
        { src: "/img2.png", name: "Chamelio", price: "$15.92" },
        { src: "/img3.png", name: "Secta Corm", price: "$32.28" },
        { src: "/img4.png", name: "Beone Neo", price: "$25.98" },
        { src: "/img5.png", name: "Aura Shades", price: "$40.00" },
        { src: "/img4.png", name: "Beone Neo", price: "$25.98" },
        { src: "/img5.png", name: "Aura Shades", price: "$40.00" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

    const handlePageChange = (page: number) => {
        if (page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <section className="mt-28 px-4">
            <h2 className="font-semibold text-xl text-center">Our Store</h2>

            <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
                {["All", "Featured", "Top Selling", "Sale", "New"].map((label, index) => (
                    <Link key={index} href="#" className="text-[#696969] text-lg font-semibold">
                        {label}
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 place-items-center w-full mx-auto">
                {paginatedProducts.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transform transition duration-300 flex flex-col items-center w-[220px]"
                    >
                        <div className="relative bg-[#EBF5F1] w-full h-[300px] rounded-lg overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.name}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h4 className="font-semibold text-base">{item.name}</h4>
                            <h4 className="font-semibold text-base text-[#6A9C89]">{item.price}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center gap-3 mt-10">
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-md transition ${
                            currentPage === page
                                ? "bg-[#6A9C89] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    disabled={currentPage >= totalPages}
                    className={`px-4 py-2 rounded-md ${
                        currentPage >= totalPages
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-[#6A9C89] text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
