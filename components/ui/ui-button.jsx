import clsx from 'clsx';

/**
 * @param { className:String, children: any, size: 'md' | 'lg', variant: 'primary' | 'outline'} props 
 * @returns jsx
 */

export default function UiButton({
  className,
  children,
  size,
  variant,
}) {
  const buttonClassName = clsx(
    'transition-colors border',
    className,
    {
      md: 'px-6 py-2 text-sm rounded leading-4',
      lg: 'px-5 py-2 text-xl rounded-lg ',
    }[size],
    {
      primary: 'bg-teal-600 hover:bg-teal-500 text-white',
      outline: 'bg-white hover:bg-teal-50 text-teal-600 border border-teal-600',
    }[variant],
  );
  return (
    <button className={clsx(buttonClassName)}>
      {children}
    </button>
  );
}
