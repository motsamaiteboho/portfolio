import Project from "./Project";
const Softwares = () => {
    const projectList = [
        {
            image: "./images/react_logo.png",
            tittle :"WEB APP",
            name: "CART",
            category: "Front-End",
            stacks: "JSX 69.0%, Bootstrap 20.1% & CSS 10.0%",
            Link:"https://reactjs-cart.netlify.app"
        },
        {
            image: "./images/js_logo.png",
            tittle :"WEB APP",
            name: "Total bill App usind",
            category: "Full stack",
            stacks: "JavaScript 52.9%, HTML 43.9% & CSS 3.2%",
            Link:"https://motsamaiteboho.github.io/dom-intro/"
        },
        {
            image: "./images/react_logo.png",
            tittle :"WEB APP",
            name: "cocktailsdb",
            category: "Front-End",
            stacks: "React, useContext API 52.9%, HTML 43.9% & CSS 3.2%",
            Link:"https://reactjs-cocktailsdb.netlify.app"
        },
        {
            image: "./images/js_logo.png",
            tittle :"WEB APP",
            name: "Total bill App usind",
            category: "Full stack",
            stacks: "JavaScript 52.9%, HTML 43.9% & CSS 3.2%",
            Link:"https://motsamaiteboho.github.io/dom-intro/"
        }
    ]
    return ( 
        <div className="m-5">
            <p className=" text-center display-3"> SOFTWARES</p>
            <p className="underline"></p>
            <div className="container">
            <div className="row">
                {projectList.map((project,index)=>{
                return  <Project key={index} {...project} /> 
            })
            }
            </div>
            </div>
            
        </div>
     );
}
 
export default Softwares;