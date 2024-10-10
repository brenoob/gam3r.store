import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

export interface ProdutoNaoEncontradoProps {
    semBotaVoltar?: boolean
}

export default function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-violet-300">
            <Icon icon="tabler:devices-pc-off" width={180} strokeWidth={0.5} />
            <span className="text-violet-300 font-light">Produto não encontrado</span>
            {!props.semBotaVoltar && (
                <Link href="/" className="button bg-violet-700 text-white mt-5">
                    Voltar
                </Link>
            )}
        </div>
    )
}
