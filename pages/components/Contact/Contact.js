const Contact = () => {
  return (
    <div className="flex flex-col z-10 px-8 bg-discordTheme py-12 md:py-28 items-center ">
      <h2
        id="contact"
        className="self-center text-5xl font-semibold mb-6 md:mb-14 text-main-white"
      >
        CONTACT
      </h2>
      <p className=" text-main-primary mb-10 text-center ">
        Have a question or want to work together?
      </p>

      <form
        action="https://formsubmit.co/joel.adving@gmail.com"
        method="POST"
        className="flex flex-col w-full md:w-6/12 lg:w-4/12"
      >
        <input
          required
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          className="mb-1 bg-discordTheme-darkest p-2 px-4 text-main-white "
        />

        <input
          required
          placeholder="Email"
          type="email"
          name="email"
          id=""
          className="mb-1 bg-discordTheme-darkest p-2 px-4 text-main-white"
        />

        <textarea
          required
          placeholder="Your message..."
          name="message"
          id=""
          cols="30"
          rows="10"
          className="mb-1 bg-discordTheme-darkest p-2 px-4 text-main-white"
        ></textarea>
        <button
          type="submit"
          className=" border-main-white border-solid border-2 text-main-white p-2"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
