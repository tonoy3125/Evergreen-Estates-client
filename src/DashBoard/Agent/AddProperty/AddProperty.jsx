

const AddProperty = () => {
    return (
        <div>
            <div>
                <section className="lg:p-16 dark:bg-gray-800 dark:text-gray-50">
                    <form action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <div>
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Property Image <span className="text-red-700">*</span></h2>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-white">SVG, PNG, JPG or GIF </p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Property Name <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Property Name Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Agent Name <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Agent Name Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Agent Email <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Agent Email Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-3">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Agent Image <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Agent Image Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Location<span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="location" placeholder="Enter Location Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Price <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="price" placeholder="Enter Price Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4"> Year <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="year" placeholder="Enter Year Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Bed<span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="bed" placeholder="Enter Total Bed Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4">Bath <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="bath" placeholder="Enter Total Bath Here" id="" />
                                </div>
                                <div className="col-span-full lg:col-span-2">
                                    <h2 className=" text-base md:text-xl font-semibold text-white mb-2 lg:mb-4"> Size <span className="text-red-700">*</span></h2>
                                    <input className="pt-4 pb-4 pl-2 md:p-4 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Property Size Here" id="" />
                                </div>
                                <div className="col-span-full mt-5">
                                    <input type="submit" value="Add Job" className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] " />
                                </div>
                            </div>
                        </fieldset>

                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddProperty;