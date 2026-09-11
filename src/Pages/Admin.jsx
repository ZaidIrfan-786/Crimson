import "./CSS/Admin.css";

function Admin() {
  return (
    <div className="admin-page">

      <div className="admin-header">
        <h1>Bakery Admin Dashboard</h1>
        <p>Manage products, orders and customers</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>₹12,450</h2>
          <p>Total Revenue</p>
        </div>

        <div className="stat-card">
          <h2>48</h2>
          <p>Orders Today</p>
        </div>

        <div className="stat-card">
          <h2>18</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>132</h2>
          <p>Customers</p>
        </div>

      </div>

      <div className="admin-container">

        <div className="products-section">

          <h2>Products</h2>

          <table>

            <thead>
              <tr>
                <th>Cake</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Chocolate Truffle</td>
                <td>₹599</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>Red Velvet</td>
                <td>₹699</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>Black Forest</td>
                <td>₹549</td>
                <td>Available</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="add-product">

          <h2>Add Product</h2>

          <input
            type="text"
            placeholder="Cake Name"
          />

          <input
            type="number"
            placeholder="Price"
          />

          <textarea
            placeholder="Description"
          ></textarea>

          <button>
            Add Product
          </button>

        </div>

      </div>

      <div className="orders-section">

        <h2>Recent Orders</h2>

        <div className="order-card">
          <h3>Order #1001</h3>
          <p>Chocolate Truffle</p>
          <span>Delivered</span>
        </div>

        <div className="order-card">
          <h3>Order #1002</h3>
          <p>Red Velvet Cake</p>
          <span>Preparing</span>
        </div>

      </div>

    </div>
  );
}

export default Admin;