import React from "react";

export default function DictionnaryTerm(props) {
    return(
        <>
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
                </span>
                <span>{props.name}</span>
            </dt>
        </>
    );
}