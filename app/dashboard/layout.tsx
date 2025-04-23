import SideNav from "../ui/dashboard/sidenav";



export default async function DashboardLayout(
    {
        children,
        params,
    }: {
        children: React.ReactNode,
        params: Promise<{ team: string }>
    }
) {
    const { team } = await params;
        // console.log(team);

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-400 ">
            <div className=" flex-none w-full md:w-1/6 bg-white">
                <SideNav></SideNav>
            </div>
            <div className="p-6 md:p-12 flex-grow overflow-y-auto ">
                {children}
            </div>



        </div>

    )



}