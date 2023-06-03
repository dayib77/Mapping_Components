import React from "react";
import DictionnaryTerm from "./DictionnaryTerm"
import DictionnaryDescription from "./DictionnaryDescrip"

export default function Dictionnary(props) {
    return(
        <>
            <div className="term">
                <DictionnaryTerm emoji={props.emoji} name={props.name}/>
                <DictionnaryDescription text={props.meaning} />
            </div>
        </>
    );
}