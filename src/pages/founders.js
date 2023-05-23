import React from "react";

const Founders = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-col bg-pink-500 mt-32">
                <div className="grid grid-flow-col">
                    <div className="w-full">
                        <img
                            src="https://i.imgur.com/pbESXSQ.png"
                            class="rounded-full border-solid border-2 border-black z-10 -mt-12 ml-80"
                            alt="" />

                        <p className="text-white font-bold text-3xl mt-16 ml-96">Angad Talwar</p>
                        <p className="text-white font-medium text-2xl mt-7 ml-96">SMU Dallas, Texas <br />
                            15+ Experience in building brands,<br />
                            Ecommerce & D2C</p>
                    </div>
                    <h1 className="text-white text-5xl text-dmSans font-semibold mt-24">Founders</h1>

                    <div>
                        <img
                            src="https://i.imgur.com/haGmaW2.png"
                            class="rounded-full border-solid border-2 border-black z-10 -mt-12 ml-72"
                            alt="" />

                        <p className="text-white font-bold text-3xl mt-16 mr-64">Kanika Talwar</p>
                        <p className="text-white font-medium text-2xl mt-7 mr-64">MP University, IIM Bangalore NSRCEL <br />
                            Goldman Sachs 10K Women, 4+ years of<br />
                            Industry Brand & Manufacturing Experience</p>
                    </div>
                </div>
                <div className="mt-20">
                    <p className="text-white text-2xl ml-32 text-dmSans font-semibold">Team Category Experience: 30+ years | Team Ecommerce / D2C Experience:
                        15+ years | Vertically Aligned Capabilities: From Factory to Customer</p>
                </div>
            </div>

            <div className="">
                
            </div>
        </div>
    )
}

export default Founders;