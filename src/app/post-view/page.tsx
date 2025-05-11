import Navbar from "../../../components/Navbar";
import SidebarLeft from "../../../components/SidebarLeft";
import SidebarRight from "../../../components/SidebarRigh";
import PostView from "../../../components/PostView";

export default function Dashboard() {
  return (
    <>
      <Navbar/>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Left Sidebar */}
          <div className="hidden md:block col-span-1">
            <SidebarLeft />
          </div>

          {/* Main Content */}
          <div className="col-span-2">
            <PostView />
          </div>

          {/* Right Sidebar */}
          <div className="hidden md:block col-span-1">
            <SidebarRight />
          </div>

        </div>
      </div>
    </>

  )
}