


export const loadItems = ()=>{
    return async (dispatch)=>{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json()
        dispatch({type: 'SET_ITEMS', payload: data.results})
    }
}