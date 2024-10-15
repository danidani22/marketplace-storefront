import clsx from 'clsx'
import Image from 'next/image'

export default function Button({
  icon,
  value,
  clickHandler,
}: {
  icon: string
  value?: number
  clickHandler: () => void
}) {
  return (
    <button
      className="relative size-12 rounded-full hover:bg-tea"
      onClick={clickHandler}
    >
      <Image
        src={`/svg/${icon}.svg`}
        alt={icon + ' Icon'}
        width={24}
        height={24}
        className="mx-auto"
      />

      <div
        className={clsx(
          value ? 'flex' : 'hidden',
          'absolute top-0 right-0 size-5 justify-center items-center rounded-full bg-cream text-cookie text-xs font-bold'
        )}
      >
        {value}
      </div>
    </button>
  )
}
