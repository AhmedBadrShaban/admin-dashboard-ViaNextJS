import Card from "../ui/dashboard/cards"

 
 export default function DashboardPage(){
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
          <div className=" flex flex-col md:flex-row gap-8 mb-8 ">
          <Card title="Title" type="heart" value={1}></Card>
          <Card title="Title" type="collected" value={1}></Card>
          <Card title="Title" type="pending" value={1}></Card>
          <Card title="Title" type="customers" value={1}></Card>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row w-full gap-8">
              <div className="w-3/5 bg-blue-300" > Left</div>
              <div className="w-2/5 bg-black"> rIGHT </div>
            </div>
            <div className="flex flex-row w-full gap-8">
            <div className="w-3/5 bg-blue-300" >Left</div>
            <div className="w-2/5 bg-black"> Right</div>
            </div>

          </div>
        </>
    )
}