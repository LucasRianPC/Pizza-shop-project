import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors'
import { Line, LineChart, ResponsiveContainer, YAxis, XAxis, CartesianGrid } from "recharts";

const data = [
    {date: '11/12', revenue:1200},
    {date: '12/12', revenue:200},
    {date: '13/12', revenue:800},
    {date: '14/12', revenue:200},
    {date: '15/12', revenue:12},
    {date: '16/12', revenue:120}
]

export function RevenueChart() {
    return (
        <div>
            <Card className="col-span-6">
                <CardHeader className="flex-row items-center justify-between pb-8">
                        <div className="space-y-1">
                            <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                            <CardDescription>Receita diaria no periodo</CardDescription>
                        </div>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart data={data} style={{fontSize: 12}}>
                           <XAxis dataKey='date' tickLine= {false} axisLine={false}  dy={16} />
                           
                           <YAxis stroke="#888"  tickLine={false}  axisLine={false} tickFormatter={(value:number) => value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}/>
                           <CartesianGrid vertical={false} className="stroke-muted"/>
                           
                            <Line type='linear' strokeWidth={2} dataKey='revenue' stroke={colors.violet['500']}/>
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}