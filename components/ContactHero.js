import React from "react";

const ContactHero = () => {
  return (
    <div>
      <div className="contact-hero h-[400px] mb-[4rem]">
        <h1 className="text-white text-2xl md:text-[35px] font-Poppins font-bold pt-[16rem] pl-[5rem] md:pt-[14rem]">
          Contact Us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-[3rem]">
        <div className="pt-[4rem] flex flex-col spacing-y-7">
          <h1 className="text-Poppins text-xl pb-[2rem] text-blue-400 md:text-[30px] font-bold font-Poppins pl-3 pt-2">
            Company Details
          </h1>
          <div className="flex flex-row spacing-x-1 items-center pt-5">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              TEL
            </h1>
            <p className="text-[15px] font-Poppins   ">+27 564 6456 645</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              FAX
            </h1>
            <p className="text-[15px] font-Poppins   ">+27 564 6456 645</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              TEL
            </h1>
            <p className="text-[15px] font-Poppins   ">+27 564 6456 645</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              EMAIL
            </h1>
            <p className="text-[15px] font-Poppins   ">mpaprojects@m.co.za</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              Vat Number
            </h1>
            <p className="text-[15px] font-Poppins   ">564 6456 645</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              COIDA
            </h1>
            <p className="text-[15px] font-Poppins   ">212622</p>
          </div>
          <div className="flex flex-row spacing-x-1 items-center pt-4">
            <h1 className="text-Poppins text-[17px]  md:text-[17px] font-semibold font-Poppins pl-3 pr-3">
              SARS Tax Clearance
            </h1>
            <p className="text-[15px] font-Poppins   ">9E7755823Q</p>
          </div>
        </div>
        <div className="mt-[4rem] mb-[4rem]  flex flex-col w-full rounded-sm bg-slate-200 md:py-[3rem]  justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-Poppins text-xl pb-[2rem] text-blue-400 md:text-[30px] font-bold font-Poppins pl-3 pt-2">
            GET IN TOUCH
          </h1>
          <div className="max-w-md w-full space-y-8">
            <form className="mt-8  space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="flex flex-col w-full md:flex-row space-x-3">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none relative block w-full mb-[1rem] px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Surname
                    </label>
                    <input
                      id="surnamw"
                      name="surname"
                      type="text"
                      autoComplete="text"
                      required
                      className="appearance-none relative block w-full mb-[1rem] px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Sername"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full mb-[1rem] px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="outline-none border-none group mt-[2rem] hover:from-pink-500 hover:to-yellow-500 relative w-[160px] flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-green-400   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
