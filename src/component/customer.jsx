import axios from 'axios';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Customer() {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const newcustomer = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/customers`,
                { name, mobileNumber },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            navigate("/");
        } catch (error) {
            console.error("Error adding customer:", error);
            // You can add error state and display here
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <FaUserPlus className="mx-auto text-4xl text-indigo-600 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
                    <p className="text-gray-600 mt-2">Enter customer details below</p>
                </div>

                <form onSubmit={newcustomer} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter customer's full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number
                        </label>
                        <input
                            id="mobile"
                            type="tel"
                            placeholder="Enter mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                        {loading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                            <FaUserPlus className="text-lg" />
                        )}
                        <span>{loading ? 'Adding...' : 'Add Customer'}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Customer;
