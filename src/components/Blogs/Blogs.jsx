import React from 'react';

const Blogs = () => {
    return (
        <div>
      <h2>1.Props vs state</h2>
      <p>Props are used to customize the behavior and appearance of the child component.State is mutable data that is managed by a component itself.</p>
      
      <h2>2.How does useState work?</h2>
      <p>useState  returns an array with two elements: the current state value and a function to update that value. The first argument to useState is the initial value of the state.</p>
      
      <h2>3.Purpose of useEffect other than fetching data</h2>
      <p>useEffect update the document title, subscribing to an external service. useEffect runs after every render of the component, and takes two arguments: a function that performs the side effect, and an optional array of dependencies that control when the side effect is re-run.</p>
      
      <h2>4.How Does React work?</h2>
      <p>React is a JavaScript library for building user interfaces that works by creating a virtual representation of the UI and results in a fast and efficient user interface.</p>
    </div>
    );
};

export default Blogs;
