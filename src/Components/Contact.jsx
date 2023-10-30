

 export default function Contact() {
    return (
    <>
    


  <section className="overflow-hidden rounded-lg  from-gray-900 to-gray-600 font-montserrat
  bg-gradient-to-r mx-8 mb-8 sm:mx-16 sm:mb-12 sm:mt-2 md:mx-24 2xl:mb-16 2xl:ml-96 2xl:mr-96">
    

    <div className=" rounded-lg from-gray-900 to-gray-600 bg-gradient-to-r">

  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-2xl">

      <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-white">Contact Me</h2>

      <p className="mb-4 font-light text-center text-md 
       text-white"> Location: West Virginia 
        </p>

        <p className="mb-8 lg:mb-16 font-light text-center  
      text-md text-white"> Phone: <a href="tel:304-932-1921" className="text-sky-400">
        +1 (304)-932-1921</a>
        </p>

      <form target="_blank" action="https://formsubmit.co/jeremydfrancis0@gmail.com" method="POST" className="space-y-8">

          <div>
              <label htmlFor="email"className="block mb-2 text-sm font-medium text-white">Your email</label>

              <input type="email" id="email" name="email" className="shadow-sm bg-black border border-sky-400 
              text-white text-sm rounded-lg block w-full p-2.5" 
               placeholder="name@site.com" required></input>
          </div>

          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>

              <input type="text" id="name" name="name" className="shadow-sm bg-black border border-sky-400 
              text-white text-sm rounded-lg block w-full p-2.5 " 
               placeholder="Full Name" required></input>
          </div>

          <div className="sm:col-span-2">
               <label htmlFor="message"  className="block mb-2 text-sm font-medium text-white 
              ">Your message</label>

              <textarea id="message" name="message" rows="6" className="shadow-sm bg-black border border-sky-400 
              text-white text-sm rounded-lg block w-full p-2.5 " placeholder="Leave a comment...">

              </textarea>
          </div>

          <button type="submit" className="inline-flex items-center justify-center 
            h-[2.5rem] w-[9rem] text-sm text-center text-white bg-black border-sky-400 
            border rounded-lg hover:bg-sky-700">Send message
          </button>

      </form>
  </div>

</div>

    
    </section>
    </>

    );
}