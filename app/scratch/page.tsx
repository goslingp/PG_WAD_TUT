import React from 'react'
import Image from 'next/image';
import logo from '@/public/code_club_logo.jpg';
import scratchMore from '@/public/more-scratch.webp'
import scratchIntro from '@/public/scratch-intro.webp'
import scratchFurther from '@/public/further-scratch.webp'

const scratchPage = () => {
  return (
    <div className="container bg-pink-50 mx-auto px-10 rounded-xl border-4 border-dashed border-opacity-10 border-pink-800">
      
      <main>
        <article className="container clear-both bg-lime-400 mx-auto my-4 px-4 py-4 rounded-xl border-dashed border-4 border-opacity-20 border-green-900">
        
        <Image src={logo} alt="CodeClubLogo" className="h-12 w-12 rounded-xl float-left opacity-0 md:opacity-100"/>

          <header className="container bg-orange-200 mx-auto mt-4 p-4 rounded-xl w-4/5 border-2 border-opacity-50 shadow-lg border-orange-800">
            <h1 className="text-xl font-bold text-orange-800">Scratch</h1>
            <p className="m-4 text-lg">Begin your adventure in digital making by learning to code animations, stories and game in Scratch.</p>
          </header><br />

          <div id="panels" className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
          <section className="p-4  bg-orange-200 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-orange-800">
            <Image src={scratchIntro} alt ="scratchIntro" />
                       
              <h2 className="font-bold text-orange-800 text-xl pt-2">Introduction to Scratch</h2>              
              <h3 className="italic text-lg text-orange-700 m-1">Sprites, Scripts & Loops</h3>

              <p className="m-2">In this introduction to coding in Scratch for beginners, you will learn how to add code, costumes and sound to your sprites as you make animations, a game, an app and a book.</p><br />

                
            </section>

            <section className="p-4 bg-blue-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-blue-800">
              <Image src={scratchMore} alt="scratchMore" />
                <h2 className="font-bold text-blue-800 text-xl pt-2">More Scratch</h2>
                <h3 className="italic text-lg text-blue-700 m-1">Broadcast, Decisions & Variables</h3>  
                  
                  <p className="m-2">More Scratch moves beyond the basics introduced in Introduction to Scratch. You will make apps, games and simulations using messages broadcasting, if...then and if...then...else decisions and variables.</p><br />

              

            </section>

            <section className="p-4 bg-green-100 rounded-md mx-2 border-solid border-2 border-opacity-40 shadow-lg border-green-800">
              <Image src={scratchFurther} alt="scratchFurther" />
                <h2 className="font-bold text-green-800 text-xl pt-2">Further Scratch</h2>
                <h3 className="italic text-lg text-green-700 m-1">Clones, My Blocks and Boolean Logic</h3>

                  <p className="m-2">Further Scratch moves beyind the skills introduced in Introductions to Scratch and More Scratch. You will make apps, games, computer generated art, and simulations using Boolean Logic, fractions, clones and more.</p><br />

              

            </section>

          </div>
        </article>
      </main>

      <footer className="align-bottom italic">
        Dublin Road, Dundalk
      </footer>
    </div>
  )
}

export default scratchPage