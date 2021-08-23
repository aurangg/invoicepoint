import React from 'react';

export default function Question22(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                <span style={{opacity:"0.4", marginRight:"10px"}}>
                    22.
                </span>
                Your Rights
            </h4>
            <p className="paragraph p-adjustment text-left">
                Depending on your location and subject to applicable law, you may have the following rights concerning the Personal Data we control about you:
            </p>
            <ul>
                <li className="question-list">
                    Right to access. You can ask us for an overview of your personal data that we process.
                </li>
                <li className="question-list">
                    Right to rectification. If your personal data is incorrect, incomplete, or outdated, you have the right to request for it to be corrected.
                </li>
                <li className="question-list">
                    Right to object to personal offers. If you would prefer not to see any personal offers, such as newsletters or special offers by email, you can always withdraw your consent by letting us know.
                </li>
            </ul>
            <p className="paragraph p-adjustment text-left">
                Where the processing of your Personal Data is based on your previously given consent, you have the right to withdraw your consent at any time. You may also have the right to object to the processing of your Personal Data on grounds relating to your particular situation.
            </p>
        </div>
    )
}