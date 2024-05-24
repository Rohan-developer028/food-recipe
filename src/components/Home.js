import React from 'react';
import Header from './header';
import Footer from './Footer';
export default function Home() {
    const img="data:image/jpeg;base64,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"
    const img2='https://cdn.loveandlemons.com/wp-content/uploads/2022/09/peanut-butter-banana-smoothie-580x580.jpg'
    return (
        <>
        < Header />
        <hr />
        <div style={{display:"flex",justifyContent:'space-evenly'}}>
       
        <div className="card">
     <div style={ {height:'auto',width:'auto'}}>
     <h2 style={{textAlign:'center'}}>Avocado Smoothie
</h2>
 <img  src={img} alt='avacado smoothie ' style={{objectFit:"cover",marginLeft:"10rem"
 }} /> 
 </div>
            <p className="heading">
                Ingredients
                <ul >
                    <li>1/2 cup cubed frozen pineapple</li>
                    <li>2 cups packed fresh spinach, or 1 cup frozen spinach</li>
                    <li>1 ripe avocado</li>
                    <li>1 frozen banana</li>
                    <li>3/4 cup light coconut milk, canned or from a carton</li>
                    <li>3 tablespoons fresh lime juice, plus 1/2 teaspoon zest</li>
                    <li>1 teaspoon maple syrup</li>
                    <li>pinch of sea salt</li>
                    <li>8 ice cubes</li>
                    <li>2 scoops vanilla protein powder*, optional</li>
                </ul>
            </p>
            <div  style={{height:"auto",width:"400px"}}>
                <span style={{fontSize:"25px",textDecoration:'bold'}}> <h1>Process
                </h1> </span>
                <p style={{fontSize:"20px",justifyContent:'center'}}>
               
               <ol> 
                <li>Combine the pineapple, spinach, avocado, banana, coconut milk, lime juice, maple syrup, salt, ice, and protein powder, if using, in a blender. Blend until creamy.</li>
                <li>
Taste and adjust the sweetness to your liking. If you prefer a sweeter smoothie, add more maple syrup.<br /> If the consistency is too thick, add more coconut milk, and blend again. </li></ol>
                </p>
            </div>
        </div>
        <div className="card">
     <div style={ {height:'fitContent',width:'fitContent'}}>
  <h2 style={{textAlign:'center'}}> Peanut Butter Banana Smoothie</h2>
 <img  src={img2} alt='peanut smoothie ' style={{objectFit:"cover",height:"270px", marginLeft:"4rem",width:"300px"
 }} /> 
 </div>
            <p className="heading">
                Ingredients
                <ul>
                  
                    {/* Additional Ingredients */}
                    <li>1 frozen banana</li>
                    <li>⅓ cup whole rolled oats</li>
                    <li>3 tablespoons natural peanut butter</li>
                    <li>¾ cup unsweetened almond milk</li>
                    <li>Handfuls of ice</li>
                    <li>Chocolate chips, optional, for topping</li>
                    {/* Optional add-ins */}
                    <li>Optional add-ins:</li>
                    <ul>
                        <li>Vanilla protein powder</li>
                        <li>Maca powder</li>
                        <li>Splash of cold brew coffee</li>
                        <li>Cocoa or cacao powder</li>
                    </ul>
                </ul>
            </p>
            <div  style={{height:"auto",width:"400px"}}>
                <span style={{fontSize:"25px",textDecoration:'bold'}}> <h1>Process
                </h1> </span>
                <p style={{fontSize:"20px",justifyContent:'center'}}>
               
                <ol>
                <li>In a blender, place the banana, oats, peanut butter, and almond milk. Blend until smooth.</li>
                <li>Add ice and any optional add-ins, as desired, and blend again until smooth and creamy.</li>
                <li>Pour into 1 or 2 glasses and serve topped with chocolate chips, if using.</li>
                <li>Makes 1 large smoothie or 2 smaller smoothies.</li>
            </ol>
                </p>
            </div>
        </div>
        </ div>
        < Footer />
        </>
    );
}
