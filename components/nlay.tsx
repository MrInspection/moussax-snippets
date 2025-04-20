import {ReactNode} from "react";

type LayoutParams = {
  children: ReactNode
  params: Promise<{

  }>
}

export default  async function RouteLayout({children, ...props}: LayoutParams) {
  const params = await props.params;
  return {children}
}
