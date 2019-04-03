// initial state
const initState = {
    posts: [
        {id: 1, title: 'State', textContent: 'State of an instance of a React Component Class can be defined as an object of a set of observable properties that control the behavior of the component.'},
        {id: 2, title: 'Props', textContent: 'Props is also an object that holds information to control the behavior of that particular component.'},
        {id: 3, title: 'React', textContent: 'React is a JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications.'},
        {id: 4, title: 'Redux', textContent: 'Redux is an open-source JavaScript library for managing application state.'},
        {id: 5, title: 'npm', textContent: 'npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.'},
    ]
}

// reducer
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_POST':
            const posts = state.posts.filter((post) => {
                return action.id !== post.id
            })
            return {posts};
        default:
            return state;
    }
}

export default rootReducer;
