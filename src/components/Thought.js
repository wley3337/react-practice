import React from 'react'


//Functional Component 
const Thought = (props) =>{
    // Inline style added just for some differentiation. Being able to style each as a card or apply some other 
    // type of styling is why you may want to use a smaller component to render each element of an array

    const style = { 
        display: 'inline-block',
        border: '.1rem solid black',
        margin: '1rem',
        padding: '1rem'
    }

    return( 
        <p style={style}>{ props.thought } </p>
    )
}


export default Thought 


// //Class Component 
// class Thought extends React.Component{
//     render(){
//         const style = { 
//             display: 'inline-block',
//             border: '.1rem solid black',
//             margin: '1rem',
//             padding: '1rem'
//         }
    
//         return( 
//             <p style={style}>{ this.props.thought } </p>
//         )
//     }
// }


// export default Thought 