import React from "react";
import Comments from "../Comments/Comments";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={styles.Details}>
      <div className={styles.MetaData}>
        <p>Ms Swarada Bhosale</p>
        <p>26 Mar 2023</p>
      </div>
      <div className={styles.Details_FirstContainer}>
        <div className={styles.Details_InnerDiv}>
          <h1 className={styles.title}>
            A hamster is found stealing the food from the plate, reporters are
            saying he might have to spend 1 hour inside the cage
          </h1>
          <p className={styles.Description}>
            You don't have to read this paragraph cz it doesn't contain any
            useful information you are just wasting your precious time, leave it
            and get a life
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="adfadf"
          />
        </div>
      </div>
      <div className={styles.InfoContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A hic quas
          delectus quasi ducimus numquam! Expedita eaque dolor rerum, voluptas
          laborum asperiores dolores ea. Ad hic ea nostrum culpa deleniti cumque
          corporis deserunt obcaecati autem unde. Sapiente voluptatem dolore
          velit corporis dolorum in est. Commodi quis fugit harum ab accusantium
          sequi recusandae consequatur. Fugit ad porro nostrum accusamus? Sunt
          suscipit impedit laborum tempore esse magnam dicta explicabo quisquam
          velit obcaecati, exercitationem ab totam, dolore quam. Atque porro
          velit neque recusandae dolor autem asperiores ab incidunt laborum,
          accusantium consectetur. Minus eaque illum iure tenetur eveniet
          doloribus harum eligendi, molestias assumenda possimus aperiam quis!
          Tempora commodi provident accusantium at rerum nihil vitae, voluptatum
          totam doloremque accusamus necessitatibus hic aliquid, laudantium ex!
          Praesentium aliquam dolorem aperiam voluptas delectus omnis dolor
          exercitationem dolore nemo sed? Nesciunt animi itaque id nobis velit
          officia quam molestiae, asperiores, assumenda ratione sint consequatur
          incidunt perspiciatis cum blanditiis corporis doloremque consectetur
          dolor accusamus cumque illum non. Deserunt, doloribus nulla natus
          perferendis a unde quam ipsum, odio quia laborum soluta nobis illo.
          Consectetur culpa ducimus, animi consequuntur eveniet, repudiandae
          doloribus ad maiores illum expedita dolorem iste. Dicta, quos
          laboriosam! Ea incidunt laborum tenetur neque dolor illo? Corrupti
          consequatur nisi, nam, veniam quod iste dolorum voluptatem pariatur
          nesciunt asperiores voluptatum aut! Alias optio saepe ut placeat.
          Sapiente rem incidunt amet fugit natus a esse iste praesentium, minima
          officiis quaerat placeat, maiores deleniti eos, dolor perspiciatis
          neque repudiandae sit! Vitae reprehenderit delectus inventore
          exercitationem ipsa maiores eligendi nulla nemo aliquam provident
          suscipit, officiis saepe distinctio sunt error soluta explicabo minima
          praesentium ab nihil ipsum, expedita aliquid quod. Similique placeat
          architecto magni doloremque? Commodi quisquam sed earum fugiat. Magni
          porro optio eaque soluta itaque dolore libero vitae? Eos, molestias,
          eius quas blanditiis porro earum dolores nulla praesentium iusto,
          dolorem nostrum! Adipisci numquam sint, velit voluptates provident
          commodi esse! Sapiente alias cumque eos similique facilis harum
          eligendi minus id omnis exercitationem deleniti dolorum fuga adipisci
          distinctio quibusdam, et praesentium corporis in quas nemo enim
          dolores? Itaque omnis earum quibusdam impedit facilis ipsa sint
          possimus. Aut molestiae recusandae neque quasi hic, quibusdam
          voluptatem error quae perferendis, ipsum modi voluptatum vero corrupti
          autem ab aperiam accusantium beatae harum perspiciatis. Aliquid, qui
          inventore nobis repellat cupiditate odio nesciunt accusantium a neque
          dolorem! Inventore, maiores optio, eius consequatur reprehenderit
          soluta necessitatibus eveniet incidunt quae maxime quia. Veritatis,
          fuga nostrum incidunt quia optio nam, animi rerum, necessitatibus
          vitae nisi quaerat? Necessitatibus quaerat perspiciatis modi unde
          illum rerum consequatur exercitationem tempora architecto beatae.
          Explicabo maxime aperiam dolores suscipit voluptatem sed aliquid
          possimus repellat pariatur. Ipsum nam quam impedit similique nesciunt
          sunt deleniti dolorem, sit soluta temporibus voluptatibus! Aliquam ex
          voluptate quas exercitationem vitae ea eveniet? Eaque autem
          dignissimos quos consectetur hic quisquam dolores dicta incidunt
          libero, animi optio totam harum earum perferendis. Molestiae labore
          aliquid voluptatibus totam tempore saepe, fuga, quas vitae modi
          assumenda similique repellendus sunt facilis voluptatem ullam quos
          reiciendis magni! Repudiandae, tempora rem voluptatibus totam eveniet
          minima! Quo placeat accusantium praesentium dolores aliquam nemo
          veniam sunt ex.
        </p>
      </div>
      <Comments />
    </div>
  );
};

export default Details;
