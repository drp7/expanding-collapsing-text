import React, { useState } from 'react'

const Question = (props) => {
    // const { title, info } = props
    // add a state variable here
    const [say, visible] = useState(false)


    return (
        <article className="question">
            <header>
                <h4>{props.title}</h4>
                {/* make this toggle functionality onClick */}
                <button className="btn"
                    onClick={() => {
                        visible(say=>!say)


                    }}>{say === false? "+":"-" }</button>
            </header>
            {/* make this render conditionally */}
            <p>{say === true &&props.info}</p>
        </article>
    )
}

export default Question
