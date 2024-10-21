import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { BarChart } from "lucide-react";
import colors from "tailwindcss/colors";

const data = [
    {products: 'Pepperoni', amount:10},
    {products: 'mussarela', amount:40},
    {products: 'marguerita', amount:80},
    {products: 'portuguesa', amount:20},
    {products: 'frango c/ catupiry', amount:12},
   
]

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export function PopularProductsChart() {
    return (
        <div>
            <Card className="col-span-3">
                <CardHeader className="pb-8">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
                            <BarChart className="w-4 h-4 text-muted-foreground" />
                        </div>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width='100%' height={240}>
                        <PieChart  style={{fontSize: 12}}>
                         <Pie 
                         data={data}
                          dataKey="amount" 
                          nameKey="products"
                          cx="50%" cy="50%"
                          outerRadius={86}
                          innerRadius={64}  
                          strokeWidth={8}
                          labelLine={false}
                          label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index,
                          }) => {
                            const RADIAN = Math.PI / 180
                            const radius = 12 + innerRadius + (outerRadius - innerRadius)
                            const x = cx + radius * Math.cos(-midAngle * RADIAN)
                            const y = cy + radius * Math.sin(-midAngle * RADIAN)
                          
                            return (
                              <text
                                x={x}
                                y={y}
                                className="fill-muted-foreground text-xs"
                                textAnchor={x > cx ? 'start' : 'end'}
                                dominantBaseline="central"
                              >
                                {data[index].products.length > 12
                                  ? data[index].products.substring(0, 12).concat('...')
                                  : data[index].products}{' '}
                                ({value})
                              </text>
                            )
                          }}
                         >
                            {data.map((_, index) => {
                                return (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80"/>
                                )
                            })}
                        </Pie> 
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}