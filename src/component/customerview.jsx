import axios from "axios";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

function CustomersSection() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
       `${import.meta.env.VITE_API_URL}/api/customers`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      setCustomers(res.data);
    } catch (err) {
      console.error("Error fetching customers", err);
    } finally {
      setLoading(false);
    }
  };

  // fetch once when component mounts
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      {/* Header with count */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FaUsers className="text-3xl text-amber-500" />
          <h3 className="text-lg font-semibold text-gray-700">
            Customers
          </h3>
        </div>
        <span className="text-2xl font-bold text-gray-800">
          {customers.length}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-4">
        Manage your customer database
      </p>

      {/* Toggle button */}
      <button
        onClick={() => setVisible(v => !v)}
        className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600"
      >
        {visible ? "Hide Customers" : "View Customers"}
      </button>

      {/* Customer list */}
      {visible && (
        <div className="mt-6 space-y-3">
          {loading && <p>Loading...</p>}

          {!loading && customers.length === 0 && (
            <p>No customers found</p>
          )}

          {customers.map(c => (
            <div
              key={c._id}
              className="border p-4 rounded-lg flex justify-between"
            >
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-gray-500">
                  {c.mobileNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomersSection;
