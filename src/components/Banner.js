import React from "react";
import '../styles/Banner.css';

function Banner() {

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
        color: '#fff'
      }}
    >
     <div class="banner__contents">
       <h1 class="banner__title">Movie Name</h1>
       <div class="banner__buttons">
         <button class="banner__button">Play</button>
         <button class="banner__button">My List</button>
       </div>
       <h1 class="banner__description">{truncate(`This is a test description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam culpa rem vel aliquid! Architecto vitae fugiat, facilis fugit cupiditate officia error optio deserunt nam nesciunt magni sit aspernatur minus voluptatem, eligendi excepturi! Rerum, odit vero dolorem dignissimos voluptatibus explicabo maiores vel sequi commodi illum ipsa quod maxime quas delectus eaque autem? Quidem nesciunt atque at beatae temporibus architecto ex commodi exercitationem voluptates nihil earum magnam eaque, debitis pariatur fugit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut aspernatur doloribus, tempora perferendis aliquam dolor in pariatur explicabo, dicta veritatis esse incidunt, reprehenderit totam quisquam? Expedita, ipsum. Repudiandae animi officiis, ullam quae consequatur architecto atque corporis quas eaque quos explicabo amet fugiat esse vel ipsum. Saepe hic omnis qui soluta excepturi quae quisquam debitis maiores placeat aspernatur vitae minima, molestiae, eligendi, molestias repudiandae. Sequi rem, ipsum, ad suscipit earum nihil tempore dolores in sit fuga voluptas. Suscipit temporibus nesciunt quibusdam dignissimos? Labore, aliquam! Debitis, nesciunt. Tempora amet saepe eveniet aperiam repellat, cupiditate quos voluptas reprehenderit error nobis facilis modi?`, 150)}</h1>
     </div>

     <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
