import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

//export interface OrderTableRowProps { }

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant='outline' size='xs'>
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-sm font-medium text-muted-foreground">
                345678IUHJBNK
            </TableCell>
            <TableCell className="text-muted-foreground">
                há 15 minutos
            </TableCell>
            <TableCell>
                
            </TableCell>
            <TableCell className="font-medium text-muted-foreground">
                Lucas Rian
            </TableCell>
            <TableCell className="font-medium text-muted-foreground">
                R$ 149,00
            </TableCell>
            <TableCell>
                <Button variant='outline' size='sm'>
                    <ArrowRight className="h-3 w-3 mr-2" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant='ghost' size='sm'>
                    <X className="h-3 w-3 mr-2" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}