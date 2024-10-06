// src/data/parcelamento/CalcularPercentual.ts
export interface CalcularPercentualProps {
    atual: number;
    media: number;
    maximo: number;
    minimo: number;
}

export default function calcularPercentual(
    { atual, media, maximo, minimo }: CalcularPercentualProps
): number {
    if (atual > media) {
        return ((atual - media) / (maximo - media)) * 50 + 50;
    } else {
        return (1 - (media - atual) / (media - minimo)) * 50;
    }
}
