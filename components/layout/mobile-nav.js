import { useState } from 'react'

const MobileNav = ({ links }) => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="flex items-center justify-end lg:hidden">
      {!navShow && <button
        type="button"
        className="h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-purple"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>}
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-white bg-opacity-75 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-6 mt-9 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-purple"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {links.map((link) => (
            <div key={link.name} className="px-12 py-4">
              <a
                href={link.to}
                className="text-2xl font-bold text-purple"
                onClick={onToggleNav}
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav