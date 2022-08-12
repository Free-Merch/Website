
const arrow = (classes: string) => <div className={`${classes} 
  z-[1]
  border-b-green-100 border-b-[10px] 
    border-x-transparent
    border-t-0
    rounded
    border-x-[10px] w-0 h-0`}></div>;
const rect = <div className="h-[19px] z-[2] text-[10px] text-center">New</div>

export const verticalLabel =
  <div className="relative rounded w-[38px] bg-green-100">
    { arrow("absolute left-1/2 -translate-x-2/4 -translate-y-2/4") }
    { rect }
  </div>


export const horizontalLabel =   
  <div className="relative rounded w-[38px] bg-green-100">
    { arrow("absolute top-1/2 -translate-y-2/4 -rotate-90 -translate-x-2/4") }
    { rect }
  </div>