import clsx from 'clsx';
import React from 'react';

export default function ZeroIcon({ className = 'text-[#0D9488]' }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g clip-path="url(#clip0_1217_497)">
        <path
          d="M6.00002 0C2.68629 0 0 2.68629 0 6.00002C0 9.31374 2.68629 12 6.00002 12C9.31374 12 12 9.31374 12 6.00002C12 2.68629 9.31371 0 6.00002 0ZM6.00002 10.5C3.51475 10.5 1.50001 8.48529 1.50001 6.00002C1.50001 3.51475 3.51475 1.50001 6.00002 1.50001C8.48529 1.50001 10.5 3.51475 10.5 6.00002C10.5 8.48529 8.48529 10.5 6.00002 10.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1217_497">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
