import {v4 as uuid} from "uuid";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../assets/svgs/logo";
import Sun from "../../assets/svgs/sun";
import Moon from "../../assets/svgs/moon";
import { useEffect, useState } from "react";

const Nav = () => {
  const {pathname} = useRouter();
  const [theme, setTheme] = useState<"light"|"dark">("light")
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme !== null && setTheme(savedTheme as "light" | "dark");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetTheme = () => {
    const newTheme = theme === "light" ? "dark": "light"
    setTheme(newTheme);
    document.documentElement.classList[
      newTheme === "dark" ? "add" : "remove"]("dark");
    localStorage.setItem("theme", newTheme);
  }
 
  const links = [
    {path: "/", text: "Home"},
    {path: "/Projects", text: "Projects"},
    {path: "/About-Us", text: "About Us"},
    {path: "/Contact-Us", text: "Contact Us"}
  ]

  const navLinks = links.map(({path, text}) => {
    return <li className={`whitespace-nowrap  ${pathname === path && "text-green-100"}`} key={uuid()}>
      <Link href={path}>{text}</Link>
      <div className={`border-b-1px ${pathname === path ? "border-green-100 w-1/2" : "w-0"}`} />
    </li>
  })

  return <div className="flex text-blue-400 dark:text-white bg-grey-100 dark:bg-blue-900 px-10 md:px-24 h-20">
    <h3 className="mr-20 font-black flex items-center"> <Logo /> <span className="font-normal">Free</span>Merch</h3>
    <ul className="mx-4 space-x-14 md:flex hidden items-center">
      {navLinks}
    </ul>
    <div className="w-full flex justify-end items-center">
      <button onClick={handleSetTheme} className="text-end cursor-pointer">
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  </div>
}

export default Nav;