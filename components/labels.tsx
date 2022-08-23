
const arrow = (classes: string) => <div className={`${classes} 
  z-[1]
  border-b-green-100 border-b-[10px] 
    border-x-transparent
    border-t-0
    rounded-xl
    border-x-[10px] w-0 h-0`}></div>;
const rect = <div className="h-[19px] text-white z-[2] text-[10px] flex items-center justify-center text-center"> Ongoing </div>

export const verticalLabel =
  <div className="relative rounded w-[38px] bg-green-100 ">
    { arrow("absolute left-1/2 -translate-x-2/4 -translate-y-2/4") }
    { rect }
  </div>


export const horizontalLabel =   
  <div className="relative rounded px-[8px] py-[2px] bg-green-100">
    { arrow("absolute top-1/2 left-0 -translate-y-2/4 -rotate-90 -translate-x-[11px]") }
    { rect }
  </div>