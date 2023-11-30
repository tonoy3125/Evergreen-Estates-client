

// type data
const property = [
    {
        "id": 1,
        "propertyImage": "https://i.ibb.co/34yfDk1/cm.jpg",
        "type": "Commercial",
        "category": "Luxury",
        "listing": 15
    },
    {
        "id": 2,
        "propertyImage": "https://i.ibb.co/RQq4CXx/res.jpg",
        "type": "Residential",
        "category": "Modern",
        "listing": 10
    },
    {
        "id": 3,
        "propertyImage": "https://i.ibb.co/chYptpN/sin.jpg",
        "type": "Duplex ",
        "category": "Historic",
        "listing": 12
    },
    {
        "id": 4,
        "propertyImage": "https://i.ibb.co/xSKDhcF/apa3.jpg",
        "type": "Apartment",
        "category": "Temporary",
        "listing": 8
    },
    {
        "id": 5,
        "propertyImage": "https://i.ibb.co/FqzXjQm/condo.jpg",
        "type": "Condo",
        "category": "Rustic",
        "listing": 15
    },

]

const Property = () => {
    return (
        <div className="mt-16 mb-10">
            <h3 className="text-center font-semibold text-white text-3xl mb-5">What Kind of Property Looking?!</h3>
            <p className="text-xl text-center text-white">Our Listing Properties Type</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5  container mx-auto">
                {property?.map(type =>
                    <div key={type.id} className="card border border-white rounded-lg shadow-2xl  shadow-gray-300/50">
                        <figure><img src={type.propertyImage} alt="Shoes" className="h-[300px] object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">
                                {type.type}
                                <div className="badge badge-secondary">{type.category}</div>
                            </h2>
                            <p className="text-lg text-opacity-60 font-medium text-white">Listing: {type.listing}</p>
                        </div>
                    </div>)}
            </div>

            <hr className="w-[400px] mx-auto mt-20 border-2" />

        </div>
    );
};

export default Property;