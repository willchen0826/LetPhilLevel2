// ============================================================
// 🏠  ARRAY METHODS — HOMEWORK
// ============================================================
// Mini Project: Order Processing System
//
// Process a set of customer orders using ONLY array methods.
// No manual for loops allowed for this homework.
// Every task must use forEach, map, filter, find, some,
// every, or reduce.
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ============================================================
// THE DATA — do not modify this
// ============================================================
const orders = [
  {
    id: 1001,
    customer: "Maya Chen",
    total: 124.99,
    status: "delivered",
    items: 3,
    isPriority: false,
  },
  {
    id: 1002,
    customer: "Liam Torres",
    total: 49.99,
    status: "pending",
    items: 1,
    isPriority: true,
  },
  {
    id: 1003,
    customer: "Sofia Patel",
    total: 239.5,
    status: "delivered",
    items: 5,
    isPriority: true,
  },
  {
    id: 1004,
    customer: "Ethan Kim",
    total: 18.0,
    status: "cancelled",
    items: 1,
    isPriority: false,
  },
  {
    id: 1005,
    customer: "Zoe Williams",
    total: 89.99,
    status: "pending",
    items: 2,
    isPriority: false,
  },
  {
    id: 1006,
    customer: "Carlos Ruiz",
    total: 310.0,
    status: "delivered",
    items: 7,
    isPriority: true,
  },
  {
    id: 1007,
    customer: "Ava Johnson",
    total: 55.25,
    status: "pending",
    items: 2,
    isPriority: false,
  },
];

// ----------------------------------------------------------
// TASK 1 — Display all orders (forEach)
// ----------------------------------------------------------
// Use forEach to log a summary of every order.
// Format each line as:
//   "#" + order.id + " | " + order.customer
//   + " | $" + order.total
//   + " | " + order.status.toUpperCase()

// orders.forEach(function (order) {
//   console.log("#" + order.id + " | " + order.customer
//   + " | $" + order.total
//   + " | " + order.status.toUpperCase());
// })

orders.forEach((order) =>
  console.log(
    "#" +
      order.id +
      " | " +
      order.customer +
      " | $" +
      order.total +
      " | " +
      order.status.toUpperCase(),
  ),
);

// ----------------------------------------------------------
// TASK 2 — Build receipt strings (map)
// ----------------------------------------------------------
// Use map to create a new array called receipts.
// Each element should be a formatted string:
//   "Order #" + order.id + " — " + order.customer
//   + " — $" + order.total + " (" + order.items + " item(s))"
//
// Log receipts.length to confirm it matches orders.length.
// Use forEach on receipts to log each one.
const recipts = orders
  .map((order) => {
    return (
      "Order #" +
      order.id +
      " — " +
      order.customer +
      " — $" +
      order.total +
      " (" +
      order.items +
      " item(s))"
    );
  })
  .forEach((reciptItem) => console.log(reciptItem));

const reciptss = orders.map((order) => {
  return (
    "Order #" +
    order.id +
    " — " +
    order.customer +
    " — $" +
    order.total +
    " (" +
    order.items +
    " item(s))"
  );
});

console.log(
  "length of the recipts: " +
    reciptss.length +
    "; If it is same length as Orders: " +
    (reciptss.length == orders.length ? "True" : "False"),
);

// ----------------------------------------------------------
// TASK 3 — Build order summary objects (map)
// ----------------------------------------------------------
// Use map to create a new array called summaries.
// Each element should be a NEW object with only:
//   { id: order.id, customer: order.customer, total: order.total }
//
// Log summaries.

const summaries = orders.map((order) => ({
  id: order.id,
  customer: order.customer,
  total: order.total,
}));

console.log(summaries);

// ----------------------------------------------------------
// TASK 4 — Filter by status (filter)
// ----------------------------------------------------------
// Use filter to get only delivered orders → store in deliveredOrders.
// Use filter to get only pending orders   → store in pendingOrders.
// Use filter to get only cancelled orders → store in cancelledOrders.
//
// Log:
//   "Delivered: " + deliveredOrders.length
//   "Pending:   " + pendingOrders.length
//   "Cancelled: " + cancelledOrders.length

