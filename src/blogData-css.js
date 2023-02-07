import cardcar1 from "../src/pages/blog/blogAssets/Assets/cardCar1.png";
import cardcar2 from "../src/pages/blog/blogAssets/Assets/cardCar2.png";

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
          for CSS which is the main plan of today!
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
            3. So with these two pointers now starting at the front and end of
            any array given we can move on to the while loop which will feep
            running until we get our answer of finding our target. And of course
            that will begin with us calling our while loop basically stating
            while the left pointer (l) is less than or equal to our right
            pointer (r). This way they will never cross over each other and
            create some odd bug. I will also add in here, our mid identifier. By
            adding our two pointers together and dividing it by 2 we can make
            sure we always have a way to find the middle of the mini array we
            will be going through.
          </p>
          <img src={null} className="blog__img" alt="" />
          <p className="blog__text-left">
            4. I added the Math.floor there for when we run into getting a
            decimal when we divide by like 7/2 to avoid getting 3.5. Any ways
            now we want to take the mid index we created and figure out what our
            middle number would be. In this case is would be (29 - 0) / 2
            rounding down gives us 14. So we will be having our mid pointer
            pointing at index 14 in this case being number 15. So we see that 15
            is smaller than our target in this array, meaning we can disregard
            all of the numbers left of the middle and the current number we are
            on as well and move the left pointer (l) to index 15 as we know
            index 14 is not our target.
          </p>
          <img src={null} className="blog__img" alt="" />
          <p className="blog__text-left">
            {" "}
            5. Now after adding that line the middle will continue to move to
            the right as long as the middle is less than our target so we need
            to tackle the other side in this case where the middle becomes
            greater than our target. We are basically going to do what we did a
            second ago but reversed. So if the middle is greater than our target
            we want to move the right pointer inward to disregard the right half
            of the array.
          </p>
          <img src={null} className="blog__img" alt="" />
          <p className="blog__text-left">
            6. With both sides now moving inward based on our middle that means
            eventualy the middle will be our answer no matter what! And we can
            add the last else statment that will return our answer. And an easy
            way to remember which pointer to move is that if the middle is
            bigger than our target, it has to be smaller and all the numbers in
            this SORTED array to the right are bigger so we can disregard that.
            And if the middle is smaller than our target we have to move the
            left one inward as all of those numbers are smaller than our middle
            number. And repeating this over and over will eventually put our
            answer right at the middle of the two!
          </p>
          <img src={null} className="blog__img" alt="" />
          <p className="blog__text-left">
            Ans. In this case with how we are returning it we will get the index
            of 27 which happens to be 26! This is becuase the while loop ends
            once we either return mid or when the conditons of l being less than
            or equal to r fails. And now for the earlier mention time faster
            than O(n) time. Since we are cutting the equation inhalf and it
            still depends on the length of the array this will be O(logn) time.
            Obviously in really small array of 5 numbers or ids or what have
            you, the time difference would be so small you would not notice it,
            however once you get to much much MUCH larger arrays, the amount of
            time this could save stacked up over many uses will be a HUGE
            difference in the end.
          </p>
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
