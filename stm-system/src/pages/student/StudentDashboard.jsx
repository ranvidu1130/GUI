import React from "react";
import "./Main.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";

function Main() {
  return (
    <div className="meow">
      <div className="black_box">Nav Bar</div>
      <br />

      <div className="topic">Avro Education</div>
      <br />
      <br />

      <div className="desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto culpa,
        est excepturi eum eveniet quod corporis fuga laborum perspiciatis
        facilis aliquam accusamus voluptate numquam consequatur voluptatibus
        dolorem, distinctio corrupti reprehenderit cupiditate ad, animi
        temporibus voluptates libero autem? Pariatur accusamus, consequuntur
        veniam id quae ullam in dicta voluptatibus assumenda ipsam incidunt
        quibusdam porro labore perferendis. Consequatur molestiae obcaecati
        commodi illum numquam harum ipsum ea consequuntur ipsam aliquam iste
        laborum dolorem minus sapiente hic fugit earum quos nihil ratione
        fugiat, blanditiis assumenda explicabo. Distinctio libero architecto,
        reiciendis esse accusamus perferendis modi ea eum, est, corrupti quis
        vel dolorem porro illo eaque pariatur.
      </div>

      <div className="card">
        <div>
          <span class="number">+18000</span>
          <span class="label">Students</span>
        </div>
        <div>
          <span class="number">+100</span>
          <span class="label">Classes</span>
        </div>
        <div>
          <span class="number">+40</span>
          <span class="label">Teachers</span>
        </div>
      </div>
      <br />

      <div className="but">
        <button id="but1"><IoBookOutline /> My Classes</button>
        <button id="but2"><SiGoogleclassroom /> Associated Classes</button>
        <button id="but3"><IoSearchSharp /> Explore</button>
      </div>
    </div>
  );
}

export default Main;
