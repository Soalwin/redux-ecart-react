import React from "react";
import { Link } from "react-router-dom";

function App({insideHome}) {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>My Website</h1>
       {insideHome && <input style={{width:'300px'}} className="roudned border p-2" placeholder="search products name" type="text" />}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/wishlist" style={styles.link}>Wishlist</Link>
                    <Link to="/cart" style={styles.link}>cart</Link>
        </nav>
      </header>

    
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#282c34",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  title: {
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  main: {
    marginTop: "40px",
  },
};

export default App;
