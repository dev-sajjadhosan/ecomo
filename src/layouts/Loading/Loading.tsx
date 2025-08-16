export default function Loading() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <div className="w-11 h-11 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-5xl font-gorditas">Loading...</h1>
      </div>
    </>
  )
}
