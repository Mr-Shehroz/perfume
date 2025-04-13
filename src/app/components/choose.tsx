import Image from "next/image";

const features = ["Unique Variants", "Fast Delivery", "Excellent Service"];

export default function Choose() {
    return (
        <section className="flex flex-col md:flex-row md:w-[85%] items-center md:items-start justify-center md:gap-28 mt-28 px-4 md:px-8 max-w-6xl mx-auto relative">
            {/* Image & Decoration Section */}
            <div className="relative w-full md:w-[900px] h-[300px] md:h-[450px] flex justify-center">
                {/* Responsive background circle */}
                <div className="bg-[#6A9C89] h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full absolute top-[-40px] md:left-[-30px] left-2 z-0" />

                <Image
                    className="w-[220px] h-[220px] md:w-[350px] md:h-[300px] xl:h-[350px] relative z-10"
                    src="/img5.png"
                    width={250}
                    height={250}
                    alt="img5"
                />

                <Image
                    className="h-[20px] w-[20px] absolute left-0 bottom-20"
                    src="/Ellipse 7.png"
                    width={25}
                    height={25}
                    alt="Ellipse 7 Left"
                />
                <Image
                    className="h-[20px] w-[20px] absolute -right-0 top-20 hidden md:block"
                    src="/Ellipse 7.png"
                    width={25}
                    height={25}
                    alt="Ellipse 7 Right"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-2xl relative mt-10 md:mt-0">
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">Why Choose Us</h2>
                <p className="font-normal text-sm md:text-base text-[#454545] mt-4 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Scelerisque amet cursus eget amet sit ut.
                    In imperdiet suspendisse adipiscing eu purus. Eget nisl cursus quis nibh.
                    Sed sit amet facilisi viverra.
                </p>

                <Image
                    className="h-[25px] w-[25px] absolute right-12 -top-8 hidden md:block"
                    src="/Ellipse 7.png"
                    width={25}
                    height={25}
                    alt="Ellipse 7 Top Right"
                />

                <div className="mt-6 flex flex-col gap-4">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="#6a9c89"
                            >
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                            </svg>
                            <h4 className="font-semibold text-lg">{item}</h4>
                        </div>
                    ))}
                </div>

                <Image
                    className="h-[35px] w-[35px] absolute left-24 -bottom-12 hidden md:block"
                    src="/Ellipse 7.png"
                    width={45}
                    height={45}
                    alt="Ellipse 7 Bottom Left"
                />
            </div>
        </section>
    );
}
