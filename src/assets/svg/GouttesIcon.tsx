import * as React from 'react';

export const GouttesIcon = ({
  height = 'auto',
  width = '30',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3146 14.9158L5.01148 11.6053"
      stroke="#AAD7FF"
      stroke-width="4.75901"
      stroke-linecap="round"
    />
    <path
      d="M16.7942 24.6688L10.7986 28.8344"
      stroke="#AAD7FF"
      stroke-width="4.75901"
      stroke-linecap="round"
    />
    <path
      d="M23.4427 8.27073L20.8555 5.12337"
      stroke="#AAD7FF"
      stroke-width="4.75901"
      stroke-linecap="round"
    />
  </svg>
);
