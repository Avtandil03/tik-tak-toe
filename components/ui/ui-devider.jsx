import clsx from "clsx"

export function UiDevider({className}) {
  return (
    <div className={clsx(className +' h-8 w-px bg-slate-200')}></div>
  )
}
