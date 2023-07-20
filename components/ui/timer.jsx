import clsx from "clsx";

export default function Timer({className}) {
  return (
    <div className={clsx(className + ' text-slate-900 text-lg font-semibold')} >01:08</div>
  )
}
