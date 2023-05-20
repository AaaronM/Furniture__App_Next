import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-[70px]">Hello MAIN PAGE</p>
      <Link href="/furniture"> furniture </Link>
    </div>
  );
}
