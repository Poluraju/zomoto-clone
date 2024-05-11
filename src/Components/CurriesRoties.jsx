import React from 'react'
import './CurriesRoties.css';

let Data=[
  {
    "url":"https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-500x500.jpg",
    "title":"Tandoori Roti",
    "price":50,
    "discribtion":"Make restaurant style Tandoori Roti",
    "rating":4.2
  },
  {
    "url":"https://momsmenu.in/pub/media/catalog/product/cache/302932e06c75cb63782eab83a283aca3/r/o/roti_andhra_chicken.jpg",
    "title":"Roti Andhra Chicken ",
    "price":130,
    "discribtion":" Keep it lite but spice it up with our Andhra Chicken combo with Roties",
    "rating":4.2
  },
  {
    "url":"https://www.yummytummyaarthi.com/wp-content/uploads/2020/04/1-37.jpg",
    "title":"Makkan Roti with Dhaba Chicken",
    "price":150,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":4.1

  },
  {
    "url":"https://www.woolworths.co.za/images/elasticera/New_Site/Food/Content/Chicken_rotis.jpg",
    "title":"Ready-made Chicken Rotis",
    "price":140,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":3.8
  },
  {
    "url":"https://www.yummytummyaarthi.com/wp-content/uploads/2020/04/1-37.jpg",
    "title":"Makkan Roti with Dhaba Chicken",
    "price":180,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":4.2

  },
  {
    "url":"https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/15/21/70/JTaQ6IgeQwG0MY6cjO2g_1415850927098.jpg",
    "title":"Chicken Curry and Roti",
    "price":150,
    "discribtion":"This is a recipe from my Fijian mother",
    "rating":4.3

  },
  {
    "url":"https://i.pinimg.com/originals/44/c7/15/44c715c7c47d7897401e93b9e24f491b.jpg",
    "title":"Roti with chicken lollipop ",
    "price":130,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":4.2

  },
  {
    "url":"https://www.cookwithkushi.com/wp-content/uploads/2022/05/IMG_0329k.jpg",
    "title":"Chicken roast is a flavor-packed",
    "price":180,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":4.2

  },
  {
    "url":"https://images.halaal.recipes/12-09-17/2017-09-12-12-13-55-GWg6Z.jpg",
    "title":"Chicken Roti Wraps My Recipe",
    "price":200,
    "discribtion":"Chicken Masala is a classic north indian chicken curry of chicken ",
    "rating":4.2

  },
  {
    "url":"https://www.missionfoods.com/wp-content/uploads/2022/06/chicken-tikka-masala-roti.jpg",
    "title":"Chicken Tikka Masala with Roti",
    "price":130,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken ",
    "rating":4.2

  },
  {
    "url":"https://sinamontales.files.wordpress.com/2015/01/dsc_0500.jpg",
    "title":"Jowar Roti and Chicken Saaru",
    "price":150,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://www.gozney.com/cdn/shop/articles/shoot-64_chicken-roti_v1-2000x1125.jpg?v=1629382858",
    "title":"Chicken Roti Wrap",
    "price":150,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://img-global.cpcdn.com/recipes/58d558d8c0de31f7/680x482cq70/chilli-chicken-with-plan-roti-recipe-main-photo.jpg",
    "title":"Chilli chicken with plan roti ",
    "price":160,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7uqQPhzuKlmpVfi7EHmOCxPkmlKwoAe1Lw&usqp=CAU",
    "title":"Chicken Kasha - Tawa roti ",
    "price":160,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://imgmedia.lbb.in/media/2019/06/5cfeb1be51c6be2cf541b2a5_1560195518276.jpg",
    "title":"Spicy Butter Chicken & Tandoori",
    "price":190,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://dinnerthendessert.com/wp-content/uploads/2020/06/Oven-Baked-Rotisserie-Chicken-Breasts-1x1-1.jpg",
    "title":"Oven Baked Rotisserie Chicken",
    "price":180,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://static.wixstatic.com/media/05c508_372c541385e54c16b05f2bab628f4d43~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/05c508_372c541385e54c16b05f2bab628f4d43~mv2.jpg",
    "title":"The Best Chicken Curry and Roti Combo",
    "price":170,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://i.pinimg.com/736x/40/93/6e/40936e3caac8369d80400a1153ceab3a.jpg",
    "title":"Dhaba style Chicken Curry",
    "price":150,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://i.pinimg.com/originals/13/5e/c4/135ec4b5f3453f2b4bd61f466e165dea.jpg",
    "title":"Butter Chicken Roti",
    "price":200,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://1.bp.blogspot.com/-RJR63MUf3F8/XrGGVgg7rgI/AAAAAAAAQbk/EWUq9tJvB7g_n5UUow3tq-0lNr4QaeGFQCEwYBhgL/s1600/Restaurant%2BChicken_Curry.JPG",
    "title":"Restaurant Style Chicken Curry",
    "price":170,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://www.familyfoodonthetable.com/wp-content/uploads/2022/01/Rotisserie-style-roast-chicken-8.jpg",
    "title":"Restaurant Style Chicken Curry",
    "price":180,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://img-global.cpcdn.com/recipes/38386d7886166b26/680x482cq70/jamaican-chicken-curry-and-chapati-recipe-main-photo.jpg",
    "title":"Jamaican chicken curry and chapati ",
    "price":160,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://www.skinnytaste.com/wp-content/uploads/2023/04/Rotisserie-Style-Air-Fryer-Whole-Chicken-5.jpg",
    "title":"Air Fryer Rotisserie Chicken",
    "price":200,
    "discribtion":"Chicken Masala is a classic indian chicken curry of chicken",
    "rating":4.2

  },
  {
    "url":"https://img-global.cpcdn.com/recipes/58a981620b373102/680x482cq70/mutton-curry-with-chapati-recipe-main-photo.jpg",
    "title":"Mutton Curry With Chapati Recipe",
    "price":220,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://i.ytimg.com/vi/zMA8c_ogTLU/maxresdefault.jpg",
    "title":"Mutton Curry With Tandoori Roti",
    "price":320,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://static.toiimg.com/thumb/52554168.cms?width=1200&height=900",
    "title":"Mutton Korma ",
    "price":330,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://maunikagowardhan.co.uk/wp-content/uploads/2016/03/Tariwalla-Gosht-700x467.jpg",
    "title":"Punjabi Tariwala Gosht",
    "price":320,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8s8CbYF3_7lQ-MA0sFOFzC8UKINNDZB9TA&usqp=CAU",
    "title":"Mutton tikka tawa with rumali roti",
    "price":300,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://static.toiimg.com/thumb/54407258.cms?imgsize=164312&width=800&height=800",
    "title":"Mutton Curry Recipe",
    "price":330,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://i.ytimg.com/vi/DVjSniiE-IY/maxresdefault.jpg",
    "title":"mutton angara rumali roti",
    "price":230,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://thenirvana.in/uploads/2020/09/69610418_1599286919_Mutton%20Curry%20(2%20Pcs.)%20+%20Rice.jpg",
    "title":"Mutton Curry  Butter Roti ",
    "price":310,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://pixahive.com/wp-content/uploads/2020/12/Roti-with-Mutton-Curry-242711-pixahive.jpg",
    "title":"Roti with Mutton Curry - PixaHive",
    "price":230,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://static.toiimg.com/thumb/63201465.cms?imgsize=78891&width=800&height=800",
    "title":"Punjabi Mutton Curry",
    "price":330,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://eastindianrecipes.net/wp-content/uploads/2023/01/Goan-Mutton-Masala-Recipe2.jpg",
    "title":"Goan Mutton Curry",
    "price":280,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://static.toiimg.com/thumb/84667091.cms?imgsize=446034&width=800&height=800",
    "title":"Black Mutton Curry Recipe",
    "price":230,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://www.cookwithipohbunny.com/wp-content/uploads/2023/01/IMG_20230130_154348.jpg",
    "title":"Hyderabad Mutton Masala",
    "price":320,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/gloria-fernandes20170618180314228.jpeg",
    "title":"Mutton Curry recipe ",
    "price":310,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450&ssl=1",
    "title":"SIMPLE MUTTON CURRY",
    "price":340,
    "discribtion":"Mutton is a spicy tasty dry curry",
    "rating":4.2

  },
  {
    "url":"https://www.mydelicious-recipes.com/home/images/230_1200_1200/mydelicious-recipes-mutton-curry",
    "title":"Mutton Curry",
    "price":320,
    "discribtion":"is a super delicious gravy where the meat is cooked until succulent in flavorful spices",
    "rating":4.2

  },
  {
    "url":"https://i.ytimg.com/vi/3Qq8mwiInA8/maxresdefault.jpg",
    "title":"Mutton Sukka Recipe",
    "price":330,
    "discribtion":"Mutton Sukka is a spicy tasty dry curry made by cooking evenly cut small chops of mutton ",
    "rating":4.2

  },
  {
    "url":"https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg",
    "title":"North indian fish curry",
    "price":230,
    "discribtion":"Enjoy a Tasty Meal with Hot Rice and North Indian Fish Curry ",
    "rating":4.2

  },
  {
    "url":"https://www.teaforturmeric.com/wp-content/uploads/2023/06/Fish-Curry-Recipe.jpg",
    "title":"Fish Curry (Fish Masala)",
    "price":430,
    "discribtion":"Spicy and tangy classic",
    "rating":4.2
  },
  {
    "url":"https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-7-500x375.jpg",
    "title":"Fish Curry (Indian Recipe)",
    "price":400,
    "discribtion":"Spicy and tangy classic",
    "rating":4.2 
  },
  {
    "url":"https://grubvineweb.com/wp-content/uploads/2022/08/Bengali-Fish-curry-Recipe-Main-Image-Grubvineweb.webp",
    "title":"Bengali Fish Curry Recipe",
    "price":380,
    "discribtion":"Mustard seeds are highly aromatic when cooked and have a slightly nutty and smoky, flavour",
    "rating":4.2
  },
  {
    "url":"https://figarooliveoil.com/wp-content/uploads/2022/02/fish-curry.png",
    "title":"Anjeer Date Burfi",
    "price":370,
    "discribtion":"Spicy and tangy classic",
    "rating":4.2
  },
  {
    "url":"https://3.bp.blogspot.com/-LEnCdfXBjpQ/Vf3kss548pI/AAAAAAAATnQ/wdW6VhR3eB8/s1600/KottayamStyleFishCurry.jpg",
    "title":"Kerala Style Fish Curry Without Coconut",
    "price":350,
    "discribtion": "A delicious, creamy fish curry with goodness of coconut milk",
    "rating":4.2
  },
  {
    "url":"https://www.licious.in/blog/wp-content/uploads/2020/12/Malabar-Matti-Curry-600x600.jpg",
    "title":"Malabar Matthi curry ",
    "price":320,
    "discribtion":" A delicious, creamy fish curry with goodness of coconut milk",
    "rating":4.2
  },
  {
    "url":"https://www.eatshop.com.au/cdn/shop/products/b23.jpg?v=1596895944",
    "title":"Jelley fish salad",
    "price":230,
    "discribtion":" A delicious, creamy fish curry with goodness of coconut milk",
    "rating":4.2
  }
  
    

]
export default function CurriesRoties() {
  return (
    <>
      <div className='card'>
      {
       Data.map((item)=>{
          return(
            <div className='cards'>
               <img src= {item.url}alt="" />
              <h3>{item.title.slice(0,30)}</h3>
              <p>{item.discribtion.slice(0,40)}</p>
              <b>&#8377;{item.price}</b>
              <button className='rating'>{item.rating}</button><br />
              <button className='btn'>Buy now</button>
            </div>
          )

         })

      }
     </div>
      </>
    
    )
  }
  
