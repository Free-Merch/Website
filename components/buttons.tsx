import Link from "next/link";

interface IButton {
  children: string,
  className?: string
  href?: string
}

const Button = ({children, className, href}: IButton) => {
  const classNames = `${className} py-[14px] px-[32px] rounded-md  cursor-pointer`;
  return !href ? 
    <button className={classNames}>
      {children}
    </button> :
    <span className={classNames}>
      <Link href={href}>
        {children}
      </Link>
    </span>
}

export const GreenButton = (props: IButton) =>{
  props = {...props, className: `${props.className} text-white bg-green-100  border-1px border-green-100 `};
  return <Button {...props} />
}

export const WhiteButton = (props: IButton) => {
  props = {...props, className: `dark:text-blue-400 dark:bg-white bg-blue-400 text-white border-1px border-white ${props.className}`};
  return <Button {...props} />
}


export const GreenBorderButton = ({children, className}: IButton) => 
  <button className={`
    bg-transparent border-green-100 border-1px text-grey-500
   dark:text-white py-4 px-8 rounded-md ${className} mb-4
  `}>
    {children}
  </button>
