import "./App.scss";

function App() {
  return (
    <div className="container max-w-fit mx-auto px-4 py-12 text-black/70">
      {/* header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Abwesenheiten</h1>
        <div className="flex">
          <button className="btn hover:bg-gray-300">Export</button>
          <div className="btn-group">
            <button className="btn hover:bg-gray-300">Abwesenheiten</button>
            <button className="btn hover:bg-gray-300">Eventkalendar</button>
          </div>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="filter">
          <p className="font-bold mb-3 ml-1">Anzeigen</p>
          <button className="btn active">
            Abwesenheiten - <span>7</span>
          </button>
          <button className="btn">Feiertage</button>
        </div>
        <div className="filter mx-6">
          <p className="font-bold mb-3 ml-1">Miterabeiter filtern nach</p>
          <button className="btn">Standort</button>
          <button className="btn">Abteilung</button>
          <button className="btn">Team</button>
          <button className="btn btn-active">Alle Status</button>
        </div>
        <div className="features ml-auto self-end">
          <button className="btn" disabled>
            Ausstehende Anfragen
          </button>
          <button className="btn hover:bg-gray-300">...</button>
        </div>
      </div>

      {/* calendar */}
      <div className="grid grid-cols-5 auto-rows-max border-b border-gray-300">
        <div className="row-span-2">
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between border-b border-gray-300 py-4 pl-3 pr-5">
              <div>
                <h3 className="text-lg font-bold">Mitarbeiter</h3>
                <p className="text-sm">1 von 2</p>
              </div>
              <button className="text-sky-400 font-medium transition-colors hover:text-sky-400/50">
                Liste leeren
              </button>
            </div>

            <form className="py-4 pl-3 pr-5">
              <label className="flex w-72">
                <svg
                  width="20"
                  height="20"
                  className="fill-black/50 mt-0.5 mr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53Zm0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z"></path>
                  <path d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z"></path>
                </svg>
                <input
                  type="text"
                  className="w-full text-black/50 whitespace-nowrap outline-0"
                  placeholder="Mitarbeiter suchen oder hinzufügen"
                />
              </label>
            </form>
          </div>
        </div>
        <div className="col-span-4 bg-red-100">
          <div className="flex h-full pb-8 p-4 bg-gray-100">
            <button className="w-9 flex justify-start items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-black/50 transition-colors hover:fill-sky-400"
              >
                <path d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6Z"></path>
              </svg>
            </button>
            <buttonn className="w-9 flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-black/50 transition-colors hover:fill-sky-400"
              >
                <path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"></path>
              </svg>
            </buttonn>
            <button className="w-9 flex justify-end items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-black/50 transition-colors hover:fill-sky-400"
              >
                <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6Z"></path>
              </svg>
            </button>
            <span className="font-medium ml-10 leading-8">Februar 2023</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-1 text-center border-b border-gray-100 text-black/50">
          <p className="font-bold">1</p>
          <p className="text-sm">So.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-1 text-center border-b border-gray-100">
          <p className="font-bold">2</p>
          <p className="text-sm">Mo.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-1 text-center border-b border-gray-100">
          <p className="font-bold">3</p>
          <p className="text-sm">Di.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-100 p-1 text-center border-b-4 border-sky-400 text-sky-400">
          <p className="font-bold">4</p>
          <p className="text-sm">Mi.</p>
        </div>
        {/* employee */}
        <div className="p-3 border-t border-gray-300">Erster Name</div>
        <div className="p-3 cell weekend"></div>
        <div className="p-3 cell"></div>
        <div className="p-3 cell"></div>
        <div className="p-3 cell selected"></div>
        {/* employee */}
        <div className="p-3 border-t border-gray-300">Zweite Person</div>
        <div className="p-3 cell weekend"></div>
        <div className="p-3 cell">
          <div className="bg-gray-400 h-full w-full rounded"></div>
        </div>
        <div className="p-3 cell"></div>
        <div className="p-3 cell selected"></div>
        {/* employee */}
        <div className="p-3 border-t border-gray-300">Drittes Wesen</div>
        <div className="p-3 cell weekend"></div>
        <div className="p-3 cell"></div>
        <div className="p-3 cell"></div>
        <div className="p-3 cell selected"></div>
      </div>
    </div>
  );
}

export default App;
