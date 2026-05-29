// // ================================================
// // Order Service - API Calls Layer
// // ================================================

// /**
//  * Base URL for the backend API
//  * All requests to the server will use this base
//  */
// const BASE_URL = "http://localhost:5065/api";

// /**
//  * Get all orders from the server
//  * Used in pages like "My Orders" to display order history
//  */
// export async function getOrders() {
//     const res = await fetch(`${BASE_URL}/Orders`);
    
//     if (!res.ok) {
//         throw new Error("Failed to fetch orders");
//     }
    
//     return res.json();
// }

// /**
//  * Create a new service request (Order)
//  * Used in "Request Service" page when user chooses a service
//  */
// export async function createOrder(order) {
//     const res = await fetch(`${BASE_URL}/Orders`, {
//         method: "POST",
//         headers: { 
//             "Content-Type": "application/json" 
//         },
//         body: JSON.stringify(order)
//     });

//     if (!res.ok) {
//         throw new Error("Failed to create order");
//     }

//     return res.json();
// }

// /**
//  * Accept an order by a service provider
//  * Used in Provider dashboard when they accept a request
//  * 
//  * @param {number} id - Order ID
//  * @param {object} providerData - Provider information (id, name, phone)
//  */
// export async function acceptOrder(id, providerData) {
//     const url = `${BASE_URL}/Orders/accept/${id}`
//         + `?providerId=${providerData.id}`
//         + `&providerName=${encodeURIComponent(providerData.name)}`
//         + `&providerPhone=${encodeURIComponent(providerData.phone)}`;

//     const res = await fetch(url, { 
//         method: "PUT" 
//     });

//     if (!res.ok) {
//         throw new Error("Failed to accept order");
//     }

//     return res.json();
// }

// /**
//  * Delete an order
//  * Used in "My Orders" page to allow users to delete their requests
//  */
// export async function deleteOrder(id) {
//     const res = await fetch(`${BASE_URL}/Orders/${id}`, {
//         method: "DELETE"
//     });

//     return res.ok;   // Returns true if deletion was successful
// }