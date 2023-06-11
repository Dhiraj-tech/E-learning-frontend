import background from "./images/home-img.png";
import background1 from "./images/category-1.png";
import background2 from "./images/category-2.png";
import background3 from "./images/category-3.png";
import background4 from "./images/category-4.png";
import background5 from "./images/category-5.png";

const Loginhome = () => {
  return (
    <section class="homeey">
      <div class="image212">
        <img src={background} alt="" />
      </div>

      <div class="content">
        <h3>your course to success</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque
          neque quam amet perferendis sed rem ut tenetur porro praesentium.
        </p>
        <a href="/Courses" class="btn21">
          Explore the course
        </a>
      </div>

      <div class="category2211">
        <a href="#" class="box">
          <img src={background1} alt="" />
          <h3>computer science</h3>
        </a>

        <a href="#" class="box">
          <img src={background2} alt="" />
          <h3>biology & life</h3>
        </a>

        <a href="#" class="box">
          <img src={background3} alt="" />
          <h3>business analysis</h3>
        </a>

        <a href="#" class="box">
          <img src={background4} alt="" />
          <h3>social science</h3>
        </a>

        <a href="#" class="box">
          <img src={background5} alt="" />
          <h3>data analysis</h3>
        </a>
      </div>
    </section>
  );
};

export default Loginhome;
