import React from 'react';
import './BiryaniItems.css';

let Data = [
  {
              
    "url": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" ,
    "title": "Chicken Biryani",
    "price":300,
    "discribtion":"spicy biryani, rosted chicken",
    "rating":4.2
  },
  {
    
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvDJ12Nnp160nBi1zQ3UGOCK3wQiCWm9YMA&usqp=CAU",
    "title": "Chicken Dum Biryani",
    "price":280,
    "discribtion":"spicy biryani with onion",
    "rating":4.2
  },
  {
    
    "url": "https://nishkitchen.com/wp-content/uploads/2014/01/M-CHICKEN-BIRYANI-1.jpg",
    "title": "hydarabad Dum Biryani",
    "price":280,
    "discribtion":"spicy biryani with onion",
    "rating":4.2
  },
  {
    "url": "https://nishkitchen.com/wp-content/uploads/2014/01/M-CHICKEN-BIRYANI-1.jpg",
    "title": "bawarchi biryani",
    "price":280,
    "discribtion":"spicy biryani with onion",
    "rating":4.2
  },
  {
    "url": "https://amritsr.com/wp-content/uploads/2021/02/best-biryani-.jpg",
    "title": "paradise birayani",
    "price":280,
    "discribtion":"spicy  rosted biryani ",
    "rating":4.2
  
  },
  {
    "url":"https://static.toiimg.com/thumb/62445638.cms?width=1200&height=900",
    "title": "hydarabad airport birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
    
  },
  {
    "url":"https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg",
    "title": " mutton birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
    
  },
  {
    "url":"https://images.aws.nestle.recipes/resized/5d80437e677ba82c7a4f6dfede5f6f24_fish_biryani_1500x700-1_944_531.jpg",
    "title": "fish birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
 
    "url": "https://www.bigbasket.com/media/uploads/recipe/w-l/1025_1.jpg",
    "title": "fish fry birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZZdWNtNOfB8RMW6m5WTF-_O8aWG_q41xAQ&usqp=CAU",
    "title": "fish curry birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://yummyindiankitchen.com/wp-content/uploads/2021/07/fish-biryani-recipe.jpg",
    "title": "apolo fish biryani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://i.ytimg.com/vi/CsSLiW0Na0A/sddefault.jpg",
    "title": "apolo fish fry",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://i.pinimg.com/originals/be/94/5e/be945ebe2bc1617a8d85bbc38bd5a27f.jpg",
    "title": "fish fry",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://b.zmtcdn.com/data/pictures/chains/1/19533071/9dbe583c10ec0c17c81c1c2e3ecd53ed.jpg",
    "title": " pot birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.mylaporetimes.com/wp-content/uploads/2020/10/IMG-20201012-WA0000.jpg",
    "title": "potlam biryani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/2f01600fee986dbc6360e37643069257",
    "title": "potlam egg birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://cdn.dotpe.in/longtail/store-items/8193774/ClWRNiHL.jpeg",
    "title": "potlam mutton  birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://static.toiimg.com/thumb/62445638.cms?width=1200&height=900",
    "title": "mogalai birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/21/Pictures/_cb1f1b2e-83b1-11ea-bf89-3b987bd73d6a.jpg",
    "title": "kolkota biryani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://kitchenofdebjani.com/wp-content/uploads/2022/08/Kolkata-Mutton-Biryani-Recipe-debjanir-rannaghar.jpg",
    "title": "kolkota mutton birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://4.bp.blogspot.com/-KUspbJskhOE/Wncj4pWoZMI/AAAAAAAAebw/HYDkpNGcbu8kTDMPd63EeFGxk97gS3fzgCLcBGAs/s1600/Fish%2BBiryani%2B16.jpg",
    "title": "kolkota fish birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://nishkitchen.com/wp-content/uploads/2014/01/M-CHICKEN-BIRYANI-1.jpg",
    "title": "malabar chicken  birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://i0.wp.com/mariasmenu.com/wp-content/uploads/Malabar-Mutton-Biriyani.png?fit=650%2C886&ssl=1",
    "title": "malabar mutton biryani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.pepperdelight.com/wp-content/uploads/2018/03/pepper-delight-fish-biriyani-4-500x375.jpg",
    "title": "malabar fish biryani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Ambur_Star_Chicken_Biryani_Recipe_.jpg",
    "title": "Ambur chicken birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://www.yummytummyaarthi.com/wp-content/uploads/2014/08/1-76.jpg",
    "title": "Ambur mutton birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://yellowchilis.com/wp-content/uploads/2021/08/fish-biryani-recipe.jpg",
    "title": "Ambur fish birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://hinzcooking.com/wp-content/uploads/2023/03/karachi-biryani.jpg",
    "title": "karachi chicken birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://hamariweb.com/recipes/images/recipeimages/183.jpg",
    "title": "karachi mutton birayani",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    "url":"https://i.pinimg.com/originals/1e/ce/7c/1ece7c11e6248b76ad75f9b99ea0213b.jpg",
    "title": "karachi fish birayani",
    "price":480,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    
    "url":"https://www.pepperdelight.com/wp-content/uploads/2022/12/pepper-delight-chicken-mandi-4-500x375.jpg",
    "title": "Chicken Mandi - Pepper Delight",
    "price":280,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  },
  {
    
    "url":"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-aj29p4im7l2qqjcq6u9jpv0hn4-20211202000027.Medi.jpeg",
    "title": "Arabic Mutton Mandi Recipe by Umme ",
    "price":500,
    "discribtion":"delicious and mouth warming verities of Non Veg Food",
    "rating":4.2
  }

]

export default function BiryaniItems() {
  return (
    
<>
      <div className='card'>
      {
       Data.map((item)=>{
          return(
            <div className='cards'>
               <img src= {item.url}alt="" />
              <h3>{item.title.slice(0,30)}</h3>
              <p>{item.discribtion.slice(0,56)}</p>
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
  

  


