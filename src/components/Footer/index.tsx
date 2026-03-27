import Link from "next/link";

export function Footer() {
    return (
        <footer className="pb-16 text-center" >
            <p>
                Copyrigth &copy; {new Date().getFullYear()} -
                <Link href="/"> The Dev Blog. </Link >
                Todos os direitos reservados.
            </p >
        </footer >
    );
}