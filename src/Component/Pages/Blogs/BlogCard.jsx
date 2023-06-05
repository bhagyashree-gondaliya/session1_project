import React, { useState } from "react";
import Popup from "../../Popup/Popup";

function BlogCards(props) {
  let { BlogData } = props;
  const [showModal, setShowModal] = useState(false);
  const [PopupData, setPopupData] = useState([]);

  const cardClicked = (data) => {
    setPopupData(data);
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };
  return (
    <>
      <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
        {BlogData.map((data) => {
          return (
            <>
              <li
                className="rounded-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-40 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b"
                onClick={() => cardClicked(data)}
              >
                <div
                  className="overflow-hidden rounded-lg cursor-pointer"
                  href="/posts/JS-Canvas"
                >
                  <img alt="" src={data.image} />
                  <div className="py-6 px-6 block focus:outline-none focus:ring-4">
                    <h2 className="lg:text-xl md:text-2xl font-semibold">
                      {data.title}
                    </h2>
                    <p className="mt-3 mb-3 opacity-60 line-clamp-5">
                      {data.description}
                    </p>
                    <div className="flex justify-between items-start mt-5">
                      <p className="uppercase mb-3 font-bold opacity-60">
                        {data.date}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="stroke-current text-primary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 19l7-7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
      {showModal ? (
        <Popup closePopup={closePopup} PopupData={PopupData} />
      ) : (
        <></>
      )}
    </>
  );
}

export default BlogCards;
