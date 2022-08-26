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
    <Link href={href}>
      <span className={classNames}>
        {children}
      </span>
    </Link>
}

export const GreenButton = (props: IButton) =>{
  props = {...props, className: `${props.className} hover:bg-blue-300 text-white bg-green-100 `};
  return <Button {...props} />
}

export const WhiteButton = (props: IButton) => {
  props = {...props, 
    className: 
    `hover:bg-grey-100 hover:text-blue-900 dark:text-blue-400 
    dark:hover:text-white
    dark:bg-white dark:hover:bg-blue-400 bg-blue-400 text-white
    cursor-pointer
    ${props.className}`
  };
  return <Button {...props} />
}

export const WhiteButton2 = (props: IButton) => {
  props = {...props, 
    className: 
    `text-blue-400 
    bg-white hover:bg-blue-400 hover:text-white
    ${props.className}`
  };
  return <Button {...props} />
}


export const WhiteButton3 = (props: IButton) => {
  props = {...props, 
    className: 
    `text-blue-400 
    bg-grey-100 dark:text-white
    hover:bg-blue-400
    hover:text-white
    dark:bg-blue-400
    ${props.className}`
  };
  return <Button {...props} />
}

export const GreenBorderButton = ({children, className}: IButton) => 
  <button className={`
    bg-transparent border-green-100 border-1px text-grey-500
   dark:text-white py-4 px-8 rounded-md ${className} mb-4
  `}>
    {children}
  </button>
