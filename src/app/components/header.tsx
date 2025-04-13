import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="relative max-w-7xl xl:max-w-full mx-auto px-4 py-6 md:px-0 md:py-0 bg-[#FAFAFA]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Left Column */}
                <div className="flex flex-col w-full md:w-1/2 gap-4 md:ml-12 lg:ml-20 xl:ml-48 md:mt-6">
                    {/* Logo and Nav */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 lg:gap-8 xl:gap-12">
                        <Link href="/">
                            <Image
                                className="w-[100px] h-auto md:w-[80px] lg:w-[100px]"
                                src="/Logo.png"
                                width={100}
                                height={100}
                                alt="Logo"
                            />
                        </Link>

                        <nav className="flex flex-wrap gap-4 text-base md:text-lg lg:text-xl xl:text-2xl justify-center md:justify-start">
                            <Link className="font-semibold" href="/about">About</Link>
                            <Link className="font-semibold" href="/products">Product</Link>
                            <Link className="font-semibold" href="/blog">Blog</Link>
                            <Link className="font-semibold" href="/contact">Contact</Link>
                        </nav>
                    </div>

                    {/* Image on small screens only */}
                    <div className="block md:hidden w-full flex justify-center">
                        <Image
                            className="w-full h-auto object-contain max-w-sm"
                            src="/image 2.png"
                            width={450}
                            height={500}
                            alt="img2"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="mt-2 max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg text-center md:text-left mx-auto md:mx-0 lg:mt-12">
                        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-4xl leading-snug">
                            Keep your body fresh with a good perfume
                        </h2>
                        <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl text-[#454545] mt-3 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Scelerisque amet cursus eget amet sit ut.
                            In imperdiet suspendisse adipiscing eu purus. Eget nisl cursus quis nibh.
                            Sed sit amet facilisi viverra.
                        </p>
                        <button className="font-semibold text-base text-white bg-[#6A9C89] px-5 py-2.5 mt-5 rounded-md hover:bg-[#5b8c78] transition">
                            Let&apos;s Shopping
                        </button>
                    </div>
                </div>

                {/* Right Image - stays top-right from md+ */}
                <div className="hidden md:block absolute top-0 right-0 md:w-[40%] max-w-sm lg:max-w-md xl:max-w-lg">
                    <Image
                        className="w-full h-auto object-contain"
                        src="/image 2.png"
                        width={450}
                        height={500}
                        alt="img2"
                    />
                </div>
            </div>
        </header>
    );
}
