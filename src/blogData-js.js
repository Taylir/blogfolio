import reverseStrImg1 from "./pages/blog/blogAssets/Assets/reversestrimg1.png";
import reverseStrImg2 from "./pages/blog/blogAssets/Assets/reversestrimg2.png";
import reverseStrImg3 from "./pages/blog/blogAssets/Assets/reversestrimg3.png";
import reverseStrImg4 from "./pages/blog/blogAssets/Assets/reversestrimg4.png";
import reverseStrImg5 from "./pages/blog/blogAssets/Assets/reversestrimg5.png";
import reverseStrImg6 from "./pages/blog/blogAssets/Assets/reversestrimg6.png";
import reverseStrImg7 from "./pages/blog/blogAssets/Assets/reversestrimg7.png";
import reverseStrImg8 from "./pages/blog/blogAssets/Assets/reversestrimg8.png";
import reverseStrImg9 from "./pages/blog/blogAssets/Assets/reversestrimg9.png";
import reverseStrImg10 from "./pages/blog/blogAssets/Assets/reversestrimg10.png";
import binarysearch1 from "./pages/blog/blogAssets/Assets/binarySearch1.png";
import binarysearch2 from "./pages/blog/blogAssets/Assets/binarySearch2.png";
import binarysearch3 from "./pages/blog/blogAssets/Assets/binarySearch3.png";
import binarysearch4 from "./pages/blog/blogAssets/Assets/binarySearch4.png";
import binarysearch5 from "./pages/blog/blogAssets/Assets/binarySearch5.png";
import binarysearch6 from "./pages/blog/blogAssets/Assets/binarySearch6.png";

