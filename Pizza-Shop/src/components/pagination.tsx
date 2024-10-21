import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

export interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
}

export function Pagination({ pageIndex, perPage, totalCount }: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">
                    Pagina {pageIndex + 1} de {pages}
                </div>

                <div className="flex items-center gap-2">
                    <Button variant='outline' className="h-8 w-8 p-7">
                        <ChevronsLeft className="h-4 w-4 absolute" />
                        <span className="sr-only">Primeria pagina</span>
                    </Button>

                    <Button variant='outline' className="h-8 w-8 p-7">
                        <ChevronLeft className="h-4 w-4 absolute" />
                        <span className="sr-only">Proxima pagina</span>
                    </Button>

                    <Button variant='outline' className="h-8 w-8 p-7">
                        <ChevronRight className="h-4 w-4 absolute" />
                        <span className="sr-only">Pagina anterior</span>
                    </Button>

                    <Button variant='outline' className="h-8 w-8 p-7">
                        <ChevronsRight className="h-4 w-4 absolute" />
                        <span className="sr-only">Ultima pagina</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}