import React, { useEffect, useState } from "react";
import axios from "axios";

function DevJokes(props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://backend-omega-seven.vercel.app/api/getjoke"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl sm:max-w-5xl w-full mx-auto">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title=""
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              viewBox="0 0 200 200"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                fill="yellow"
                r="78"
                stroke="black"
                strokeWidth="3"
              />
              <g className="eyes">
                <circle cx="61" cy="82" r="12" />
                <circle cx="127" cy="82" r="12" />
              </g>
              <path
                d="m136.81 116.53c.69 26.17-64.11 42-81.52-.73"
                style={{ fill: "none", stroke: "black", strokeWidth: "3" }}
              />
            </svg>
            Lets make you Happy with #DevJokes
          </p>
          {data.map((items) => {
            return (
              <>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {items?.question}
                </div>
                <p className="text-gray-700 text-base">{items?.punchline}</p>
              </>
            );
          })}
          <button
            className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex flex-col items-center w-52 mt-10 mx-auto"
            onClick={() => fetchData()}
          >
            Generate New
          </button>
        </div>
      </div>
    </div>
  );
}

export default DevJokes;
