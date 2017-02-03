export function selectBook(book) {
    // selectBook() is an action creator that needs to return an action 
    // which is an object with a type property and data:
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}