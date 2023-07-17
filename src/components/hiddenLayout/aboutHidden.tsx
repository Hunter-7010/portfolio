import Image from "next/image";
const AboutHidden = () => {
  return (
    <section className="min-h-screen px-2 text-white" id="about">
      <div>
        <p className="opacity-70">Introduction</p>
      </div>
      <h2 className="text-5xl font-black">Overview.</h2>
      <p className="mt-4 max-w-4xl leading-[30px] opacity-70">
        I am an experienced software developer proficient in JavaScript,
        TypeScript, and Python. I have worked with frameworks like React,
        Next.js, Node.js, and Three.js. My skills have allowed me to build
        innovative and dynamic applications. With my diverse skill set, I am
        capable of working on a variety of software projects and developing
        unique solutions. I am passionate about creating software that pushes
        the boundaries of what is possible.
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        <div className="m-2 w-full rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm sm:w-[250px]">
          <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
            <Image width={64} height={64} src="/web.png" alt="web image" />
            <h3 className="mt-6 text-lg font-bold">Web Developer</h3>
          </div>
        </div>

        <div className="m-2 w-full rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm sm:w-[250px]">
          <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
            <Image width={64} height={64} src="/backend.png" alt="web image" />
            <h3 className="mt-6 text-lg font-bold">Backend Developer</h3>
          </div>
        </div>
        <div className="m-2 w-full rounded-xl bg-gradient-to-r from-purple-600 via-blue-50 to-purple-900 bg-[length:400%_400%] p-[3px] shadow-xl hover:shadow-sm sm:w-[250px]">
          <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[10px] p-4 sm:p-6">
            <Image
              width={64}
              height={64}
              src="/innovation.png"
              alt="web image"
            />
            <h3 className="mt-6 text-lg font-bold">technology enthusiast</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHidden;
