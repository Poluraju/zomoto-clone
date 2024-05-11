import React from 'react'

let Data=[
  {
    "url":"https://img.bestrecipes.com.au/VSkrhXg8/w643-h428-cfill-q90/br/2021/03/raspberry-flummery-sponge-roll-recipe-962204-2.jpg",
    "title": " Australia's Best Recipes",
    "price":250,
    "discribtion":"The ambience is perfect for couples",
    "rating":4.2
  },
  {
    "url":"https://www.sixsistersstuff.com/wp-content/uploads/2014/04/Fluffy-Cream-Cheese-Dessert-1.jpg",
    "title": "Fluffy Cream Cheese Dessert Recipe",
    "price":200,
    "discribtion":"The ambience is perfect for couples. We had a romantic candlelight dinner here",
    
    "rating":4.5

  },
  {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6nZwjEoBXF3wVHEQNO0RLNr-NYQoetXblg&usqp=CAU",
    "title": "Strawberry Pretzel Salad",
    "price":250,
    "discribtion":"The ice cream being the right balance of cacao and sugar",
    "rating":4.3
  },
  {
    "url":"https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png",
    "title":"Cake Batter Ice Cream",
    "price":300,
    "discribtion":"The ice cream being the right balance of cacao and sugar",
    "rating":4.1
  },
  {
    "url":"https://1.bp.blogspot.com/-0XtE0a-MFqo/T2-avwAvlPI/AAAAAAAAC5I/Xl8tPCD02vc/s1600/Banana+caramel+cream+mini+dessert.jpg",
    "title": "Banana Caramel Cream Dessert",
    "price":200,
    "discribtion":"Cakes and pastries are very tasty and enjoyable",
    "rating":4.8
  },
  {
    "url":"https://www.seasonsandsuppers.ca/wp-content/uploads/2019/07/frozen-strawberry-dessert-1200-50.jpg",
    "title": "Frozen Strawberry Dessert",
    "price":250,
    "discribtion":"we  can get different flavoured ice creams",
    "rating":4.3
  },
  {
    "url":"https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg",
    "title":"Fried Ice Cream Dessert Bars", 
    "price":150,
    "discribtion":"Fried ice cream is such a delicious treat",
    "rating":4.2
  },
  {
    "url":"https://www.allrecipes.com/thmb/7KQi05nud4hu8DqvgRTUoQfHcRY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/232742-ice-cream-sandwich-cake-ddmfs-1x1-1-2401c25406b44782ab20d7881c40035f.jpg",
    "title": "Ice Cream Sandwich Cake",
    "price":250,
    "discribtion":"Cottage Cheese Ice Cream is and high protein, and healthy ",
    "rating":4.2
  },
  {
    "url":"https://www.yellowblissroad.com/wp-content/uploads/2018/05/Strawberry-Ice-Cream-Cake-SQUARE.jpg",
    "title": "Strawberry Ice Cream Cake",
    "price":300,
    "discribtion":" Strawberry Ice Cream Cake is super",
    "rating":4.2
  },
  {
  "url":"https://mojo.generalmills.com/api/public/content/4CMKPZVNL0GUrV990-AY0Q_gmi_hi_res_jpeg.jpeg?v=dd9707c1&t=466b54bb264e48b199fc8e83ef1136b4",
  "title": "Fudge Ice-Cream Dessert",
  "price":200,
  "discribtion":" ice cream, cookies and cake in one with this decadent fudge-filled treat. With Betty ",
  "rating":4.2
  },
  {
    "url":"https://www.biggerbolderbaking.com/wp-content/uploads/2021/05/Vanilla-Pudding-Ice-cream-Thumbnail-scaled.jpg",
    "title": "Vanilla Pudding Ice Cream Recipe",
    "price":150,
    "discribtion":"My Vanilla Pudding Ice Cream recipe ",
    "rating":4.2
  },
  {
    "url":"https://www.biggerbolderbaking.com/wp-content/uploads/2019/04/Outrageous-Ice-Cream-Sundaes-Website-Thumbnail1-480x270.jpg",
    "title": "Homemade Outrageous Ice Cream Sundae Recipes",
    "price":200,
    "discribtion":" the nostalgia you feel for the classic cold ",
    "rating":4.2
  },
  {
    "url":"https://www.cookingclassy.com/wp-content/uploads/2023/07/chocolate-ice-cream-5.jpg",
    "title": "Chocolate Ice Cream",
    "price":220,
    "discribtion":"The absolute best chocolate ice cream! It’s decadently rich, lusciously creamy, and deliciously",
    "rating":4.6
  },
  {
    "url":"https://i.shgcdn.com/c1a797e0-cdbf-44b3-b013-e2ee65d359f2/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    "title": "The Best And Easiest Affogato Recipe",
    "price":300,
    "discribtion":" gelato drowned in espresso, is one of Italy’s most delectable",
    "rating":4.1
  },
  {
    "url":"https://www.meatandtravel.com/wp-content/uploads/2015/04/Pecan-Ice-Cream_.jpg",
    "title": "Caramelised Pecan Ice Cream",
    "price":230,
    "discribtion":"A chunky, creamy and heavenly ice cream dessert",
    "rating":4.4
  },
  {
    "url":"https://confessionsofabakingqueen.com/wp-content/uploads/2021/08/cut-open-homemade-viennetta-ice-cream-cake-on-a-white-plate-1-of-1-1024x1536-1.jpg",
    "title": "Viennetta Ice Cream Cake",
    "price":100,
    "discribtion":"This easy recipe for a homemade Vienetta Ice Cream ",
    "rating":4.2
  },
  {
    "url":"https://cdn.jamieoliver.com/recipe-database/oldImages/medium/1186_1_1436970676.jpg",
    "title": "Chocolate ice cream",
    "price":150,
    "discribtion":"Everyone needs a good recipe for ice cream",
    "rating":4.2
  },
  {
    "url":"https://passionforbaking.com/wp-content/uploads/2014/07/E95A6552.jpg",
    "title": "Fancy Ice cream",
    "price":350,
    "discribtion":"Everyone needs a good recipe for ice cream",
    "rating":4.2
  },
  {
    "url":"https://www.foodandwine.com/thmb/Nb8yXfOQO09i5Cxzhgi68z0YejY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ice-cream-sundae-with-homemade-caramel-FT-RECIPE0721-a3f7998964104a8094eccfd3b827cc56.jpg",
    "title": "Ice Cream Sundaes ",
    "price":230,
    "discribtion":"Dan Kluger's Over-the-Top Ice Cream Sundaes with Homemade Caramel combine pretzel rods",
    "rating":4.2
  },
  {
    "url":"https://www.tasteofhome.com/wp-content/uploads/2021/01/20-Indian-Desserts-Youve-Never-Made-Before-GettyImages-1285227245-PDedit.jpg",
    "title": "Laddu ",
    "price":200,
    "discribtion":"Boondi mixid with gee so sweets",
    "rating":4.2
  },
  {
    "url":"https://qph.cf2.quoracdn.net/main-qimg-9d704ea0157039dc55684232b8bcb7d7-lq",
    "title": "the famous sweet dishes ",
    "price":150,
    "discribtion":"the famous sweet dishes of the whole Telangana",
    "rating":4.2
  },
  {
    "url":"https://img.veenaworld.com/wp-content/uploads/2022/07/Indian-Sweets.jpg",
    "title": "Sweet Dishes ",
    "price":300,
    "discribtion":"India is home to a wide variety of sweet dishes",
    "rating":4.2
  },
  {
    "url":"https://insanelygoodrecipes.com/wp-content/uploads/2021/01/White-Chocolate-Oreo-Cookie-Balls.png",
    "title": "potluck desserts",
    "price":250,
    "discribtion":"I have some of the perfect potluck treats",
    "rating":4.2
  },
  {
    "url":"https://www.somewhatsimple.com/wp-content/uploads/2021/10/snickerdoodle-mocktail-cookie.jpg",
    "title": "Snickerdoodle Mocktails",
    "price":100,
    "discribtion":" Slow Cooker Carmel Apple Cider",
    "rating":4.2
  },
  {
    "url":"https://images.squarespace-cdn.com/content/v1/5763385ebebafb91cc355c36/aba07a52-42ba-4c0e-8706-3f594b28981e/IMG_7070.jpg",
    "title": "tea mocktail",
    "price":200,
    "discribtion":"A tea mocktail recipe with black tea",
    "rating":4.2
  },
  {
    "url":"https://lh3.googleusercontent.com/-BW6qPyZMtPQ/VXqGzKKQvNI/AAAAAAAFEco/yxzNsx1IwHQ/s800/mocktail-4.jpg",
    "title": "Mocktail Tea - Kirbie's Cravings",
    "price":150,
    "discribtion":"Mocktail Tea in Taipei serves tea, food",
    "rating":4.2
  },
  {
    "url":"https://mindfulmocktail.com/wp-content/uploads/2021/04/chocolate-mocktail-easter-2.jpg",
    "title": "Chocolate Mocktail For Easter",
    "price":200,
    "discribtion":"Easy chocolate mocktail recipe for Easter and special occasions",
    "rating":4.2
  },
  {
    "url":"https://shutterandmint.com/wp-content/uploads/2023/07/Blueberry-Mocktail-Recipe-7-scaled.jpg",
    "title": "Blueberry Mocktail",
    "price":200,
    "discribtion":"This Blueberry Mocktail is healthy, refreshing",
    "rating":4.2
  },
  {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3ZwNSDMhAHjp4gsLgDg516CF-bHJGG2ZHg&usqp=CAU",
    "title": "Mocktails Shakes & Desserts",
    "price":150,
    "discribtion":"I have some of the perfect potluck treats",
    "rating":4.2
  },
  {
    "url":"https://www.foodserviceequipmentjournal.com/cloud/2023/05/18/rsz_2022_heavenly_menu_11180_copy.jpg",
    "title": "Heavenly Desserts",
    "price":300,
    "discribtion":"Heavenly Desserts innovates with new mocktails",
    "rating":4.2
  },
  {
    "url":"https://shop.americanlicorice.com/cdn/shop/articles/Mocktail_5.jpg?v=1680275721",
    "title": "Sour Punch Grape Mocktail",
    "price":200,
    "discribtion":"the entire lip of the glass is coated in chocolate",
    "rating":4.2
  },
  {
    "url":"https://images.immediate.co.uk/production/volatile/sites/30/2020/04/mocktail-3b9ab7d.jpg?quality=90&resize=556,505",
    "title": "Summer mocktail ",
    "price":250,
    "discribtion":"fruity mocktail to serve on a hot day",
    "rating":4.2
  },
  {
    "url":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/goji-berry-raspberry-cooler-abfd8bc.jpg?quality=90&webp=true&resize=375,341",
    "title": "Goji berry",
    "price":250,
    "discribtion":"this fruity mocktail on lazy summer days",
    "rating":4.2
  },
  {
    "url":"https://www.dessertnowdinnerlater.com/wp-content/uploads/2014/04/Mango-Colada-Mocktail1.jpg.webp",
    "title": "Mango Colada Mocktail ",
    "price":200,
    "discribtion":"the summer heat is in full swing ",
    "rating":4.2
  }

]

export const Desserts = () => {
  return (
    <>
    <div className='card'>
    {
     Data.map((item)=>{
        return(
          <div className='cards'>
             <img src= {item.url}alt="" />
            <h3>{item.title.slice(0,50)}</h3>
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

   
  
