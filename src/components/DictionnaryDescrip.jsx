import React from "react";

export default function DictionnaryDescription(props) {
    return(
        <>
            <dd>
                <p>{props.text}</p>
            </dd>
        </>
    );
}