let state
let button = document.querySelector('#button')

function reducer(state={count: 0}, action){
    switch(action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count +1}
        default:
            return state
    }
}

function dispatch(action){
    state = reducer(state, action)
    render()
}

function render(){
    let container = document.querySelector('#container')
    container.innerText = state.count
}

dispatch({type: '@@INIT'})

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})