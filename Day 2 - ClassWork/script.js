const App = () => {
   return (
      <div>
         <h1>This is React app using CDN</h1>

         <div>
            <p>
               React has been designed from the start for gradual adoption, and
               you can use as little or as much React as you need. Whether you
               want to get a taste of React, add some interactivity to a simple
               HTML page, or start a complex React-powered app, the links in
               this section will help you get started.
            </p>
         </div>

         <br />
         <div>
            <p>
               People come to React from different backgrounds and with
               different learning styles. Whether you prefer a more theoretical
               or a practical approach, we hope you’ll find this section
               helpful. <br />
               - If you prefer to learn by doing, start with our practical
               tutorial.
               <br /> - If you prefer to learn concepts step by step, start with
               our guide to main concepts.
               <br />
               <a
                  href="https://legacy.reactjs.org/docs/getting-started.html"
                  target="_blank"
               >
                  Link
               </a>
            </p>
            <p>
               Like any unfamiliar technology, React does have a learning curve.
               With practice and some patience, you will get the hang of it.
               <br />
               <a
                  href="https://legacy.reactjs.org/docs/cdn-links.html"
                  target="_blank"
               >
                  Link
               </a>
            </p>
         </div>

         <br />
         <div>
            <p>
               The React documentation assumes some familiarity with programming
               in the JavaScript language. You don’t have to be an expert, but
               it’s harder to learn both React and JavaScript at the same time.
               <br />
               We recommend going through this JavaScript overview to check your
               knowledge level. It will take you between 30 minutes and an hour
               but you will feel more confident learning React.
            </p>
         </div>
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
