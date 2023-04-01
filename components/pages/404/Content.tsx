import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
    <div className="flex flex-col gap-6 items-center py-36 px-12 md:px-0">
        <FontAwesomeIcon icon={faFaceFrownOpen} className="h-24 w-24 text-gray-400" />
        <h3 className="text-4xl">Page not found</h3>
        <p className="text-center">The link you followed may be broken, or the page may have been removed.</p>
    </div>
  )
}

export default Content