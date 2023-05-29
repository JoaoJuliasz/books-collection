import { useCallback, useEffect, useRef } from 'react';

type States = {
    autocompleteItems: selectedBook[],
    searchField: string
}
type Functions = {
    setAutocompleteItems: (payload: selectedBook[]) => void
    triggerSearchedBooks: () => Promise<void>
}


const useAutocomplete = (states: States, functions: Functions) => {

    const { searchField, autocompleteItems } = states
    const { setAutocompleteItems, triggerSearchedBooks } = functions

    const node = useRef<HTMLDivElement | null>(null)

    const handleInputFocus = useCallback(() => {
        triggerSearchedBooks()
    }, [triggerSearchedBooks])

    const handleClickOutSide = useCallback((e: any) => {
        if (node.current?.contains(e.target)) {
            return
        }

        setAutocompleteItems([])
    }, [setAutocompleteItems])

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            triggerSearchedBooks()
        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [searchField, triggerSearchedBooks])

    useEffect(() => {
        if (autocompleteItems.length > 0) {
            document.addEventListener("mousedown", handleClickOutSide)
        } else {
            document.removeEventListener("mousedown", handleClickOutSide)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [autocompleteItems, handleClickOutSide])

    return { node, handleInputFocus }
};

export default useAutocomplete;