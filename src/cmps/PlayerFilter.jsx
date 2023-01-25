import React, { useState, useRef, useEffect } from 'react'
import { SearchSvg } from '../svgs/SearchSvg'
import { ArrowBackSvg } from '../svgs/ArrowBackSvg'

export const PlayerFilter = ({ onSearch }) => {

    const [filterBy, setFilterBy] = useState({ term: '' })
    const [isSearching, setIsSearching] = useState(false)

    const formRef = useRef(null)
    const inputRef = useRef(null)

    const search = (ev) => {
        ev.preventDefault()
        if (!filterBy.term) return
        onSearch(filterBy)
    }

    const setFilter = ({ target }) => {
        const { value } = target
        setFilterBy({ term: value })
    }

    useEffect(() => {
        if (isSearching) {
            formRef.current.classList.add('searching')
            inputRef.current.focus()
        }
        else formRef.current.classList.remove('searching')
    }, [isSearching]);

    const toggleSearchInput = () => {
        if (window.innerWidth > 960) return
        setIsSearching(!isSearching)
    }

    return (
        <section ref={formRef} className="player-filter">
            <form onSubmit={search} className="player-search">
                <span onClick={toggleSearchInput} className="back-arrow" >
                    <ArrowBackSvg />
                </span>
                <input ref={inputRef} onChange={setFilter} value={filterBy.term} className="player-search-input" type="text" placeholder="Search" />
                <button onClick={toggleSearchInput} className="player-search-btn">
                    <SearchSvg />
                </button>
            </form>

        </section>
    )
}
