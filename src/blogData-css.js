import cardcar1 from "../src/pages/blog/blogAssets/Assets/cardCar1.png";
import cardcar2 from "../src/pages/blog/blogAssets/Assets/cardCar2.png";
import cardcar3 from "../src/pages/blog/blogAssets/Assets/cardCar3.png";
import cardcar4 from "../src/pages/blog/blogAssets/Assets/cardCar4.png";
import cardcar5 from "../src/pages/blog/blogAssets/Assets/cardCar5.png";
import cardcar6 from "../src/pages/blog/blogAssets/Assets/cardCar6.png";
import cardcar7 from "../src/pages/blog/blogAssets/Assets/cardCar7.png";
import cardcar8 from "../src/pages/blog/blogAssets/Assets/cardCar8.png";
import cardcar9 from "../src/pages/blog/blogAssets/Assets/cardCar9.png";
import cardcar10 from "../src/pages/blog/blogAssets/Assets/cardCar10.png";
import cardcar11 from "../src/pages/blog/blogAssets/Assets/cardCar11.png";
import cardcar12 from "../src/pages/blog/blogAssets/Assets/cardCar12.png";
import Cardcarousel from "./components/cardcarousel/Cardcarousel";

const dataCss = [
  {
    id: "1 css",
    title: "Card Carousel",
    body: (
      <>
        <h4>
          Carousel's seem to get a lot of hate from some people and I am not
          sure why, sure carousels have to load all the imagaes for each
          carousel MOST of the time but with some lazy loading and other img
          elements you can use. It saves a lot of space and is a good practice
          for CSS which is the main plan of today! (Note: I see the images are
          hard to read and plan on updating them when I do this again for
          practice.)
        </h4>
        <li>
          <h4>
            {" "}
            I feel the practice and usage you get out of making a carousel by
            hand is just good to know and helps you really figure out how to
            layer everything and keep it looking good. I found a really cool on
            hover one today and I plan on recreating that, as many websites use
            carousels, using some that look better than the rest can really make
            it stand out!
          </h4>
          <br />
          <p className="blog__text-left">
            1. Just to get a few things set up how I want to, I am going to
            start with some simple body modificaions, setting margin to 0 and
            and setting the background to a nice darker color as to not look
            like we are staring into the sun. I personally like the color of
            #242424 quite a bit and you will see it in screen shots.
          </p>
          <p className="blog__text-left">
            2. Firstly this will be using 8 cards total with 4 being large and 4
            being small, this is great to have a user picture on the front with
            say things you like behind it or other possible likes and scenarios.
            So we will set up 8 blank divs, and be styling them how we see fit.
            In this case we will center it using display grid, and place items
            center, we still have to center it via position absolute, aspect
            ratio, and width to make sure the outer div is the same size as the
            card.
          </p>
          <img src={cardcar1} alt="" className="blog__img" />
          <br />
          <img src={cardcar2} alt="" className="blog__img" />

          <p className="blog__text-left">
            3. We now have those 8 cards on top of each other, 4 big ones and 4
            little ones but we want to stagger the big cards to give it a nice
            feel and look so using some transform translate on all of those big
            card will give it a more cards in hand kind of look and feel. And as
            well will be aplying some hover effects, so that is looks like you
            are then looking at the hand when hovered and move those little
            cards out and showing some more litts perks or ideas. In the css we
            will have when we hover the card group we want the indiviual cards
            to do certain translations and rotations. And you can see both the
            hover state and the non-hover state. After this point I will have
            pictures added in the future to notice it even easier with how it is
            working.
          </p>
          <img src={cardcar3} className="blog__img" alt="" />
          <br />
          <img src={cardcar4} className="blog__img" alt="" />
          <br />
          <img src={cardcar5} className="blog__img" alt="" />

          <p className="blog__text-left">
            4. After getting that all in place you could be done with just that
            for a nice and cool looking card style CSS task. However this is a
            carousel we will be making so we will be adding more ontop of that
            and letting it have the ability to go back and forth say to show off
            employees, or some ones birthday. We will start by first adding some
            more groups and wrap now all of the seperate groups into a bigger
            group, giving us 3 "hands". By absoluting the position of the
            card-group we had before and changing the now 'card-groups' class to
            also have the same width and aspect ratio everything will stay
            centered. But if you look behind the current hovered group, you will
            notice that the other groups are still showing. So here we will
            start using some java script and data sets to help us start to more
            properly use the carousel!
          </p>
          <img src={cardcar6} className="blog__img" alt="" />
          <br />
          <img src={cardcar7} className="blog__img" alt="" />
          <p className="blog__text-left">
            {" "}
            5. Before we start the JS part of this I want to set up some buttons
            and the CSS that will hide the cards in the back. So using data
            variables I can set an index to each of the card groups as well as
            what their current status is. This could be done dynamically with a
            counter as well using a useState in react but for this we wil just
            be having it set at 3. And we will also be adding some buttons for
            the ability to go through out the carousel in a nice easy fasion.
          </p>
          <img src={cardcar8} className="blog__img" alt="" />
          <p className="blog__text-left">
            6. Now the js part, we are going to want a function for those
            buttons we made earlier, one to move it right and the other to move
            it left. So we will need a variable to keep track of the index to
            display the correct carousel, and a way to keep track of which group
            will be next and which one will be before it. And in the function we
            will want to first create a variable that will keep track of the
            next index, and after that make variables that will hold the next
            and current group as well. So using a ternary operator for the
            bumping of the index, and then document.querySelector we can pull in
            which group we are on atm. As well as asinging different status such
            as active or before. And we will want the active index to be a
            global scope, so either left or right button can control and figure
            out exactly where it is.
          </p>
          <img src={cardcar9} className="blog__img" alt="" />
          <br />
          <img src={cardcar10} className="blog__img" alt="" />
          <br />
          <img src={cardcar11} className="blog__img" alt="" />
          <br />
          <img src={cardcar12} className="blog__img" alt="" />
          <p className="blog__text-left">
            Getting the css is the most important part to this nice and smooth
            carousel and missing any of the transforms or anything could cause
            hickups and possibly no movement from the carousel. Of course more
            style could be added and different pictures could be implemented but
            for a base this is a great spot to start as it is not an easy CSS
            carousel and yet a great one to improve off of!
          </p>
          <Cardcarousel />
        </li>
      </>
    ),
  },
  {
    id: "2 css",
    title: "Cloud Shapes",
    body: (
      <>
        <h4>
          {" "}
          Will be tackling more CSS when finished with a decent chunck of JS
          computer science problems
        </h4>
      </>
    ),
  },
];

export default dataCss;
