import { Icon } from '@iconify/react/dist/iconify.js'

export interface NotaReviewProps {
    nota: number
    tamanho?: number
}

export default function NotaReview(props: NotaReviewProps) {
    const estrelas = []
    for (let i = 1; i <= 5; i++) {
        if (props.nota >= i) {
            estrelas.push(<Icon key={i} icon="tabler:star-filled" width={props.tamanho ?? 12} />)
        } else if (props.nota >= i - 0.5) {
            estrelas.push(<Icon key={i} icon="tabler:star-half-filled" width={props.tamanho ?? 12} />)
        } else {
            estrelas.push(<Icon key={i} icon="tabler:star" width={props.tamanho ?? 12} />)
        }
    }

    return <div className="flex gap-0.5 text-emerald-400">{estrelas}</div>
}

