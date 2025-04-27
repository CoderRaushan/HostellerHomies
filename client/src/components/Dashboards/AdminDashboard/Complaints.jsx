import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Complaints() {
  const getComplaints = async () => {
    const hostel = JSON.parse(localStorage.getItem("hostel"))._id;
    const response = await fetch(
      `http://localhost:3000/api/complaint/hostel`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostel }),
      }
    );

    const data = await response.json();
    if (data.success) {
      const complaints = [];
      data.complaints.map((complaint) => {
        let date = new Date(complaint.date);
        complaints.unshift({
          id: complaint._id,
          type: complaint.type,
          title: complaint.title,
          desc: complaint.description,
          student: complaint.student.name,
          room: complaint.student.room_no,
          status: complaint.status,
          date: date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
        });
      });
      setAllComplaints(complaints);
      const resolved = complaints.filter(
        (complaint) => complaint.status.toLowerCase() !== "pending"
      );
      setResolvedComplaints(resolved);
      setComplaints(
        complaints.filter(
          (complaint) => complaint.status.toLowerCase() === "pending"
        )
      );
    }
    else{
      // console.log(data);
    }
  };

  //!AFTER FETCH FILL THIS WITH COMPLAINT DATA
  const [unsolvedComplaints, setComplaints] = useState([]);

  const [resolvedComplaints, setResolvedComplaints] = useState([]); //!DO NOT FILL THIS WITH DATA FROM FETCH
  const [allComplaints, setAllComplaints] = useState([]); //!AFTER FETCH FILL THIS WITH COMPLAINT DATA

  const dismissComplaint = async (id) => {
    const response = await fetch(
      "http://localhost:3000/api/complaint/resolve/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    const data = await response.json();
    if (data.success) {
      toast.success("Complaint Dismissed",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      setComplaints(
        allComplaints.filter((complaint) => complaint.id !== id)
      );
      setResolvedComplaints(
        resolvedComplaints.concat(
          allComplaints.filter((complaint) => complaint.id === id)
        )
      );
    }
    else{
      toast.error("Something went wrong",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
          });
    }
  };

  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    getComplaints();
    const dates = [
      new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
      new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-US",
        { day: "numeric", month: "long", year: "numeric" }
      ),
    ];

    const labels = dates.map((date) => date);
    setGraphData(
      labels.map(
        (date) =>
          allComplaints.filter((complaint) => complaint.date === date).length
      )
    );
  }, [allComplaints.length, unsolvedComplaints.length, resolvedComplaints.length]);

  const graph = (
    <div className="flex items-center justify-center md:h-64 h-40 md:w-96 w-full bg-white rounded-xl shadow-lg p-4 border border-gray-200">
      <Line
        data={{
          labels: [
            new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
            new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-US",
              { day: "numeric", month: "long", year: "numeric" }
            ),
          ],
          datasets: [
            {
              label: "No. of Complaints",
              borderColor: "#4f46e5",
              backgroundColor: "rgba(79, 70, 229, 0.2)",
              pointBackgroundColor: "#4f46e5",
              pointHoverBackgroundColor: "#4f46e5",
              pointBorderColor: "#fff",
              pointHoverBorderColor: "#fff",
              data: graphData,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#000",
                font: {
                  weight: "bold"
                }
              }
            },
            title: {
              display: true,
              text: "Weekly Complaints",
              color: "#000",
              font: {
                size: 16,
                weight: "bold"
              }
            }
          },
          scales: {
            y: {
              ticks: { color: "#000" },
              grid: { color: "rgba(0, 0, 0, 0.1)" }
            },
            x: {
              ticks: { color: "#000" },
              grid: { color: "rgba(0, 0, 0, 0.1)" }
            }
          }
        }}
      />
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col gap-10 md:gap-7 pt-24 items-center justify-start overflow-auto bg-[#f3e8ff] pb-10">
      <h1 className="text-black font-bold text-5xl mt-4 mb-2">Complaints Dashboard</h1>
      <div className="w-full px-4 flex md:flex-row flex-col md:gap-7 flex-wrap justify-center items-center gap-7">
        {graph}
        <div className="bg-white px-6 py-5 rounded-xl shadow-lg w-96 max-h-96 overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-black font-bold text-xl">New Complaints</span>
            <span className="bg-[#4f46e5] text-white px-3 py-1 rounded-full text-sm font-medium">
              {unsolvedComplaints.length} pending
            </span>
          </div>
          
          <ul role="list" className="divide-y divide-gray-200 text-black">
            {unsolvedComplaints.length === 0
              ? <p className="text-gray-500 py-4 text-center italic">No new complaints!</p>
              : unsolvedComplaints.map((complaint) => (
                <li
                  className="py-3 sm:py-4 px-4 rounded-lg hover:bg-gray-50 transition-all mb-2 border border-gray-100"
                  key={complaint.student}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 text-[#4f46e5]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-black">
                        {complaint.title}
                      </p>
                      <p className="text-sm truncate text-gray-500">
                        {complaint.desc}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-400">Room: {complaint.room}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-400">{complaint.student}</span>
                      </div>
                    </div>
                    <button
                      className="px-3 py-1 bg-[#4f46e5] text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                      onClick={() => dismissComplaint(complaint.id)}
                    >
                      Solved
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      
      {resolvedComplaints.length > 0 && (
        <div className="w-full max-w-3xl px-4">
          <div className="bg-white px-6 py-5 rounded-xl shadow-lg overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-black font-bold text-xl">Resolved Complaints</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {resolvedComplaints.length} resolved
              </span>
            </div>
            
            <ul role="list" className="divide-y divide-gray-200 text-black">
              {resolvedComplaints.slice(0, 5).map((complaint) => (
                <li
                  className="py-3 sm:py-4 px-4 rounded-lg hover:bg-gray-50 transition-all mb-2 border border-gray-100"
                  key={complaint.id}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-black">
                        {complaint.title}
                      </p>
                      <p className="text-sm truncate text-gray-500">
                        {complaint.desc}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Resolved
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default Complaints;