import usePercentual from '@/data/hooks/usePercentual';
import { Produto } from '@gstore/core'
import { Icon } from '@iconify/react/dist/iconify.js'

export interface MedidorDePrecoProps {
    produto: Produto
}

export default function MedidorDePreco(props: MedidorDePrecoProps) {
    const {
        menorPreco: minimo,
        maiorPreco: maximo,
        precoPromocional: atual,
        precoMedio: media,
    } = props.produto

    // TODO: Mover calculo para o @gstore/core
    const percentual = usePercentual(atual, media, maximo, minimo);

    return (
        <div className="flex flex-col border border-white/10 p-7 rounded-xl gap-4 bg-violet-dark">
            <div className="flex items-center gap-2">
                {percentual >= 40 && percentual < 60 ? (
                    <Icon icon="tabler:mood-confuzed" width={40} strokeWidth={1.5} className="text-yellow-500" />
                ) : percentual >= 60 ? (
                    <Icon icon="tabler:mood-sad" width={40} strokeWidth={1.5} className="text-red-500" />
                ) : (
                    <Icon icon="tabler:mood-happy" width={40} strokeWidth={1.5} className="text-green-500" />
                )}
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <span>O preço do produto está </span>
                        <div className="font-bold">
                            {percentual >= 40 && percentual < 60 ? (
                                <span className="text-yellow-500">na média</span>
                            ) : percentual >= 60 ? (
                                <span className="text-red-500">acima da média</span>
                            ) : (
                                <span className="text-green-500">abaixo da média</span>
                            )}
                        </div>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        Com base no preço dos últimos <span className="text-white">30 dias</span>.
                    </div>
                </div>
            </div>

            <div
                className="
                    flex items-center h-2 bg-gradient-to-r 
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-2 border-black
                "
            >
                <div
                    className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                    style={{
                        left: `${percentual}%`,
                    }}
                >
                    <Icon icon="tabler:chevron-down" width={20} className="absolute text-white -mt-8" />
                    <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
