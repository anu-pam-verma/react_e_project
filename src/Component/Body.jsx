import { useEffect } from "react";
const Card =()=>{
    return(
        <div className="card">
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
        alt="Card"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">React UI Card</h2>
        <p className="card-text">
          This is a beautiful card built using React and CSS. You can use it to display product info, profiles, or anything else.
        </p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
    ) 
}

const Body = () => {

  // const fetchdata = async () => {
        
  //   // const data = await fetch("");

  // }

  // useEffect(()=>{
  //   fetchdata()
  // },[])

  return (
    <main className="body">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </main>
  );
};

export default Body