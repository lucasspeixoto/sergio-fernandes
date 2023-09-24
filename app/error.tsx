'use client' 
 
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Desculpa, algo deu errado!
        </p>
        <p className="mb-8">Tente acessar novamente</p>
       {/*  <Link
					isExternal
					as={NextLink}
					href="/"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Voltar ao início
				</Link> */}
      </div>
    </div>
  )
}