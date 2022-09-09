function Footer() {
    return (
      <div id="footer">

        <div className="contact">
        <h3>Talk To Us!</h3>
        <form id="contact-us">
          <input type="text" name="fname" value="First Name"/>
          <input type="text" name="lname" value="Last Name"/>
          <input type="text" name="email" value="Email" placeholder="Email" required/>
          <textarea value="content" placeholder="Write here..."/>
          <input type="submit" value="Submit"/>
        </form>
        <strong><p></p></strong>
        </div>
      </div>
   )};
  export default Footer;