import  type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Oldal nem található",
}

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center">
        <h1 className='text-5xl font-bold text-center mt-20'>404 - Az oldal nem található!</h1>
    </div>
  )
}

export default NotFound