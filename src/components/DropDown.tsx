'use client'

import { QueryRecord } from '@interfaces/interfaces'
import clsx from 'clsx'
import { Dispatch, useState } from 'react'

interface DropDownProps {
  current: string
  options: QueryRecord[]
  setCurrent: Dispatch<number>
}

export default function DropDown(props: DropDownProps) {
  const [active, setActive] = useState<boolean>(false)
  const { current, options, setCurrent } = props

  const setCurrentAndClose = (index: number) => {
    setCurrent(index)
    setActive(false)
  }

  return (
    <div className="relative inline-block min-w-56">
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-between rounded-[5px] px-5 py-[13px] text-base font-medium bg-frappe text-paper w-full"
      >
        {current}
        <span className="pl-4">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('fill-current', active ? 'rotate-180' : '')}
          >
            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
          </svg>
        </span>
      </button>

      <div
        className={clsx(
          'absolute left-0 z-40 mt-2 w-full rounded-md bg-coffee text-cream py-[10px] transition-all',
          active
            ? 'top-full opacity-100 visible'
            : 'top-[110%] invisible opacity-0'
        )}
      >
        {options.map((entry, index) => {
          return (
            <DropdownItem
              key={entry.name}
              label={entry.name}
              index={index}
              setCurrent={setCurrentAndClose}
            />
          )
        })}
      </div>
    </div>
  )
}

const DropdownItem = ({
  label,
  index,
  setCurrent,
}: {
  label: string
  index: number
  setCurrent: Dispatch<number>
}) => {
  return (
    <button
      onClick={() => setCurrent(index)}
      className="hover:bg-paper hover:text-tea block w-full text-left px-5 py-1 text-base"
    >
      {label}
    </button>
  )
}
