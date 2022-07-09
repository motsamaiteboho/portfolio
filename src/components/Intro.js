import { useDispatch } from "react-redux/es/exports";
import { closeSubmenu } from "../Redux";

const Introducton = () => {
    const styles = {height: "250px", borderRadius:"300px",  borderStyle: "solid", borderColor:'black'}
    const dispatch = useDispatch();
    return (
        <div  onMouseOver={() => dispatch(closeSubmenu())}>
         <div className="row m-5 d-flex">
            <div className="col-lg-6 text-center m-auto">
                <p className="h1">Teboho Luckyboy Motsamai</p>
            </div>
            <div className="col-lg-6 text-center">
                <img src="./images/myself1.jpg" alt="teboho picture" style={styles} className="rounded-circle" />
            </div>
        </div>
        <div className="m-5">
            <p className="text-center display-3 ">ABOUT ME</p>
            <p className="underline"></p>
            <p className="lead text-center mt-3">
            Hello, my name is Luckyboy Teboho Motsamai from Phomolong, Hennenman in Free State
            but I'm currently based in Bloemfontein. I'm very passionate about the technology
            and always looking forward to learning new skills. I like being up to date with 
            latest advancements in software development. I have some background in software development,
            having studied BSc in Computer science and Mathematics.I'm good at picking up new skills. 
            I've worked on variety of different technologies. For most of those technologies,
            I ended up picking up all the skills within the short period of time.
            I currently attending full-stack agile web development training at Project Codex.
            I have completed some online courses to further develop my skills and acquire more knowledge.
            I have just the right skill-set to excel as junior software developer.
            I am confident that the role as entry-level software developer will allow me to further develop my skills
            and contribute as much of value as I can on the growth of the company.If you would to reach out to me,
            you can contact me <a href="/contactme">here</a>.
            </p>
        </div>
        </div>
       
    );
}
 
export default Introducton;