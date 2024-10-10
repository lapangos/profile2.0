import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2D2E32] text-white font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <nav className="space-x-6">
          <Link href="#services" className="text-yellow-400">
            Services
          </Link>
          <Link href="#works">Works</Link>
          <Link href="#blog">Blog</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center justify-between py-16">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Carlos Mendoza.</h1>
            <p className="text-xl mb-6">
              Product Designer and Developer, based in Canada.
            </p>
            <p className="text-gray-400 mb-6">
              I design and code beautifully simple things, and I love what I do.
            </p>
            <Link href="#" className="text-yellow-400">
              My story →
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Carlos Mendoza"
              className="rounded-full"
            />
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">
            You can't use up creativity, the more you use, the more you have in
            your significant mind.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-yellow-400 text-lg font-bold mb-2">14</h3>
              <p className="text-sm">Years of experience</p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-lg font-bold mb-2">187</h3>
              <p className="text-sm">Projects completed on 15 countries</p>
            </div>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-400 p-8 rounded-lg">
            <h3 className="text-black text-xl font-bold mb-4">
              Product Designer
            </h3>
            <p className="text-black text-sm">137 Projects</p>
          </div>
          <div className="bg-[#3F4044] p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Branding Designer</h3>
            <p className="text-sm">137 Projects</p>
          </div>
          <div className="bg-[#3F4044] p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Full Stack Developer</h3>
            <p className="text-sm">137 Projects</p>
          </div>
        </section>

        <section className="py-16">
          <div className="flex justify-between items-center mb-8">
            {[
              "IBM",
              "IBM Watson",
              "The Economist",
              "LONGREAD",
              "BBC AMERICA",
              "Medium",
              "Tumblr",
            ].map((company, index) => (
              <div key={index} className="text-gray-500 text-sm">
                {company}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">
            All Creative Works, Selected projects.
          </h2>
          <Link href="#" className="text-yellow-400 mb-8 inline-block">
            Explore more →
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Seone.</h3>
              <p className="text-sm text-gray-400">Product, Development</p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">BeServer.</h3>
              <p className="text-sm text-gray-400">Branding, Product</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">
            What's new? My blog and news.
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p>How to use time tracking for projects?</p>
              <Link href="#" className="text-yellow-400">
                →
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <p>Ego and empathy in design</p>
              <Link href="#" className="text-yellow-400">
                →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 flex items-center">
          <Image
            src="/placeholder.svg?height=100&width=100"
            width={100}
            height={100}
            alt="Testimonial"
            className="rounded-full mr-8"
          />
          <div>
            <p className="italic mb-4">
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet."
            </p>
            <p className="font-bold">Jesse Showalter</p>
            <p className="text-sm text-gray-400">Digital Designer</p>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Got a project? Let's talk.
            </h2>
            <p className="text-gray-400 mb-4">
              Tell me about your project and I'll get in touch with you.
            </p>
            <Link href="#" className="text-yellow-400">
              hi@carlosmendoza.com →
            </Link>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="What's your name?"
              className="w-full bg-[#3F4044] p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your fancy email"
              className="w-full bg-[#3F4044] p-2 rounded"
            />
            <textarea
              placeholder="Tell me about your project"
              className="w-full bg-[#3F4044] p-2 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded"
            >
              →
            </button>
          </form>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <p className="text-sm text-gray-400">
          © 2023 Carlos Mendoza. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="#">
            <Facebook size={20} />
          </Link>
          <Link href="#">
            <Twitter size={20} />
          </Link>
          <Link href="#">
            <Instagram size={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
