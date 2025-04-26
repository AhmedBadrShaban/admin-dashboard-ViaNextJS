 import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

       <div className="w-full md:w-56 bg-white ">
       <SideNav />
       </div>
 
      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {children}
      </div>
    </div>
  );
}
