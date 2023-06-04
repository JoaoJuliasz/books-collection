import { useReducer, useCallback } from 'react';
import { toast } from 'react-hot-toast';

enum SearchActionKind {
    SEARCH_BOOK = "SEARCH_BOOK",
    SET_LOADING = "SET_LOADING",
    AUTOCOMPLETE_ITEMS = "AUTOCOMPLETE_ITEMS"
}

interface SearchActions {
    type: SearchActionKind,
    payload: string | boolean | selectedBook[]
}

interface SearchBooksState {
    searchField: string,
    autocompleteItems: selectedBook[],
    loading: boolean
}

const initialState = {
    searchField: '',
    autocompleteItems: [],
    loading: false
}

function reducer(state: SearchBooksState, action: SearchActions): SearchBooksState {
    switch (action.type) {
        case SearchActionKind.SEARCH_BOOK:
            return {
                ...state,
                searchField: (action.payload as string)
            }
        case SearchActionKind.AUTOCOMPLETE_ITEMS:
            return {
                ...state,
                autocompleteItems: (action.payload as selectedBook[])
            }
        case SearchActionKind.SET_LOADING:
            return {
                ...state,
                loading: (action.payload as boolean)
            }
        default:
            return state
    }
}

const useSearchBooks = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { searchField, autocompleteItems, loading } = state

    const setLoading = (payload: boolean) => {
        dispatch({ type: SearchActionKind.SET_LOADING, payload })
    }

    const setAutocompleteItems = (payload: selectedBook[]) => {
        dispatch({ type: SearchActionKind.AUTOCOMPLETE_ITEMS, payload })
    }

    const setSerchField = (payload: string) => {
        dispatch({ type: SearchActionKind.SEARCH_BOOK, payload })
    }

    const triggerSearchedBooks = useCallback(async () => {
        if (searchField) {
            setLoading(true)
            try {
                const res = await fetch(`/api/filtered?title=${searchField}`)
                const data = await res.json()
                setAutocompleteItems(data)
            } catch (error) {
                toast.error("Something went wrong!")
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }, [searchField])

    return { searchField, autocompleteItems, loading, triggerSearchedBooks, setSerchField, setAutocompleteItems }
};

export default useSearchBooks;