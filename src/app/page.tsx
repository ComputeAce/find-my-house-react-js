import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Houses from "../../components/Houses";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRigh";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Left Sidebar */}
          <div className="hidden md:block col-span-1">
            <SidebarLeft />
          </div>

          {/* Main Content */}
          <div className="col-span-2">
            <Houses />
          </div>

          {/* Right Sidebar */}
          <div className="hidden md:block col-span-1">
            <SidebarRight />
          </div>

        </div>
      </div>
    </>
  );
}
