import "./App.css";
import Header from "./Components/Header/Header.js";
import ChiSiamo from "./Components/ChiSiamo/ChiSiamo.js";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="chi-siamo">
        <ChiSiamo posizione="sinistra" title="Chi Siamo"/>
      </div>
      <div className="chi-siamo">
        <ChiSiamo posizione="destra" title="Cosa facciamo"/>
      </div>
    </div>
  );
}

/*
function getSite() {
  return (
    <div className="flex flex-col items-stretch justify-between w-full gap-32 bg-white">
      <div className="bg-[#f0ebea] relative flex flex-col justify-start items-stretch">
        <div className="border-solid w-[1920px] h-px absolute top-[1079px] left-0 bordert borderb-0 borderblack borderx-0" />
        <div className="bg-[url(https://file.rendit.io/n/rb5YcwqfgSWjH5euFW3H.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-end gap-6 h-[1080px] shrink-0 items-center px-8 py-4">
          <div className="bg-[#850005] self-stretch flex flex-row justify-start mb-[313px] gap-12 items-center px-12 rounded-[20px]">
            <img
              src="https://file.rendit.io/n/hzZZJHekus4fMcPjgbVJ.png"
              className="w-24 min-w-0 min-h-0 mr-10 shrink-0"
            />
            <div className="text-center text-6xl font-['Inter'] font-bold text-white w-[450px] shrink-0 h-[83.33%] mr-8 my-2">
              C’è Campo
            </div>
            <div className="overflow-hidden bg-[#6d0004] w-48 shrink-0 h-16 rounded-lg" />
            <div className="overflow-hidden bg-[#620004] w-48 shrink-0 h-16 rounded-lg" />
            <div className="overflow-hidden bg-[#620004] w-48 shrink-0 h-16 rounded-lg" />
            <div className="overflow-hidden bg-[#620004] w-48 shrink-0 h-16 rounded-lg" />
          </div>
          <div className="self-stretch flex flex-row justify-between mb-[296px] items-center">
            <div className="bg-white/30 flex flex-col justify-center h-24 items-center rounded-[20px]">
              <img
                src="https://file.rendit.io/n/4QbWViqqMELJp19EtVSi.svg"
                className="w-12 min-w-0 min-h-0 mx-6"
              />
            </div>
            <div className="bg-white/30 flex flex-col justify-center h-24 items-center rounded-[20px]">
              <img
                src="https://file.rendit.io/n/GrwSrRRFyoJRFvFn3NZS.svg"
                className="w-12 min-w-0 min-h-0 mx-6"
              />
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/0aNqdljSi88vvIhLfyaL.svg"
            className="w-24 min-w-0 min-h-0"
          />
          <div className="flex flex-row items-center justify-between gap-8">
            <img
              src="https://file.rendit.io/n/beqbSgqH5wH6i7lx8d3e.svg"
              className="w-6 min-w-0 min-h-0 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/s6MME3lc2w0791OR6uIZ.svg"
              className="w-6 min-w-0 min-h-0 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/s6MME3lc2w0791OR6uIZ.svg"
              className="w-6 min-w-0 min-h-0 shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-[#f0ebea] flex flex-row justify-end gap-20 items-center px-12">
        <div className="flex flex-col items-stretch self-end justify-start w-3/5 mb-8">
          <div className="text-center text-5xl font-['Inter'] font-bold text-[#850005] self-start mb-12 w-[300px] h-[13.95%]">
            Chi Siamo
          </div>
          <div className="text-5xl font-['Inter'] font-bold ml-24 h-[50.63%]">
            C’è Campo è un’associazione di volontariato nata nel nel 2020 con lo
            scopo di aiutare chi ha più bisogno e creare opportunità per giovani
            di vivere momenti in cui potersi sperimentare in questo bellissimo
          </div>
          <div className="flex flex-row items-start justify-start gap-5 ml-24">
            <div className="text-5xl font-['Inter'] font-bold mb-2 w-[662px] h-full">
              mondo Parola Parola Parola Parola Parola Parola Parola Parola
              Parola Parola{" "}
            </div>
            <div className="overflow-hidden bg-[#850005] self-end w-[300px] shrink-0 h-24 rounded-lg" />
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/zv8F53WrpeMRjed7Flqs.png"
          className="min-w-0 min-h-0"
        />
      </div>
      <div className="bg-[#1e2832] flex flex-row justify-start gap-20 items-end pl-[512px] pr-[509px] py-5">
        <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white w-24 shrink-0 mb-40 mr-1">
          Campaigns
        </div>
        <div className="self-start flex flex-col justify-start mb-20 gap-6 h-[310px] items-start">
          <img
            src="https://file.rendit.io/n/r8XIKI1t4wXhxl2QZRoX.png"
            className="w-20 min-w-0 min-h-0 ml-56"
          />
          <div className="text-center text-base font-['DM_Sans'] tracking-[-0.23181818425655365] text-white self-stretch mb-8 ml-3 mr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <div className="flex flex-row items-center self-stretch justify-start gap-20 mb-8">
            <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white w-[141px] shrink-0">
              Email Marketing
            </div>
            <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white w-20 shrink-0">
              Branding
            </div>
            <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white w-16 shrink-0">
              Offline
            </div>
            <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white w-20 shrink-0">
              Contact
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/amFdlFRBl0vWrWGzNiSr.svg"
            className="min-h-0 min-w-0 ml-[177px]"
          />
        </div>
        <div className="text-sm font-['DM_Sans'] tracking-[-0.20454545319080353] text-white mb-40 w-12 shrink-0">
          FAQs
        </div>
      </div>
    </div>
  );
}
*/

export default App;
