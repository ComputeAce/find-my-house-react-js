const SidebarRight = () => {
    const houses = [
      {
        title: "Cozy Cottage in the Woods",
        image: "https://source.unsplash.com/80x80/?cabin,forest",
        location: "Vermont, USA",
      },
      {
        title: "Modern Apartment in NY",
        image: "https://source.unsplash.com/80x80/?apartment,newyork",
        location: "New York, USA",
      },
      {
        title: "Beachside Villa in LA",
        image: "https://source.unsplash.com/80x80/?villa,beach",
        location: "Los Angeles, USA",
      },
      {
        title: "Luxury Home in Miami",
        image: "https://source.unsplash.com/80x80/?luxury,house",
        location: "Miami, USA",
      },
    ];
  
    return (
      <div className="bg-white p-4 shadow rounded w-full md:w-72 my-6">
        <h2 className="text-lg font-bold mb-4 text-slate-800">Trending Houses</h2>
        <ul className="space-y-4">
          {houses.map((house, index) => (
            <li key={index} className="flex items-center space-x-3">
              <img
                src={house.image}
                alt={house.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-800">{house.title}</p>
                <p className="text-xs text-slate-500">{house.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SidebarRight;
  