import "./First.css";
import pic from './pic.jpg';
import resume from "./cv.pdf";
export default function First(){
    return(
        <>
        <div className="container">
       
           <span className="name"><h1>Washeem Ansari</h1></span>
            <span> <img src={pic} alt="__" /> </span>
           <br /><br />
           <br /><div><h2>Web Developer</h2>
           <a href={resume}><button>Download! CV</button></a>
           
            </div> 
           </div>
            </>
    )
}