export default function Form({ handleSubmit, handleChange, formData = {} }) {
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col items-center gap-6 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mx-auto p-6"
    >
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col w-full  gap-2">
          <label className="font-bold text-lg" htmlFor="name">
            Nom : <span className="text-orange-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            required
            placeholder=""
          />
        </div>
        <div className="flex flex-col w-full  gap-2">
          <label className="font-bold text-lg" htmlFor="companyName">
            Entreprise :
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label className="font-bold text-lg" htmlFor="email">
          Email : <span className="text-orange-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
          required
          placeholder=""
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label className="font-bold text-lg" htmlFor="message">
          Message : <span className="text-orange-600">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-40 p-2 backdrop-blur-3xl text-lg bg-[#d6e0ff40] border text-accessible rounded-lg"
          required
          placeholder=""
        ></textarea>
      </div>

      <p className="">
        <span className="text-red-500">*</span> Champs obligatoires
      </p>

      <button
        type="submit"
        className="border border-black w-2/4 px-4 py-2 rounded-lg text-black uppercase tracking-widest font-medium text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
      >
        Envoyer
      </button>
    </form>
  );
}
