import React, { FC, PropsWithChildren } from "react"

const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius:'10px',
      padding: '10px',
    }}>
      { children }
    </div>
  )
}

export default DarkLayout