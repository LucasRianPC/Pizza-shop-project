import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"

const SignUpForm = z.object({
    managerName: z.string(),
    restaurantName: z.string(),
    phone: z.number(),
    email: z.string().email(),
})

type signUpForm = z.infer<typeof SignUpForm>

export function SignUp() {
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {isSubmitting}} = useForm<signUpForm>()

    async function handleSignUp(data: signUpForm) {
        try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

         toast.success('Restaurante cadastrado com sucesso.', {
            action: {
                label: 'Login',
                onClick: () =>navigate('/sign-in'),
            },
        }) 
        } catch {
            toast.error('Erro ao cadastrar.')
        }
    } 


    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
            <Button variant={"destructive"} asChild className="absolute right-8 top-3">
                <Link to="/sign-in"> Fazer login </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar conta gratis</h1>
                        <p className="text-sm text-muted-foreground">Seja um parceiro</p>
                    </div>

                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Nome do proprietario</Label>
                            <Input id="managerName" type="text" {...register('managerName')} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do restaurante</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" type="tel" {...register('phone')} />
                        </div>

                        <div className="space-y-2">
                            <Label>Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>

                        
                        <Button  disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar voce concorda com nossos <a className="underline underline-offset-4" href="#">termos de politica e privacidade</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}