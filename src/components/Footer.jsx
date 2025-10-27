import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 MyWebsite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
