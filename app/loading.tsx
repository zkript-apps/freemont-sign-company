import React from 'react'

const Loading = () => {
  return (
    <div className="p-96">
      <div className="flex w-full items-center justify-center bg-transparent">
        <div className="flex w-full items-center justify-center bg-transparent">
          <div className="from-giants-orange to-orange-400 flex h-12 w-12 animate-spin items-center justify-center rounded-full bg-gradient-to-tr">
            <div className="h-9 w-9 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading