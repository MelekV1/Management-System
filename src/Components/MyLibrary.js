import React from 'react'
const MyLibrary=()=>{
  return(
<React.Fragment>

      <div className="about-section">
        <h1>
        My Library is an application built to help user manage his ressources such as files , movies ,games ,books as well as his lists like to-do-list etc.. and
        in an organized way so that he can filter it , perform search and read brief and detailed description about each item according to his choice.</h1>
      </div>


      <div className="Mecard">

        <div className="Mecontainer">
          <p >Developped by <b>Malek</b></p>
          <p>Computer Science Engineering Student at the National School of Engineering of Tunis</p>
          <p>Malek.ammar@etudiant-enit.utm.tn</p>
          <p><button className="contact-btn">Contact</button></p>
        </div>

    </div>
</React.Fragment>
  )
}
export default MyLibrary
