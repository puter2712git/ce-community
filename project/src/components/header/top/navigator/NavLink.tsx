import Link from 'next/link';

export interface INavLink {
  href: string;
  children?: React.ReactNode;
}

export default function NavLink(props: INavLink) {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="flex justify-center items-center w-[120px] h-full text-2xl font-thin hover:animate-fade"
    >
      {children}
    </Link>
  );
}
