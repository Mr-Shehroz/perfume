import Image from "next/image";

export default function Collection() {
    return (
        <section className="max-w-6xl mx-auto mt-10 md:mt-28 lg:mt-40 xl:mt-48 px-4 text-center py-8">
            {/* Section Header */}
            <div className="flex flex-col justify-center items-center gap-4 md:w-[70%] mx-auto">
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Our New Collection
                </h2>
                <p className="font-normal text-sm md:text-base lg:text-xl xl:text-2xl text-[#454545] max-w-3xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque amet cursus eget amet sit ut.
                    In imperdiet suspendisse adipiscing eu purus. Eget nisl cursus quis nibh.
                    Sed sit amet facilisi viverra.
                </p>
            </div>

            {/* Collection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 place-items-center w-full mx-auto">
                {[
                    { src: "/img1.png", name: "Saint Brvbeu", price: "$35.22" },
                    { src: "/img2.png", name: "Chamelio", price: "$15.92" },
                    { src: "/img3.png", name: "Secta Corm", price: "$32.28" },
                    { src: "/img4.png", name: "Beone Neo", price: "$25.98" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transform transition duration-300 flex flex-col items-center w-[220px]"
                    >
                        <div className="relative bg-[#EBF5F1] w-full h-[300px] mx-auto rounded-lg overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h4 className="font-semibold text-base">{item.name}</h4>
                            <h4 className="font-semibold text-base text-[#6A9C89]">{item.price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
