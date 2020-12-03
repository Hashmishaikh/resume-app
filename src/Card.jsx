import React from "react";
import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";
import './Card.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import './Modal.js';

const Card = (props) => {
  return (
    <>
      {/* <div className="col-md-4 col-12 mx-auto"> */}
      <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="info">9503165827<br />
            hasmishiakh1574@gmail.com / abdulshaikh18pc@student.mes.ac.in<br />
            PHCASC College<br />
            Rasayani,IN
          </p>
          <p className="card-text">
            <hr />
            <h3>Key Skills</h3>
            <hr />
            <ul>
              <li>Team Leadership</li><li>Web Devlopment Lifecycle</li>
              <li>Responsive WebDesigning</li><li>Client Relationship Management</li>
            </ul>
            <br />
            <hr />
            <h3>Techinical Skills</h3>
            <hr />
            <b>Languages</b>: javascript,css,html,java,Php<br />
            <b>FrameWork</b>: Nodejs,Expressjs,Reactjs,AndriodStudio<br />
            <b>Database System</b>: Oracel SQL,MongoDB

             <hr />
            <h3>Professional Experiance</h3>
            <hr />
             I've done one internship in Flipkart.When I was in first year: April-May(2019)<br /><br />
            <img className="intern_cert" src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-b4ecf.appspot.com/o/images%2F_20201129_130407.jpg?alt=media&token=b3aad8be-4b56-413c-b8f8-88a517a9da86" />
            {/* <!-- Button trigger modal --> */}<br /><br />
            <button type="button" class="btn btn-primary but" data-toggle="modal" data-target="#staticBackdrop">
              Click to see
             </button>
            <br />
            <br />
            <hr />
            <h3>Education</h3>
            <hr />
            <li> PRIA School: 10th 2016</li><br />
            <li>Mahatma Education Society’s HOC International School and Junior College of Science & Commerce, RASAYANI: 12th 2018 </li><br />
            <li>Pillai HOC College Of Arts,Commerce&Science: 3rd Year BSC(IT) Current.</li>
            <br />
            <br />
            <hr />
            <h3>Links of Project</h3>
            <hr />
            <h4>This are my personal Project Which I've Made</h4><br />
            <b>Messanger-Clone</b>: <a href="https://messanger-clone-a1685.web.app/">
              https://messanger-clone-a1685.web.app/
             </a><br />
            <b>TikTok-Clone</b>: <a href="https://tik-tok-clone-1d87e.web.app/">
              https://tik-tok-clone-1d87e.web.app/</a>
            <br />           
            <b>Instagram-Clone</b>: <a href="https://instagram-clone-b4ecf.firebaseapp.com/">
              https://instagram-clone-b4ecf.firebaseapp.com/</a><br />    
            <b>Tinder-Clone</b>: <a href="https://tinders-clone-6470f.web.app/">
              https://tinders-clone-6470f.web.app/
             </a>
            <br /><br />
            <h6>I HEREBY DECLARE THAT ALL THE ABOVE INFORMATION PROVIDED IS TRUE </h6>
          </p>
          <NavLink to="" className="btn btn-primary">
            Thank You
            </NavLink>
        </div>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Intern Certificate</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img className="intern_cert_modal" src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-b4ecf.appspot.com/o/images%2F_20201129_130407.jpg?alt=media&token=b3aad8be-4b56-413c-b8f8-88a517a9da86" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


      </div>



      {/* </div> */}
    </>
  );
};

export default Card;
