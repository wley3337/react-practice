import React from 'react'


//Class component
class Thoughts extends React.Component {
    render(){
        return(
            <div>
                {/* We take in our props from App which is an array of strings.
                    We map through them and return a paragraph tag with the string */}
                {this.props.ourThoughts.map(thought => <p>{ thought }</p>)}
            </div>
        )
    };
}

export default Thoughts

// // Functional component
// const Thoughts = (props) =>{
//         return(
//             <div>
//                 {/* We take in our props from App which is an array of strings.
//                     We map through them and return a paragraph tag with the string */}
//                 {props.ourThoughts.map(thought => <p>{ thought }</p>)}
//             </div>
//         )
// }
// export default Thoughts
