import Image from "next/image";

const Gallery = () => {
  return (
    <section className="gallery my-14">
      <h1 className="text-lg flex justify-center items-center gap-2 capitalize mb-6 font-semibold">
        <Image
          src="/icons/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
        />
        Instagram with #July
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 overflow-hidden place-items-center">
        <Image
          src="/images/instagram.jpg"
          alt="insta"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-all duration-300"
        />
        <Image
          src="/images/instagram2.jpg"
          alt="insta"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-all duration-300"
        />
        <Image
          src="/images/instagram3.jpg"
          alt="insta"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-all duration-300"
        />
        <Image
          src="/images/instagram4.jpg"
          alt="insta"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-all duration-300"
        />
        <Image
          src="/images/instagram5.jpg"
          alt="insta"
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Gallery;