const deliveredOrder = orders.filter((order) => order.status === "delivered");
const pendingdOrder = orders.filter((order) => order.status === "pending");
const cancelledOrder = orders.filter((order) => order.status === "cancelled");

console.log("Delivered: " + deliveredOrder.length);
console.log("Pending:   " + pendingdOrder.length);
console.log("Cancelled: " + cancelledOrder.length);

// ----------------------------------------------------------
// TASK 5 — High value orders (filter + map chained)
// ----------------------------------------------------------
// Use filter to get orders with total > 100.
// Chain map to extract just the customer names.
// Store the result in highValueCustomers.
//
// Log: "High value customers: " + highValueCustomers

const highValueCustomers = orders
  .filter((order) => order.total > 100)
  .map((o) => o.customer);

console.log("High value customers: " + highValueCustomers);

// ------
// ----------------------------------------------------------
// TASK 6 — Find a specific order (find)
// ----------------------------------------------------------
// Use find to locate the order with id === 1005.
// Store it in foundOrder.
// Log: "Found: " + foundOrder.customer + " — $" + foundOrder.total
//
// Then use find to search for id === 9999.
// Store it in missingOrder.
// Log missingOrder.
// Write a comment: what does find return when nothing matches?

const foundOrder = orders.find((order) => order.id === 1005);
console.log("Found: " + foundOrder.customer + " — $" + foundOrder.total);

const missingOrder = orders.find((order) => order.id === 9999);
console.log(missingOrder);

// {
//   id: 1007,
//   customer: "Ava Johnson",
//   total: 55.25,
//   status: "pending",
//   items: 2,
//   isPriority: false,
// },

// ----------------------------------------------------------
// TASK 7 — Ask questions about the data (some + every)
// ----------------------------------------------------------
// Write your prediction as a comment BEFORE each one, then run.
//
// Use some → is there at least one priority order?
//   Store in hasPriorityOrder.
//   Log: "Has priority order: " + hasPriorityOrder     // prediction:
//
// Use some → is there at least one order over $300?
//   Store in hasHighValueOrder.
//   Log: "Has $300+ order: " + hasHighValueOrder        // prediction:
//
// Use every → are ALL orders either delivered or pending?
//   Store in allActive.
//   Log: "All active: " + allActive                     // prediction:
//
// Use every → do ALL priority orders have more than 1 item?
//   Hint: filter for isPriority first, then chain every
//   Store in allPriorityMultiItem.
//   Log: "All priority multi-item: " + allPriorityMultiItem // prediction:

const hasPriorityOrder = orders.some((order) => order.isPriority == true);
console.log("Has priority order: " + hasPriorityOrder);

const hasHighValueOrder = orders.some((order) => order.total > 300);
console.log("Has $300+ order: " + hasHighValueOrder);

const allActive = orders.every(
  (order) => order.status === "pending" || order.status === "delivered",
);
console.log("All active: " + allActive);

const allPriorityMultiItem = orders
  .filter((order) => order.isPriority == true)
  .every((o) => o.items > 1);
console.log("All priority multi-item: " + allPriorityMultiItem);

// ----------------------------------------------------------
// TASK 8 — Calculate totals (reduce)
// ----------------------------------------------------------
// Use reduce to calculate the total revenue from ALL orders.
// Start the accumulator at 0.
// Store in totalRevenue.
// Log: "Total revenue: $" + totalRevenue
//
// Use reduce to count the total number of items across all orders.
// Store in totalItems.
// Log: "Total items ordered: " + totalItems
//
// Calculate and log the average order value:
//   const averageOrder = totalRevenue / orders.length
//   Log: "Average order value: $" + averageOrder

const totalRevenue = orders.reduce(function (acc, order) {
  return acc + order.total;
}, 0);
console.log("Total revenue: $" + totalRevenue.toFixed(2));

const totalItems = orders.reduce((acc, order) => acc + order.items, 0);
console.log("Total items ordered: " + totalItems);

const averageOrder = totalRevenue / orders.length;
console.log("Average order value: $" + averageOrder.toFixed(2));

