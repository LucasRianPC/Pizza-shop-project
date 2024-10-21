import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue";
import { MonthOrdersAmounthCard } from "./month-orders-amounth-cards";
import { DaysOrderAmounthCard } from "./day-orders-amounth-card";
import { MonthCanceledOrdersAmounthCard } from "./month-canceled-orders-amounth-card";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-charts";

export function Dashboard() {
    return (
        <div>
            <Helmet title="Dashboard" />
           <div className="flex flex-col gap-4">
            <h1 className="text-lxl font-bold tracking-tiht text-3xl ">Dashboard</h1>

            <div className="grid grid-cols-4 gap-4">
               <MonthRevenueCard />
               <MonthOrdersAmounthCard /> 
               <DaysOrderAmounthCard />
               <MonthCanceledOrdersAmounthCard />
            </div>
            <div className="grid grid-col-9 gap-4">
                <RevenueChart />
                <PopularProductsChart />
            </div>
           </div>
        </div>
    )
}