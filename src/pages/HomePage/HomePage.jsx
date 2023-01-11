import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <img src="https://i.imgur.com/mJKh8i7.jpg" 
      alt=""
      style={{
        height: "300px",
        width: "300px",
        borderRadius: "50%",
        border: "solid 1vmin rgba(255, 255, 255, 0.6)",
        marginTop: "20vh"
      }}
      />
      <h1 
      style={{
        color: "white",
        textShadow: "1px 1px 3px black",
        // background: 'rgba(0, 0, 0, 0.6)',
        width: "30vw",
        margin: "5vmin auto 0"
      }}
      >Hi, I am Cormac, a full stack web developer!</h1> 
    </div>
  )
}