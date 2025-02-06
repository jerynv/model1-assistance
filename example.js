let data = { // this is the data that will be used to generate the vehicle page
    id: 1, // the id of the vehicle, in production code will be used to fetch the vehicle data from the server ex: fetch(`api/vehicles/${id}`)
    type: "shuttle bus",
    brand: "Starcraft",
    line: "Allstar",
    images: ["example.jpg", "example2.jpg", "example3.jpg"],
    thumbnail: "example.jpg",
    parent_model: "Starcraft Allstar XL",
    model: "Starcraft Allstar XL 36",
    year: 2022,
    condition: "new",
    fuel: "diesel",
    chassis: "IC Corporation TC",
    engine: "Cummins 6.7L ISB",
    capacity: 36,
    wheelchair_position: 2,
    luggage_type: "none",
    mileage: null,
    color: null,
    warranty: "5-year/100,000 mile",
    warranty_details: "standard",
    warranty_cost: "no additional charge",
    certifications: [
        "ADA Compliant",
        "QVM certified",
        "ISO Certified",
        "Altoona-tested",
    ],
    owner: "Forest River, Inc.",
    parent_company_of_owner: "Berkshire Hathaway",
    details_text: `Starcraft Bus is North America’s largest shuttle bus company. Starcraft offers an expansive selection of ADA Compliant, QVM certified, ISO Certified, and Altoona-tested shuttles. Starcraft Bus, a division of Forest River, Inc., is owned by Berkshire Hathaway, one of the country’s most respected and financially secure companies. The Allstar XL shuttle bus series is built on the IC TC chassis and offers seating configurations up to 36 ambulatory passengers and up to 2 wheelchair positions. All new Forest River commercial buses include an unprecedented 5-year/100,000 mile standard warranty at no additional charge.
    The Starcraft Allstar XL 36 heavy-duty shuttle bus is ideal for the following sectors: airports, car rentals, casinos, churches, colleges & universities, corporate contractors, daycare & pre-schools, dealers, hotels & hospitality operations, hospitals, Indian reservations, leasing companies, municipalities, non-profits, parking companies, prisons, retirement & healthcare, schools, taxi & car, tour & limo, transit contractors, transit municipalities, and wheelchair & mobility sectors.`,
};

let userVehicle = { // this is the data that will be sent to the server to create a new vehicle
    vehicle_id: 1, // the id of the vehicle that the user is customizing, in production code will be used to verify that the user is customizing the correct vehicle, with the correct modifications
    id:  "de142ad7d7881fc5dcb734290171dc5e", //custom random hash to identify the users custom vehicle
    posible_wheelchair_positions: ["rear", "front"], // possible wheelchair positions, in this case, the wheelchair can be placed in the rear or in the front, 
    number_of_wheelchair_positions: 2,
    seat_layout: {
        standard_seats: 36, // number of maximum standard seats, without any modifications, not including driver seat, or shotgun seat
        shotgun_seat: true,
        wheelchair_positions: ["rear"],
        wheelchair_space_equivalent: [
            //number of seats that need to be removed to accommodate a wheelchair space
            {
                position: "rear", // in this example the wheelchair space is in the rear, and takes up 4 seats worth of space, therefore 4 seats need to be removed
                seats: 8,
            },
            {
                position: "front", // in this example the wheelchair space is in the front, and takes up 2 seats worth of space, therefore 2 seats need to be removed
                seats: 4,
            },
        ], // extra note: extra conditions can be added, for example, if the wheelchair space is in the front, the shotgun seat might need to be removed
    },
    vehicle: {
        ...data // the data of the vehicle that the user is customizing, not sure if i should keep this as a id referer to the already existing vehicle data is enough and would cause less data duplication
    }
};

//currently researching possible methods to visually represent the seat layout, and wheelchair space equivalent, while maintaining the ability to easily modify the data, and not requiring extra modifications to preexisting data
//i would highly suggest looking through and at volvo custom truck builder, "https://www.volvotrucks.us/truck-builder#/vnl" 
// some key points i liked to mention is the false sense of 3d space, and animation by utilizing multiple image frames, not videos but image frames, for better screen size compatibility, and faster loading times