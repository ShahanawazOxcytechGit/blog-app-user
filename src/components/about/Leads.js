import Image from "next/image";

export default function Leads() {
    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-12 py-10 sm:pt-36 lg:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-x-4">
                <div className="flex flex-col sm:flex-row  justify-start items-end space-y-4 sm:space-y-0 ">
                    <div className='bg-[#D20C2B] w-full sm:w-[300px] p-10 space-y-2 text-white'>
                        <div className='flex justify-start items-center space-x-2'>
                            <i className="bi bi-box-fill text-2xl "></i>
                            <span className=" text-4xl font-bold ">
                                28+
                            </span>
                        </div>

                        <p className="  text-lg font-semibold">
                            designers and<br />
                            developers
                        </p>
                    </div>

                    <div className='bg-[#181517] w-full sm:w-[300px] p-10 space-y-2 text-white'>
                        <div className='flex justify-start items-center  space-x-2'>
                            <i className="bi bi-pentagon-half text-2xl"></i>
                            <span className="text-4xl font-bold ">
                                35+
                            </span>
                        </div>

                        <p className="text-lg font-semibold">
                            awards for digital<br />
                            innovation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
