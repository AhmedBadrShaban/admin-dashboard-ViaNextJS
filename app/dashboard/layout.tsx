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
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full md:w-56 bg-white">
                <SideNav></SideNav>
            </div>
            <div className="flex-grow p-6 overflow-y-auto bg-gray-50">
                {children}
            </div>



        </div>

    )



}