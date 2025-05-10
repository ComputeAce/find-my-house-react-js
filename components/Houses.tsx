import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const houses = [
  {
    title: "Website Review Check",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
    description:
      'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main nightlife in Barcelona.',
    user: {
      name: "Alice Johnson",
      profile: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "May 5, 2025",
    },
  },
  {
    title: "Modern Studio in Tokyo",
    image:
      "https://images.unsplash.com/photo-1560448075-bb00e58e51a5?auto=format&fit=crop&w=800&q=80",
    description:
      "Located in the heart of Tokyo, this modern studio offers quick access to the subway and shopping districts.",
    user: {
      name: "Kenji Tanaka",
      profile: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "May 6, 2025",
    },
  },
  {
    title: "Cozy Farmhouse in Tuscany",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9b78836?auto=format&fit=crop&w=800&q=80",
    description:
      "A peaceful retreat in the hills of Tuscany, surrounded by vineyards and olive trees.",
    user: {
      name: "Maria Rossi",
      profile: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "May 4, 2025",
    },
  },
  {
    title: "Beachfront Escape in Bali",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description:
      "Wake up to the sound of waves in this beautiful beachfront villa in Bali.",
    user: {
      name: "Adi Nugroho",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "May 2, 2025",
    },
  },
  {
    title: "Luxury Condo in Dubai",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the best of Dubai with this high-rise luxury condo featuring skyline views.",
    user: {
      name: "Fatima Al Zahra",
      profile: "https://randomuser.me/api/portraits/women/22.jpg",
      date: "May 1, 2025",
    },
  },
];

const HousePost = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {houses.map((house, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg"
          >
            <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {house.title}
              </h6>
              <p className="text-slate-600 leading-normal font-light">
                {house.description}
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <img
                  src={house.user.profile}
                  alt={house.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-slate-800">{house.user.name}</p>
                  <p className="text-xs text-slate-500">{house.user.date}</p>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <div className="px-4 pb-4 pt-0 mt-2">
              <Link href="/dashboard">Dashboard</Link>
 
            </div>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousePost;
