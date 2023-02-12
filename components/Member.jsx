import { useState } from "react";

export default function Member({ name, memberid }) {
  const [expand, setExpand] = useState(false);
  const [details, setDetails] = useState({
    workingWallet: "Loading...",
    nonWorkingWallet: "Loading...",
  });

  const getDetails = async () => {
    setExpand(!expand);

    setDetails({
      workingWallet: "Loading...",
      nonWorkingWallet: "Loading...",
    });

    if (!expand) {
      const url = `api/getAmount/${memberid}`;
      // console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setDetails(data);
    }
  };

  return (
    <div className="mt-6 lg:w-96 w-80 flex flex-col justify-between rounded-xl p-6 text-left border">
      <a
        onClick={getDetails}
        className="flex flex-row justify-between hover:cursor-pointer hover:text-blue-600 focus:text-blue-600 select-none"
      >
        <h1>{name}</h1>
        <span>&rarr;</span>
      </a>

      {expand && (
        <div className="transition-transform duration-200 ease-in">
          <h1 className="text-center ml-2 text-lg mt-2">{memberid}</h1>
          <div className="flex flex-row justify-center item-center">
            <div className="flex flex-col items-center text-black bg-slate-100 border mx-1 p-5 w-48 rounded">
              <h1 className="text-sm text-center text-slate-400">Working</h1>
              <span className="text-lg font-bold">{details.workingWallet}</span>
            </div>
            <div className="flex flex-col items-center text-black bg-slate-100 border mx-1 p-5 w-48 rounded">
              <h1 className="text-sm text-center text-slate-400">
                Non-Working
              </h1>
              <span className="text-lg font-bold">
                {details.nonWorkingWallet}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
