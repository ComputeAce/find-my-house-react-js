const SidebarRight = () => {
  const houses = [
    {
      title: "Cozy Cottage in the Woods",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=80&h=80&fit=crop",
      location: "Vermont, USA",
      link: "/houses/cozy-cottage-in-the-woods",
    },
    {
      title: "Modern Apartment in NY",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=80&h=80&fit=crop",
      location: "New York, USA",
      link: "/houses/modern-apartment-in-ny",
    },
    {
      title: "Beachside Villa in LA",
      image:
        "https://images.unsplash.com/photo-1586105251261-72a756497a12?w=80&h=80&fit=crop",
      location: "Los Angeles, USA",
      link: "/houses/beachside-villa-in-la",
    },
    {
      title: "Luxury Home in Miami",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=80&h=80&fit=crop",
      location: "Miami, USA",
      link: "/houses/luxury-home-in-miami",
    },
  ];

  return (
    <div className="bg-white p-4 shadow rounded w-full md:w-72 my-6">
      <h2 className="text-lg font-bold mb-4 text-slate-800">Trending Houses</h2>
      <ul className="space-y-4">
        {houses.map((house, index) => (
          <li key={index}>
            <a
              href={house.link}
              className="flex items-center space-x-3 hover:bg-slate-100 p-2 rounded transition"
            >
              <img
                src={house.image}
                alt={house.title}
                className="w-12 h-12 rounded object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-medium text-slate-800">{house.title}</p>
                <p className="text-xs text-slate-500">{house.location}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarRight;
