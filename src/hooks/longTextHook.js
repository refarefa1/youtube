export const longTextHook = (txt, isExpand) => {


    if (isExpand) {
        return (
            <h3 >
                {txt}
                <p>Show less</p>
            </h3>
        )
    } else {
        return (
            <>
                <h3 className="short">
                    {txt}...
                </h3>
                <p className="show-more">Show more</p>
            </>
        )
    }

}
