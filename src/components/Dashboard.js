import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = ({ data }) => {
  const alertCategories = data.map((item) => item.alert.category);
  const alertSignatures = data.map((item) => item.alert.signature);
  const alertSeverities = data.map((item) => item.alert.severity);

  const categoryData = {
    labels: [...new Set(alertCategories)],
    datasets: [
      {
        label: "Alert Categories",
        data: Object.values(
          alertCategories.reduce((acc, category) => {
            acc[category] = (acc[category] || 0) + 1;
            return acc;
          }, {})
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const signatureData = {
    labels: [...new Set(alertSignatures)],
    datasets: [
      {
        label: "Alert Signatures",
        data: Object.values(
          alertSignatures.reduce((acc, signature) => {
            acc[signature] = (acc[signature] || 0) + 1;
            return acc;
          }, {})
        ),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const severityData = {
    labels: [
      "Severity 1",
      "Severity 2",
      "Severity 3",
      "Severity 4",
      "Severity 5",
    ],
    datasets: [
      {
        label: "Alert Severities",
        data: Object.values(
          alertSeverities.reduce((acc, severity) => {
            acc[severity] = (acc[severity] || 0) + 1;
            return acc;
          }, {})
        ),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Categories</h2>
          <Pie data={categoryData} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Signatures</h2>
          <Bar data={signatureData} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Severities</h2>
          <Line data={severityData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
