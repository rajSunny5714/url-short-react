import React, { useState } from "react";
import Graph from "./Graph";
import { useStoreContext } from "../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../hooks/useQuery";
import ShortenPopUp from "../dashboard/ShortenPopUp";
import { FaLink } from "react-icons/fa";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  function onError() {
    navigate("/error");
  }

  // Fetch data with default empty arrays to prevent undefined errors
  const { isLoading: isUrlsLoading, data: myShortenUrls = [], refetch } = useFetchMyShortUrls(token, onError);
  const { isLoading: isClicksLoading, data: totalClicks = [] } = useFetchTotalClicks(token, onError);

  const loading = isUrlsLoading || isClicksLoading;

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loading ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          {/* Graph Section */}
          <div className="h-96 relative">
            {totalClicks.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-slate-800 font-serif font-bold sm:text-2xl text-[18px] mb-2">
                  No Data For This Time Period
                </h1>
                <h3 className="text-slate-600 sm:text-lg text-sm sm:w-96 w-[90%]">
                  Share your short link to view where your engagements are coming from
                </h3>
              </div>
            )}
            <Graph graphData={totalClicks} />
          </div>

          {/* Create Short URL Button */}
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 rounded-md text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition duration-200"
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>

          {/* Shortened URL List */}
          <div>
            {!isUrlsLoading && (myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                    You haven't created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm" />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            ))}
          </div>
        </div>
      )}

      {/* Shorten URL Popup */}
      <ShortenPopUp refetch={refetch} open={shortenPopUp} setOpen={setShortenPopUp} />
    </div>
  );
};

export default DashboardLayout;