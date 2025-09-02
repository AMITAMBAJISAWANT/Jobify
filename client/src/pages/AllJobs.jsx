import { createContext, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobContext = createContext();

function AllJobs() {
  const { data } = useLoaderData();
  return (
    <div>
      <AllJobContext.Provider value={{ data }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobContext.Provider>
    </div>
  );
}

export const useAllJobsContext = () => useContext(AllJobContext);

export default AllJobs;
