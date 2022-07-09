
import {BsGithub} from 'react-icons/bs';
import {SiNetlify} from 'react-icons/si';
const Project = ({image,tittle,name, category,stacks,Link}) => {
    return (
        <div>
        <div className="card shadow p-3 mb-5 bg-white rounded ml-3" style={{width: "18rem", height:"38rem"}}>
            <img className="card-img-top"  style={{height: "14em"}} src={image} alt="Card image cap"/>
            <div className="card-body"> 
                <h5 className="card-title text-center">{tittle}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='h6'>Repository name:</span> {name}</li>
                <li className="list-group-item"><span className='h6'>Development category:</span> {category}</li>
                <li className="list-group-item"><span className='h6'>Tech stacks:</span> {stacks}</li>
            </ul>
            <div className="card-body text-center">
                <a href={Link}>
                    {Link.includes('github') ? 
                        
                         <BsGithub  className="text-danger display-4"/>:
                         <SiNetlify className="text-danger display-4"/>
                    }
                </a>
            </div>
        </div>
        </div>
     );
}
 
export default Project;