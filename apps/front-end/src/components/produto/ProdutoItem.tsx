"use client";
import { Produto } from "@gstore/core";
import { useButtonSize } from "@/data/hooks/UseButtonSize";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import NotaReview from "../shared/NotaReview";

export interface ProdutoItemProps {
  produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonWidth = useButtonSize(buttonRef);

  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <NotaReview nota={produto.nota} />
      </div>
      <div className="h-48 w-full relative">
        <Image
          src={produto.imagem}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          alt={`imagem do produto ${produto.nome}`}
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
        <span className="text-lg font-semibold">{produto.nome}</span>
        <span className="text-sm border-b border-dashed self-start">
          {produto.especificacoes.destaque}
        </span>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {produto.precoBase}
          </span>
          <span className="text-lg font-semibold text-emerald-400">
            por {produto.precoPromocional}
          </span>
          <button
            ref={buttonRef}
            onClick={(e: any) => {
              e.preventDefault();
              console.log("adicionar ao carinho");
            }}
            className="flex bg-violet-700 p-2 rounded-full text-white gap-2 items-center justify-center"
          >
            <Icon icon="tabler:shopping-cart" />
            <span>
              {buttonWidth !== null && buttonWidth < 215
                ? "Adicionar"
                : "Adicionar ao carrinho"}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
