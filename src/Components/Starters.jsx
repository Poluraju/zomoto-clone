import React from 'react'
import './Starters.css';

let Data = [
  {
    "url":"https://img.freepik.com/premium-photo/chicken-lollipop-is-indian-chinese-appetizer-which-is-frenched-chicken-winglet_466689-77243.jpg",
    "title": "Chickenlolipop",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url":"https://www.atozkurnool.com/assets/uploaded_image/category/thumbs/veg-starters.png",
    "title": "Thai Spicy Fried Chicken",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://urbanblisslife.com/wp-content/uploads/2022/06/Crispy-Air-Fryer-Chicken-Wings-Recipe.jpg",
    "title":"Chicken Wings", 
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.4
  },
  {
    "url":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/7/0/NY0105_Pats-Spicy-Fried-Wings.jpg.rend.hgtvcom.1280.960.suffix/1371585639157.jpeg",
    "title": "Pat's Spicy Fried Wings",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.1
  },
  {
    "url":"https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg",
    "title": "Thai Chicken satay",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.recipetineats.com/wp-content/uploads/2019/03/Thai-Satay-Chicken_8.jpg",
    "title": "thai chicken satay sauce",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.5

  },
  {
    "url":"https://www.skinnytaste.com/wp-content/uploads/2023/06/Grilled-Chicken-Sandwiches-5-1.jpg",
    "title": "Grilled Chicken Sandwich Recipe",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.6
  },
  {
    "url":"https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2020/12/6-Grilled-Chicken-Sandwich-6.jpg?fit=1110%2C832&ssl=1",
    "title": "Grilled Chicken Sandwich",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.4
  },
  {
    "url":"https://healthyfitnessmeals.com/wp-content/uploads/2022/06/Chicken-Salad-Sandwich-8.jpg",
    "title": "Chicken Salad Sandwich",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.4
  },
  {
    "url":"https://www.kitchensanctuary.com/wp-content/uploads/2016/04/Honey-Garlic-Chicken-Skewers-square-FS-21.jpg",
    "title":"Honey Garlic Chicken Skewers" ,
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.1
  },
  {
    "url":"https://www.dinneratthezoo.com/wp-content/uploads/2018/05/grilled-chicken-kabobs-4.jpg",
    "title":"Grilled Chicken Kabobs",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.1
  },
  {
    "url":"https://cookinglsl.com/wp-content/uploads/2014/05/chicken-kebabs-vid1-1.jpg",
    "title": "Grilled Chicken Skewers",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://www.foodnetwork.com/content/dam/images/food/fullset/2016/12/2/0/WU1502H_Grilled-Chicken-Skewers_s4x3.jpg",
    "title": "Grilled Chicken Skewers",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://glutenfreecuppatea.co.uk/wp-content/uploads/2021/06/sticky-chicken-bbq-skewers-recipe-featured.jpg",
    "title":"Sticky Chicken BBQ Skewers Recipe" ,
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://kaleforniakravings.com/wp-content/uploads/2021/09/BBQ-chicken-skewers-5.jpg",
    "title": "Oven Baked BBQ Chicken & Peach Skewers",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.theslowroasteditalian.com/wp-content/uploads/2021/05/Bourbon-BBQ-Chicken-Skewers-SQUARE.jpg",
    "title":"Bourbon BBQ Chicken Skewers" ,
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://gimmesomeoven.com/wp-content/uploads/2019/05/The-Juiciest-Chicken-Kabobs-Recipe-1-2.jpg",
    "title":"The Juiciest Grilled Chicken Kabobs" ,
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://platedcravings.com/wp-content/uploads/2022/10/Air-Fryer-Chicken-Nuggets-Plated-Cravings-5.jpg",
    "title":"Air Fryer Frozen Chicken Nuggets",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.1
  },
  {
    "url":"https://www.effortlessfoodie.com/wp-content/uploads/2023/01/air-fryer-chicken-nuggets-10.jpg",
    "title":"Homemade Air Fryer Chicken Nuggets",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.9
  },
  {
    "url":"https://reallittlemeals.com/wp-content/uploads/2023/03/chicken-nuggets-scaled.jpg",
    "title":"3 Ingredient Chicken Nuggets",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url":"https://www.scrumptiously.com/wp-content/uploads/2023/02/ChickenSpringRolls.webp",
    "title":"Chicken spring roll",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url":"https://mojo.generalmills.com/api/public/content/cEKbPbPv0UOhxj3eT09v3Q_gmi_hi_res_jpeg.jpeg?v=e14d47e3&t=466b54bb264e48b199fc8e83ef1136b4",
    "title":"Garlic Chicken Spring Rolls",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url":"https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
    "title":"chicken tikka",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url":"https://imagevars.gulfnews.com/2023/05/01/Tandoori-chicken_187d79b132b_large.jpg",
    "title":"Tandoori chicken tikka",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.2
  },
  {
    "url":"https://thesassyfoodie.com/wp-content/uploads/2022/02/Air-Fryer-Chicken-Tikka-2-500x375.jpg",
    "title":"Authentic Tandoori Chicken Tikka",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":3.8
  },
  {
    "url": "https://hungryhealthyhappy.com/wp-content/uploads/2019/02/air-fryer-chicken-tikka-featured-c.jpg",
    "title":"Air Fryer Chicken Tikka",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/popcorn-chicken-recipe.jpg",
    "title":"Popcorn Chicken Recipe",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://myfoodstory.com/wp-content/uploads/2016/01/KFC-style-Popcorn-Chicken-11-500x375.jpg",
    "title":"KFC Style Spicy Popcorn Chicken",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://images.immediate.co.uk/production/volatile/sites/30/2016/06/Baked-chicken-drumsticks-caff975.jpg?resize=768,574",
    "title":"chicken drumstick recipes",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://www.recipetineats.com/wp-content/uploads/2022/07/Crispy-Baked-Chicken-Drumsticks_5-SQ.jpg?w=500&h=500&crop=1",
    "title":"Crispy chicken drumstick recipes ",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://easydinnerideas.com/wp-content/uploads/2022/09/Air-Fryer-Lemon-Pepper-Drumsticks-14.jpeg",
    "title":"Lemon Pepper Air Fryer Chicken Drumsticks",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://udaipurmeathouse.com/wp-content/uploads/2022/02/fish-bl03.png",
    "title":"Fish Boneless - Udaipur Meat House",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://img-global.cpcdn.com/recipes/53501194d626e345/400x400cq70/photo.jpg",
    "title":"Crispy Chicken Kabab",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.shanazrafiq.com/wp-content/uploads/2022/05/Chicken-Seekh-Kabab.jpg",
    "title":"Spicy Chicken Seekh Kabab",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://bonmasala.com/wp-content/uploads/2022/06/Chicken-65-recipe.webp",
    "title":"Chicken 65 | Chicken kabab recipe",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://tejumasala.com/cdn/shop/products/fishfry_1024x1024.jpg?v=1653460787",
    "title":"Teju Fish Fry Kabab Powder",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://i.ytimg.com/vi/sLD11hYbVgI/maxresdefault.jpg",
    "title":"Fish Kabab Recipe by SooperChef",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://b.zmtcdn.com/data/pictures/chains/1/19461391/3a0102ddec1e3437e7768902a17495bf.jpg",
    "title":"Karavali Fish Kabab Point",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.masala.tv/wp-content/uploads/2015/01/Fish-Seekh-Kabab-Recipe.jpg",
    "title":"Fish Seekh Kabab Recipe ",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.1
  },
  {
    "url":"https://i.ytimg.com/vi/Hjx_g-FyUko/maxresdefault.jpg",
    "title":"Boneless Fish Kabab recipe",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.3
  },
  {
    "url":"https://i.ytimg.com/vi/o5clEm2RqdU/maxresdefault.jpg",
    "title":"Fish Kabab recipe i",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://d36v5spmfzyapc.cloudfront.net/wp-content/uploads/2019/11/fish-kabab-848x424.png",
    "title":"Boneless Fish Kabab Recipe",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://img-global.cpcdn.com/recipes/322d9ff95a0282b5/1200x630cq70/photo.jpg",
    "title":"Fish Seekh Kababs",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.4
  },
  {
    "url":"https://whatstasty.com/wp-content/uploads/2020/08/apollo-fish-scaled-e1596296681478.jpg",
    "title":"Apollo Fish",
    "price":300,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  }


]
export default function Starters() {
  return (
    <>
      <div className='card'>
      {
       Data.map((item)=>{
          return(
            <div className='cards'>
               <img src= {item.url}alt="" />
              <h3>{item.title.slice(0,25)}</h3>
              <p>{item.discribtion}</p>
              <b>&#8377;{item.price}</b>
              <button className='rating'>{item.rating}</button><br/>
              <button className='btn'>Buy now</button>
            </div>
          )

         })

      }
    </div>
   </>
    
  )
}

    


  