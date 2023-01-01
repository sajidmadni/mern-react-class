import React from 'react';


const Footer =  () => {
    const currentDate = new Date();
    var style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
        marginTop: "20px"
    };

  return (
    <div>
        <div style={style}>
            Copyright MERN techlift program @{currentDate.getFullYear()}
        </div>

    </div>
  )
}

export default Footer;