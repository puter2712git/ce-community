import NavLink, { INavLink } from './NavLink';

const links: (INavLink & { id: number })[] = [
  { id: 1, href: '/board', children: '게시판' },
  { id: 2, href: '/project', children: '프로젝트' },
];

export default function Navigator() {
  return (
    <nav className="flex flex-row h-full">
      {links.map((link) => (
        <NavLink key={link.id} href={link.href}>
          {link.children}
        </NavLink>
      ))}
    </nav>
  );
}
