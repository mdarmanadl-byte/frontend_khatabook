
import { FaChartLine, FaClipboardList, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomersSection from "./customerview";

function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

 
  // For now, we'll use a placeholder shop name. In a real app, you'd decode the JWT token to get user info
  const shopName = "Your Shop"; // This would come from decoded token or API call
  const requireAuth = (callback) => {
  if (!token) {
    alert("Please login to continue");
    navigate("/login");
    return;
  }
  callback();
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {shopName}!</h1>
          <p className="text-amber-100 text-lg">Manage your business records with ease</p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Customers Card */}
          
          
            <CustomersSection />
         

          {/* Transactions Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <FaMoneyBillWave className="text-3xl text-green-500" />
              <span className="text-2xl font-bold text-gray-800">0</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Transactions</h3>
            <p className="text-gray-500 text-sm">Track your daily transactions</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
              View Transactions
            </button>
          </div>

          {/* Reports Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <FaChartLine className="text-3xl text-blue-500" />
              <span className="text-2xl font-bold text-gray-800">--</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Reports</h3>
            <p className="text-gray-500 text-sm">Generate business reports</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              View Reports
            </button>
          </div>

          {/* Inventory Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <FaClipboardList className="text-3xl text-purple-500" />
              <span className="text-2xl font-bold text-gray-800">0</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Inventory</h3>
            <p className="text-gray-500 text-sm">Manage your product inventory</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors">
              View Inventory
            </button>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center space-x-3 bg-amber-500 text-white py-4 px-6 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
             onClick={() =>
    requireAuth(() => navigate("/customer"))>
               }
              <FaUsers />
              
              <span>Add New Customer</span>
            </button>
            <button className="flex items-center justify-center space-x-3 bg-green-500 text-white py-4 px-6 rounded-lg hover:bg-green-600 transition-colors font-semibold">
              <FaMoneyBillWave />
              <span>Record Transaction</span>
            </button>
            <button className="flex items-center justify-center space-x-3 bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              <FaChartLine />
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
