import ImageComp from "@/src/components/ImageComp";
import React from "react";

function HomePage() {
  return (
    <>
      <section className="bg-white">
        {/* Container */}
        <section className="container mx-auto lg:p-8">
          {/* Top */}
          <section className="flex">
            {/* Left */}
            <section className="w-2/3">
              {/* Image */}
              <div className="p-1">
                <div className="pb-[30%] relative rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://picsum.photos/600/200"
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Right */}
            <section className="w-1/3">
              <div className="p-1">
                <div className="pb-[29%] relative rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://picsum.photos/600/200"
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
              <div className="p-1 rounded-sm">
                <div className="pb-[29%] relative rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="https://picsum.photos/600/200"
                      alt="Product"
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Bottom */}
          <section className="mt-4">
            <ul className="flex justify-evenly">
              {[...Array(8)].map((_, index) => {
                return (
                  <li key={`hero-sub-items-${index}`} className="p-1">
                    <a
                      href="/categories"
                      className="flex flex-col items-center text-black transition hover:text-orange-700"
                    >
                      <svg
                        className="w-12 h-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"
                        />
                      </svg>
                      <span className="text-sm">Category</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
      </section>

      <section className="container mx-auto">
        <section className="p-8">
          <header>
            <h2 className="text-2xl font-bold">Flash Sale</h2>
          </header>
          <section>
            <ul className="flex flex-wrap">
              {[...Array(6)].map((_, index) => {
                return (
                  <li className="w-2/12 p-1">
                    <a href="/">
                      <figure className="bg-white hover:shadow-xl">
                        <div>
                          <ImageComp src="https://picsum.photos/400/400" />
                        </div>
                        <figcaption className="p-1">
                          <p className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos libero quod voluptatem! Minima obcaecati
                            iste incidunt nesciunt ducimus nihil expedita, fuga,
                            distinctio veritatis odit repellendus possimus et
                            assumenda, laudantium quisquam.
                          </p>
                          {/* Price */}
                          <p className="font-bold text-orange-600 text-lg">
                            {new Intl.NumberFormat("en-PH", {
                              style: "currency",
                              currency: "PHP",
                            }).format(2000)}
                          </p>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>

        <section className="p-8">
          <header>
            <h2 className="text-2xl font-bold">Just For You</h2>
          </header>
          <section>
            <ul className="flex flex-wrap">
              {[...Array(18)].map((_, index) => {
                return (
                  <li className="w-2/12 p-1 pb-2">
                    <a href="/">
                      <figure className="bg-white hover:shadow-xl">
                        <div>
                          <ImageComp src="https://picsum.photos/401/400" />
                        </div>
                        <figcaption className="p-1">
                          <p className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos libero quod voluptatem! Minima obcaecati
                            iste incidunt nesciunt ducimus nihil expedita, fuga,
                            distinctio veritatis odit repellendus possimus et
                            assumenda, laudantium quisquam.
                          </p>
                          {/* Price */}
                          <p className="font-bold text-orange-600 text-lg">
                            {new Intl.NumberFormat("en-PH", {
                              style: "currency",
                              currency: "PHP",
                            }).format(2000)}
                          </p>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
          <footer className="mt-4">
            <button className="w-full py-2 bg-orange-600 text-white font-bold rounded-sm transition hover:bg-orange-500">
              View More
            </button>
          </footer>
        </section>
      </section>
    </>
  );
}

export default HomePage;
