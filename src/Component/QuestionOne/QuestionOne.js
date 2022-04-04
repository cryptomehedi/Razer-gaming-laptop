import React from 'react';

const Question = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold"><span className="font-bold">Q1.</span> What is context api?</h2>
            <p><span className="font-semibold">Ans: </span> The Context API is a React framework that allows you to share unique facts and helps you solve prop-drilling issues at various levels of your project. A React app can use the React Context API to create global variables that can be passed around. Instead of providing state via props, individuals may utilize shared state across layered components. Context allows components to share values like these without having to pass a prop through every level of the tree explicitly. Context is a React component that allows you to exchange data that is deemed "global" across a tree of components.</p>
            <hr className="my-10"></hr>
            <h2 className="text-3xl font-semibold"><span className="font-bold">Q2.</span> What is semantic tag?</h2>
            <p><span className="font-semibold">Ans: </span>Semantic HTML tags give information about their contents in addition to how they appear on a page. The browser recognizes the text wrapped in the tag as some kind of code language right away. Semantic tags also provide you with a lot more hooks for customizing your text. Your code examples should be shown in the normal browser style. They would frequently assign a class or id property to these items to explain their function.</p>
        </div>
    );
};

export default Question;