import React, { useState } from 'react'

//both of these solutions requires App to use hooks. Otherwise you need to change 
//how the state is set

// Functional Component
const ThoughtInput = (props) => {
    const [ thought, setThought ] = useState("");
    return (
            <form
                onSubmit={(e)=> {
                    // We preventDefault so that our page does not refresh
                    e.preventDefault();
                    // We use the callback to add our thought to the array in app state
                    // Hooks gives us an internal function that provides the previous state.
                    // We spread that so that we have a new object (not passing by reference)
                    // and then add our new thought to it
                    props.modifyThoughts( (previousThoughts) => [...previousThoughts, thought]);
                    // We then clear our thought input field by setting the state back to an empty string
                    setThought("");

                }}
            >
                <input
                    type="text"
                    value={thought}
                    onChange={(e)=> setThought(e.target.value)}
                    placeholder="What are you thinking"
                />
                <input type="submit" value="Submit Thought"/>
            </form>
    )
};

export default ThoughtInput


// // Class component
// class ThoughtInput extends React.Component{
//     //state object 
//     state = {thought: ""}

//     setThought = (newThought) =>{
//         this.setState({thought: newThought})
//     }

//     handleSubmit = (e) => {
//         // We preventDefault so that our page does not refresh
//         e.preventDefault();
//         // We use the callback to add our thought to the array in app state
//         // Hooks gives us an internal function that provides the previous state.
//         // We spread that so that we have a new object (not passing by reference)
//         // and then add our new thought to it
//         this.props.modifyThoughts( (previousThoughts) => [...previousThoughts, this.state.thought]);
//         // We then clear our thought input field by setting the state back to an empty string
//         this.setThought("");
//     }
//     render(){
//             return(
//                     <form
//                         onSubmit={this.handleSubmit}
//                     >
//                         <input
//                             type="text"
//                             value={this.state.thought}
//                             onChange={(e)=> this.setThought(e.target.value)}
//                             placeholder="What are you thinking"
//                         />
//                         <input type="submit" value="Submit Thought"/>
//                     </form>
//             )
//     }
// }

// export default ThoughtInput
