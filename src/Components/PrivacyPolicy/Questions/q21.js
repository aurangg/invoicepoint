import React from 'react';

export default function Question21(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                <span style={{opacity:"0.4", marginRight:"10px"}}>
                    21.
                </span>
                California Residents
            </h4>
            <p className="paragraph p-adjustment text-left">
                The California Consumer Privacy Act (CCPA) requires us to disclose the categories of Personal Information we collect and how we use it, the categories of sources from whom we collect Personal Information, and the third parties with whom we share it, which we have explained above. We are also required to communicate information about rights California residents have under California law. You may exercise the following rights:
            </p>
            <ul>
                <li className="question-list">
                    Right to Know and Access. You may submit a verifiable request for information regarding the: (1) categories of Personal Information we collect, use, or share; (2) purposes for which categories of Personal Information are collected or used by us; (3) categories of sources from which we collect Personal Information; and (4) specific pieces of Personal Information we have collected about you.
                </li>
                <li className="question-list">
                    Right to Equal Service. We will not discriminate against you if you exercise your privacy rights.
                </li>
                <li className="question-list">
                    Right to Delete. You may submit a verifiable request to close your account and we will delete Personal Information about you that we have collected. Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                </li>
            </ul>
            <p className="paragraph p-adjustment text-left">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
            <p className="paragraph p-adjustment text-left">
                We do not sell the Personal Information of our users. For more information about these rights, please contact us.
            </p>

            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    California Online Privacy Protection Act (CalOPPA)
                </h6>
                <p className="paragraph p-adjustment text-left">
                    CalOPPA requires us to disclose the categories of Personal Information we collect and how we use it, the categories of sources from whom we collect Personal Information, and the third parties with whom we share it, which we have explained above.
                </p>
                <p className="paragraph p-adjustment text-left">
                    CalOPPA users have the following rights:
                </p>
                <ul>
                    <li className="question-list">
                        Right to Know and Access. You may submit a verifiable request for information regarding the: (1) categories of Personal Information we collect, use, or share; (2) purposes for which categories of Personal Information are collected or used by us; (3) categories of sources from which we collect Personal Information; and (4) specific pieces of Personal Information we have collected about you.
                    </li>
                    <li className="question-list">
                        Right to Equal Service. We will not discriminate against you if you exercise your privacy rights.
                    </li>
                    <li className="question-list">
                        Right to Delete. You may submit a verifiable request to close your account and we will delete Personal Information about you that we have collected.
                    </li>
                    <li className="question-list">
                        Right to request that a business that sells a consumer's personal data, not sell the consumer's personal data.
                    </li>
                </ul>
                <p className="paragraph p-adjustment text-left">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
            </div>
        </div>
    )
}