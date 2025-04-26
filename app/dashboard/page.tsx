import Card from "../ui/dashboard/cards"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { fetchRevenue } from "../lib/data"





 
 export default async function DashboardPage(){
    const revenue = await fetchRevenue();

    return (
        <> 

          <header className="flex p-4 flex-row justify-between items-center mb-8">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex flex-col">
                <input
                  type="date"
                  id="from-date"
                  name="from-date"
                  className="w-full rounded-md border border-gray-300   text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  id="to-date"
                  name="to-date"
                  className="w-full rounded-md border border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
          </div>

          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8 ">
          <Card title="Title" type="heart" value={1}></Card>
          <Card title="Title2" type="collected" value={12}></Card>
          <Card title="Title3" type="pending" value={13}></Card>
          <Card title="Title4" type="customers" value={14}></Card>
          </div>
          <div className="flex flex-col gap-8">

          <div className="grid grid-cols-5 w-full gap-8">
            <div className="col-span-3 "> 
              <RevenueChart revenue={revenue}/>
            </div>
            <div className="col-span-2 bg-black">Right</div>
          </div>

          <div className="grid grid-cols-5 w-full gap-8">
            <div className="col-span-3 bg-blue-300">Left</div>
            <div className="col-span-2 bg-black">Right</div>
          </div>


          </div>
        </>
    )
}