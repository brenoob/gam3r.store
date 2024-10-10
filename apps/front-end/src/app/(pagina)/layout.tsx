import Pagina from "@/components/template/Pagina";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <Pagina>
            {props.children}
        </Pagina>
    )
}