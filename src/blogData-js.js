import reverseStrImg1 from './pages/blog/blogAssets/Assets/reversestrimg1.png'
import reverseStrImg2 from './pages/blog/blogAssets/Assets/reversestrimg2.png'
import reverseStrImg3 from './pages/blog/blogAssets/Assets/reversestrimg3.png'
import reverseStrImg4 from './pages/blog/blogAssets/Assets/reversestrimg4.png'
import reverseStrImg5 from './pages/blog/blogAssets/Assets/reversestrimg5.png'
import reverseStrImg6 from './pages/blog/blogAssets/Assets/reversestrimg6.png'
import reverseStrImg7 from './pages/blog/blogAssets/Assets/reversestrimg7.png'
import reverseStrImg8 from './pages/blog/blogAssets/Assets/reversestrimg8.png'
import reverseStrImg9 from './pages/blog/blogAssets/Assets/reversestrimg9.png'
import reverseStrImg10 from './pages/blog/blogAssets/Assets/reversestrimg10.png'

const datajs = [
  {
    id: "1 js",
    title: "Binary Search",
    body: <>
    <h4> Nothing here yet come back on 1/24/2023 to see that!</h4>
    </>,
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
          <img
            className="blog__img"
            src={reverseStrImg1}
            alt=""
          />
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