const datajs = [
  {
    id: "1 js",
    title: "Binary Search",
    body: (
      <>
        <h4>
          In the world of technology speed is one of the most wanted assets in
          any technological device, or application. Sitting around and waiting
          for your app to load or your phone to make a call can be excrutiating
          to deal with. SO today we will use something that helps that case in
          the term of Binary Search!
        </h4>
        <li>
          <h4>
            {" "}
            Binary search takes the normal way of searching say with a for loop
            and cuts that time preferably in half! Granted the array does have
            to be sorted first in order for this to work but using methods we
            will talk about in the future this will speed up your search time to
            faster than O(n) time. By spltting the array we are searching
            through and only looking at the half it has a higher chance of being
            in and we will explain that in further detail below!
          </h4>
          <br />
          <br />
          <p className="blog__text-left">
            1. So here I created an array of 1 - 30 and lets say you just just a
            for loop for this it's time complexity would be O(n) time. To make
            it easy lets say each time it runs it takes 1 second and in this
            case our target is 27, so in this sorted array it will take 27
            seconds to get our answer which would be far to long.(Obviously
            taking a second to check each number is much longer than it would
            actually take but just for example sake.)
          </p>
          <img className="blog__img" src={binarysearch1} alt="" />
          <br />
          <p className="blog__text-left">
            2. Now after we have our function we will be looking for the index
            of our target of 27, but we will need some ways to figure out what
            side of the array we want to look at in this sorted array. So we
            will create two pointers that will be starting on either end of our
            array and moving them incrementally based on the middle of the
            array.
          </p>
          <img src={binarysearch2} alt="" className="blog__img" />
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
          <img src={binarysearch3} className="blog__img" alt="" />
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
          <img src={binarysearch4} className="blog__img" alt="" />
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
          <img src={binarysearch5} className="blog__img" alt="" />
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
          <img src={binarysearch6} className="blog__img" alt="" />
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
    id: "2 js",
    title: "Reverse String",
    body: (
      <>
        <h4>
          While reverse string is one of the easier tasks when it comes to the
          world of Java script the great quality about it, is just how many
          different ways you can solve it. Starting from the most obvious to the
          more difficult ways I can think of lets crack on and see just what we
          can do with it!
        </h4>
        <li>
          <p>
            {" "}
            There are a few things I am sure that are popping in to your head on
            how you want to solve this, the first way we are going to approach
            this is with a good ol for loop. Using a for loop we can go through
            each of the individual characters of the string and put it back into
            a variable to store what we are going to do..
          </p>
          <br />
          <br />
          <h4 className="blog__text-left">
            1.Lets create a function and declare a variable of an empty string
            that will store our characters.
          </h4>
          <img className="blog__img" src={reverseStrImg1} alt="" />
          <br />
          <h4 className="blog__text-left">
            2. After getting our variable set in place, we can call a for loop
            to go over every character of the string given. And in doing so we
            simply place the current character we are are on in the loop and
            place it before the rest of the string.
          </h4>
          <img src={reverseStrImg2} alt="" className="blog__img" />
          <h4 className="blog__text-left">
            3. And after returning our earlier created variable we will see that
            all of our letters are now reversed and displayed for us how we
            wanted.{" "}
          </h4>
          <img src={reverseStrImg3} alt="" />
        </li>
        <li>
          <p className="blog__text-left">
            This will be very close to what we just did the only difference will
            be the type for loop we will be using. That being a for of loop!
            Starting the same way as last time we will be using a reversed
            variable but using a for of loop it instinctivley already goes
            through each character of the string.{" "}
          </p>
          <img src={reverseStrImg4} alt="" />
          <h4 className="blog__text-left">
            {" "}
            Doing it this way with a for of loop removes adding all the other
            lines and saves "some" time however it is still good to learn and
            understand the basic for loop first! Any ways, after running this
            function we get our reversed string back to us!
          </h4>
          <img src={reverseStrImg5} alt="" />
          <h4 className="blog__text-left">
            And to describe it even a bit further is that basically "char" is
            the "i" in this loop and can be what you want however naming it
            based on the type of item you are looping over makes the most sense
            in this case being each character of the string.
          </h4>
        </li>
        <li>
          <p className="blog__text-left">
            The next way we are going to do this is using methods. While methods
            are a very easy and simple way to do many actions from sorting to
            finding an index. You have to know of them to use them, and that's
            what we will be doing here.
          </p>
          <h4 className="blog__text-left">
            1. Since this can be done on one line we will break up each method
            so first. The methods we want being reverse only works on arrays so
            we will be using .split to turn it into an array at each character.
            And what you put in the paranthesis is what you will be looking to
            be splitting by in this case ("") will be splitting each character
            into its own array element.
          </h4>{" "}
          <img src={reverseStrImg6} alt="" />
          <br />
          <img src={reverseStrImg7} alt="" />
          <h4 className="blog__text-left">
            2. And as you see after splitting it we can do the reverse method to
            basically do what we did earlier with line of code using the
            .reverse method making it reversed. And as that one was really self
            explanitory we will also be doing the .join method here combing them
            all back together into one smooth string. And sort of like the split
            the ("") are necessary as that will tell you if you are going to
            join them with anything so if you put a , in the quotes they would
            each be seperated by a comma but still a joined string.
          </h4>
          <img src={reverseStrImg8} alt="" />
          <br />
          <img src={reverseStrImg9} alt="" />
          <h4 className="blog__text-left">
            And as you see at the bottom here is the result as well as the
            result if you were to put that comma into the paranthesis on the
            .join!
          </h4>
        </li>
        <li>
          <p className="blog__text-left">
            There is one more way using methods that I know of at the moment it
            feels incorrect for what I normally use it for however another way
            we can solve this is with the .reduce method. Its a method that
            takes the current element you are on and the next element you are
            about to be on. And based on the function will enforce different
            results based on what you are to put.
          </p>
          <img src={reverseStrImg10} alt="" />
          <h4 className="blog__text-left">
            So using the reduce here we are taking the first element with 'a'
            and the second with 'b' and all we are doing is putting b in front
            of a going over each of the characters of the array. Not to mention
            that the reduce method kind of natuarally joins the pieces back
            together as this would also add numbers together if needed!
          </h4>
        </li>
      </>
    ),
  },
];

export default datajs;
