function Resume() {
    
    return (
      <div className="resume-wrapper">
        <div className="down-btn">
          <a href={process.env.PUBLIC_URL + '/resume/_.resume.html'} download>
            <button>Download CV</button>
          </a>
        </div>
        <div className="resume-con" style={{backgroundColor:'white'}}>
          <iframe
            id="frame"
            title="Resume"
            src={process.env.PUBLIC_URL + '/resume/_.resume.html'}
            width="100%"
            height="1400px"
          ></iframe>
        </div>
        <div className="down-btn">
          <a href={process.env.PUBLIC_URL + '/resume/_.resume.html'} download>
            <button>Download CV</button>
          </a>
        </div>
      </div>
    );
  }
  
  export default Resume;
  