// ----------------------------------------------------------
// TASK 9 — Connect the dots (filter + reduce)
// ----------------------------------------------------------
// Calculate the revenue from DELIVERED orders only.
//   Step 1: filter for delivered orders
//   Step 2: reduce to sum their totals
//   Store in deliveredRevenue.
//   Log: "Delivered revenue: $" + deliveredRevenue
//
// Calculate the revenue from PENDING orders only.
//   Same approach. Store in pendingRevenue.
//   Log: "Pending revenue: $" + pendingRevenue
//
// Then log:
//   "Unconfirmed revenue: $" + pendingRevenue
//   (This is money that hasn't been secured yet)

const deliveredRevenue = orders
  .filter((order) => order.status == "delivered")
  .reduce((acc, o) => acc + o.total, 0);
console.log("Delivered revenue: $" + deliveredRevenue);

const pendingRevenue = orders
  .filter((order) => order.status == "pending")
  .reduce((acc, o) => acc + o.total, 0);
console.log("Pending revenue: $" + pendingRevenue);

console.log("Unconfirmed revenue: $" + pendingRevenue);

// ----------------------------------------------------------
// TASK 10 — Full pipeline (all methods)
// ----------------------------------------------------------
// Build a priority order report in these steps:
//
// Step 1: filter orders where isPriority is true
//         → store in priorityOrders
//
// Step 2: use every on priorityOrders to check if ALL
//         priority orders have been delivered
//         → store in allPriorityDelivered
//         → log: "All priority delivered: " + allPriorityDelivered
//
// Step 3: use reduce on priorityOrders to get the
//         total value of priority orders
//         → store in priorityRevenue
//         → log: "Priority revenue: $" + priorityRevenue
//
// Step 4: use map on priorityOrders to build display strings:
//         "⚡ #" + order.id + " " + order.customer + " — $" + order.total
//         → store in priorityDisplay
//
// Step 5: use forEach on priorityDisplay to log each line

const priorityOrders = orders.filter((order) => order.isPriority == true);

const allPriorityDelivered = priorityOrders.every(
  (o) => o.status == "delivered",
);
console.log("All priority delivered: " + allPriorityDelivered);

const priorityRevenue = priorityOrders.reduce(
  (acc, order) => acc + order.total,
  0,
);
console.log("Priority revenue: $" + priorityRevenue);

const priorityDisplay = priorityOrders.map(
  (order) => "⚡ #" + order.id + " " + order.customer + " — $" + order.total,
);
priorityDisplay.forEach((item) => console.log(item));

// {
//   id: 1007,
//   customer: "Ava Johnson",
//   total: 55.25,
//   status: "pending",
//   items: 2,
//   isPriority: false,
// },
// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Status report object (reduce)
// ----------------------------------------------------------
// Use reduce to build a SINGLE summary object from all orders.
// The object should have this shape:
//   {
//     totalOrders:    number,
//     totalRevenue:   number,
//     deliveredCount: number,
//     pendingCount:   number,
//     cancelledCount: number,
//     priorityCount:  number
//   }
//
// Start the accumulator as an object:
//   { totalOrders: 0, totalRevenue: 0, deliveredCount: 0,
//     pendingCount: 0, cancelledCount: 0, priorityCount: 0 }
//
// On each iteration, increment the right properties.
// Store the result in a const called report.
// Log report.
//
// Hint: inside the reduce callback, update acc properties and return acc.

const accumulator = {
  totalOrders: 0,
  totalRevenue: 0,
  deliveredCount: 0,
  pendingCount: 0,
  cancelledCount: 0,
  priorityCount: 0,
};

const report = orders.reduce((acc, order) => {
  acc.totalOrders += 1;
  acc.totalRevenue += order.total;
  order.status === "delivered" ? acc.deliveredCount++ : acc.deliveredCount;
  order.status === "pending" && acc.pendingCount++;
  order.status === "cancelled" && acc.cancelledCount++;
  order.isPriority === true && acc.priorityCount++;

  return acc;
}, accumulator);

console.log("report is  ", report);
