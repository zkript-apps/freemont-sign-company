"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Menu = ({ name, url, subMenu }: { name: string, url: string, subMenu: { name: string, url: string }[] }) => {
    const pathname = usePathname();
    const [isHover, toggleHover] = React.useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.2,
            },
            transitionEnd: {
                display: "none"
            }
        }
    };
    return (
        <motion.div
            className="z-50"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
        >
            <Link href={url} className={`font-semibold text-sm group-hover:text-giants-orange ${pathname === url ? "text-giants-orange" : ""}`} onClick={() => toggleHoverMenu()}>{name}</Link>
            {subMenu.length > 0 && (
                <motion.div
                    className="bg-white shadow-md py-4 absolute"
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={subMenuAnimate}
                >
                    <div className="flex flex-col">
                        {subMenu.map((item, index) => {
                            return <a href={item.url} onClick={() => toggleHoverMenu()} className="text-black hover:bg-giants-orange hover:text-white px-6 py-2 text-sm" key={index}>{item.name}</a>
                        })}
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Menu