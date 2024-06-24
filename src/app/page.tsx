import Link from "next/link";

export default function Home() {
  const links_kadai = [
    {
      title: "課題1",
      href: "/kadai1",
    },
    {
      title: "課題2",
      href: "/kadai2",
    },
    {
      title: "課題3",
      href: "/kadai3",
    },
    {
      title: "課題4",
      href: "/kadai4",
    },
    {
      title: "課題5",
      href: "/kadai5",
    },
    {
      title: "課題6",
      href: "/kadai6",
    },
    {
      title: "課題7",
      href: "/kadai7",
    },
    {
      title: "課題8",
      href: "/kadai8",
    },
    {
      title: "課題9",
      href: "/kadai9",
    },
    {
      title: "課題10",
      href: "/kadai10",
    },
  ];

  return (
    <div>
      <h1>Home</h1>

      {links_kadai.map((link) => (
        <div key={link.title}>
          <Link href={link.href}>
            <p>{link.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
