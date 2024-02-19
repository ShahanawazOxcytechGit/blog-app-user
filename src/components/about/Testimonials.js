export default function Testimonials() {
    return (
        <div className="mx-auto max-w-2xl  px-6 py-10 sm:px-12 sm:py-16 lg:max-w-7xl ">
            <div className=" grid grid-cols-1 lg:grid-cols-5 sm:gap-x-4 space-y-4">
                <div className='col-span-2  space-y-4'>
                    <h3 className="text-gray-500 uppercase font-medium">testimonials</h3>
                    <h1 className="text-gray-800 text-3xl sm:text-4xl font-bold">
                        What our clients<br />
                        say about our<br />
                        studio.
                    </h1>
                </div>

                {/* <div className='col-span-3 text-gray-200'>
                    Carousel will be here
                </div> */}
            </div>
        </div>
    )
}
