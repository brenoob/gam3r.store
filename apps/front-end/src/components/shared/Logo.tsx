import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        height={60} // Altura da imagem
        width={60}  // Largura da imagem
        priority
        alt="Logo"
      />
      <Image
        src="/logo-texto.png"
        width={230} // Ajuste para a largura desejada
        height={60} // Defina a altura para manter a proporção
        priority
        alt="Texto do logo"
      />
    </Link>
  );
}
