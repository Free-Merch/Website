import * as React from "react"

const SvgComponent = (props: any) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 0a11 11 0 1 0 11 11c0-.562-.049-1.124-.122-1.662A6.586 6.586 0 0 1 16.5 12.1 6.604 6.604 0 0 1 12.662.122C12.124.05 11.562 0 11 0Z"
      fill="#0B1237"
    />
  </svg>
)

export default SvgComponent
