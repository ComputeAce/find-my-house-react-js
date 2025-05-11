const PostView = () => {
  const post = {
    title: "Modern Studio in Tokyo",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description:
      "Located in the heart of Tokyo, this modern studio offers quick access to the subway and shopping districts.",
    user: {
      name: "Kenji Tanaka",
      profile: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "May 6, 2025",
    },
  };

  return (
    <div className="container mx-auto my-8 px-4 max-w-4xl">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{post.title}</h1>
      <p className="text-slate-600 text-lg mb-6">{post.description}</p>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={post.user.profile}
          alt={post.user.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-medium text-slate-800">{post.user.name}</p>
          <p className="text-sm text-slate-500">{post.user.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostView;
