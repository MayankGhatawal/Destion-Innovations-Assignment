import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Users",
            data: [50, 100, 150, 200, 250, 300], // Data for the chart
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
            borderColor: "rgba(75, 192, 192, 1)", // Border color
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top", // Position of the legend
          },
          title: {
            display: true,
            text: "Monthly Users Analytics", // Title of the chart
          },
        },
      };
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl font-semibold">2,345</p>
          <p className="text-green-500 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Monthly Revenue</h2>
          <p className="text-3xl font-semibold">$56,423</p>
          <p className="text-green-500 mt-2">+8% from last month</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Bounce Rate</h2>
          <p className="text-3xl font-semibold">32.8%</p>
          <p className="text-red-500 mt-2">-5% from last month</p>
        </div>
      </section>

      {/* Chart Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">User Growth (Last 6 Months)</h2>
        <div className="h-64 bg-white flex items-center justify-center">
        <Bar data={data} options={options} />
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <p className="text-lg font-semibold">User John Doe signed up.</p>
            <p className="text-gray-500">2 hours ago</p>
          </li>
          <li className="py-4">
            <p className="text-lg font-semibold">User Jane Smith upgraded her plan.</p>
            <p className="text-gray-500">1 day ago</p>
          </li>
          <li className="py-4">
            <p className="text-lg font-semibold">Revenue of $2,300 added.</p>
            <p className="text-gray-500">3 days ago</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Analytics;
