import Link from "next/link";
function Item(props: { className?: string; src: string; href: string }) {
  return (
    <Link className={props.className} href={props.href}>
      <picture>
        <img className="w-6 h-6" src={props.src} />
      </picture>
    </Link>
  );
}
export function Sidebar() {
  return (
    <aside
      style={{
        height: "calc(100vh - 48px)",
      }}
      className="py-4 border-r flex flex-col justify-center items-center  duration-150 sticky  top-12 px-2 gap-4"
    >
      <Item src="/images/dashboard.png" className="mt-auto" href="/" />
      <Item src="/images/settings.png" className="mt-auto" href="/settings" />
    </aside>
  );
}
