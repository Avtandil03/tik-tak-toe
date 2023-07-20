import clsx from "clsx"

export default function Devider({className}) {
  return (
    <div className={clsx(className +' h-8 w-px bg-slate-200')}></div>
  )
}
