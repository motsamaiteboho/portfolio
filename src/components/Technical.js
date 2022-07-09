import {FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const TechnicalSkils = () => {

    const FrontEnd = ["ReactJS","AngularJS","Javascript",
    "Test Driven Development(TDD)","Mocha setup","Building DOM widgets",
    "Template setup","Handlebars","Git and Github"];

    const BackEnd = [" REST API's","MySql server","Entity Framework",
    "NodeJS","ExpressJS"]

    const Skills = ["Data structures and Advanced Programming in C#",
    "Design Patterns in C#","Internet programming C#",
    "Databases in MySQL Server","Scientific computing in MatLab",
    "Software Engineering and Human Computer Interaction",
    "Data cleaning with python","Data visualization",
    "JavaScript Algorithms and Data Structures","Responsive Web Design"];
    return ( 
        <>
        <article className="m-5 text-center">
            <p id="technicalskills" className="text-center display-3">TECHNICAL SKILLS</p>
            <p className="underline"></p>
            <p>
                I have worked with various technology stacks such as C# Web Application Development(ASP .NET CORE AND API's),
                Core Web Development tools(bootstrap,and fontawesome),JAVA,Python,The terminal, JavaScript, Ajax, DOM, HTML &
                CSS,Jupiter notebook(python) and MathLab. I'm current working with
                the following tech stacks:
            </p>
            <p  className="h5">Front-end Development:</p>
            <ul>
               {FrontEnd.map((tech,index)=>{
                return <li key={index}><span className='h6'>{"<> "}</span>{tech}<span className='h6'>{" </>"}</span></li>
               })
               }
            </ul>

            <p className="h5">Back-end Development:</p>
            <ul>
                { BackEnd.map((tech,index)=>{
                    return <li key={index}> <span className='h6'>{"<> "}</span>{tech}<span className='h6'>{" </>"}</span></li>
                })
                }
            </ul>
            <p className="h5">Here are other kills of I have acquired so far:</p>
            <ul>
                { Skills.map((tech,index) => {
                    return <li key={index}><span className='h6'>{"<> "}</span>{tech}<span className='h6'>{" </>"}</span></li>
                })
                }
            </ul>
        </article>
        </>
     );
}
 
export default TechnicalSkils;