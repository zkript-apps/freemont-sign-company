import React from 'react'

const Header = ({ title }: { title: string }) => {
  return (
    <div className="bg-[url('/bg-top.png')] py-16">
        <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
    </div>
  )
}

export default Header