const SidebarLeft = () => {
    const agents = [
      {
        name: "Timothy",
        image:
          "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Sarah",
        image:
          "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Michael",
        image:
          "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Emily",
        image:
          "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ];
  
    return (
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full md:w-72 p-6">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-slate-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <h5 className="ml-3 text-slate-800 text-xl font-semibold">
            Trending Agents
          </h5>
        </div>
  
        <div className="space-y-4">
          {agents.map((agent, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center text-slate-800 font-semibold text-sm hover:underline"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-8 h-8 rounded-full mr-3 object-cover"
              />
              <span>{agent.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default SidebarLeft;
  