import ComputersCanvas from "./canvas/Computers"

const Hero3d = () => {
  return (
    <section className="relative min-h-screen">
    <div className="absolute top-[121px] z-20 mx-auto max-w-7xl pl-12">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
            {" "}
           Hi, I&apos;m Zaki Orya{" "}
          </span>
        </h1>
        <p className="mt-5 text-base text-white sm:text-xl">
         I develope Web applications and Modern user interfaces 
        </p>
      </div>
    </div>
    <ComputersCanvas/>
  </section>
  )
}

export default Hero3d