const App = () => {
   return (
      <div>
         <h1>Topics covered</h1>
         <span>
            The following is a list of all the topics we cover in the MDN
            learning area.
         </span>
         <p>
            <a href="" target="_blank">
               Getting started with the web
            </a>
            <br />
            <span
               style={{
                  margin: "10px",
               }}
            >
               Provides a practical introduction to web development for complete
               beginners.
            </span>
         </p>
         <p>
            <a href="" target="_blank">
               HTML — Structuring the web
            </a>
            <br />
            <span
               style={{
                  margin: "10px",
               }}
            >
               HTML is the language that we use to structure the different parts
               of our content and define what their meaning or purpose is. This
               topic teaches HTML in detail.
            </span>
         </p>
         <p>
            <a href="" target="_blank">
               CSS - Styling the web
            </a>
            <br />
            <span
               style={{
                  margin: "10px",
               }}
            >
               CSS is the language that we use to control our web content's
               style and layout, as well as adding behavior like animation. This
               topic provides comprehensive coverage of CSS.
            </span>
         </p>
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
