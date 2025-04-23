

export default async function DashboardLayout(
    {
        children ,
        params,
    }:{
        children:React.ReactNode,
        params:Promise<{team:string}>
    }
){
    const {team} = await params;
    console.log(team);

    return (
        <section>
            <header>Dashboard {team} Header </header>

            <main>{children}</main>
        </section>
    )



}