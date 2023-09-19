import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
    const   {
      term,
      options,
      forecast,
      onInputChange,
      onOptionSelect,
      onSubmit,
      } = useForecast();
  return (
    <main className="flex justify-center items-center 
    bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 
    h-full w-full py-4">
     
     {forecast? (<Forecast data={forecast}></Forecast>) :
      <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
     }
     
    </main>
  )
}

export default App
