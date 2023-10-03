import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import BottonNavBar from "./components/BottonNavBar";

function App() {
  const carData = useSelector((state) => state.filterCarJsonData.filterData);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);
  const options = [];
  for (let i = 1; i <= parseInt(carData.length / itemsPerPage) + 1; i++) {
    options.push(
      <option
        key={i}
        selected={currentPage === i && "selected"}
        onClick={(e) => setCurrentPage(i)}
        value={i}
      >
        {i}
      </option>
    );
  }

  return (
    <div
      className={`h-full w-[100vw] bg-[#f0ecec] pt-4 flex flex-col justify-start items-center`}
    >
      <NavBar setCurrentPage={setCurrentPage}/>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 my-[80px]">
        {carData.length > 0 ? (
          currentItems.map(
            ({
              Name,
              sittingCapacity,
              Average,
              type,
              price,
              image,
              launchYear,
              driveType,
            }) => {
              return (
                <Card
                  name={Name}
                  price={price}
                  url={image}
                  capacity={sittingCapacity}
                  fuel={Average}
                  type={type}
                  year={launchYear}
                  driveType={driveType}
                />
              );
            }
          )
        ) : (
          <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            No car found
          </div>
        )}
      </div>
      <BottonNavBar
        indexOfLastItem={indexOfLastItem}
        carData={carData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        options={options}
      />
    </div>
  );
}

export default App;
