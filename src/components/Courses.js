import background from "./images/blog-2.jpg";
import background1 from "./images/blog-3.jpg";
import background2 from "./images/blog-4.jpg";
import background3 from "./images/blog-5.jpg";
import background4 from "./images/blog-6.jpg";
import background5 from "./images/blog-7.jpg";

const Courses = () => {
  return (
    <div class="grid211">
      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background} alt="Rome" />

          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">50%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Agile development</h1>

            <a class="card2221-btn" href="/Modulehome">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background1} alt="Grand Canyon" />
          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">70%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Web Api development</h1>

            <a class="card2221-btn" href="/Modulehome2">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background2} alt="Maldives" />
          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">10%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Individual project</h1>

            <a class="card2221-btn" href="/Modulehome3">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background3} alt="Maldives" />
          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">20%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Designing for usability</h1>

            <a class="card2221-btn" href="/Modulehome4">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background4} alt="Maldives" />
          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">40%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Academic writing 3</h1>

            <a class="card2221-btn" href="/Modulehome5">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="grid211-item">
        <div class="card2221">
          <img class="card2221-img" src={background5} alt="Maldives" />
          <div class="progresscon">
            <div class="skill-box">
              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">60%</span>
                </span>
              </div>
            </div>
          </div>

          <div class="card2221-content">
            <h1 class="card2221-header">Interactive pervasive computing</h1>

            <a class="card2221-btn" href="/Modulehome6">
              Enroll now <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
