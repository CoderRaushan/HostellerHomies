const getAllStudents = async () => {
    const hostels = JSON.parse(localStorage.getItem("admin"));
    const result = await fetch("http://localhost:3000/api/student/get-all-students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostel: hostels.hostel }),
    });
    const data = await result.json();
    return data;
};

export default getAllStudents;