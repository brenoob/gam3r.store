import { calcularPercentual, CalcularPercentualProps } from '@gstore/core';

export default function usePercentual(
    atual: number,
    media: number,
    maximo: number,
    minimo: number
): number {
    const props: CalcularPercentualProps = { atual, media, maximo, minimo };
    return calcularPercentual(props);
}
