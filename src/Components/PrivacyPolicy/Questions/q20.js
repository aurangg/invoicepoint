import React from 'react';

export default function Question20(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                <span style={{opacity:"0.4", marginRight:"10px"}}>
                    20.
                </span>
                Information about General Data Protection Regulation (GDPR)
            </h4>
            <p className="paragraph p-adjustment text-left">
                We may be collecting and using information from you if you are from the European Economic Area (EEA), and in this section of our Privacy Policy, we are going to explain exactly how and why is this data collected, and how we maintain this data under protection from being replicated or used in the wrong way.
            </p>
            <ul>
                <li className="question-list">
                    GDPR is an EU-wide privacy and data protection law that regulates how EU residents' data is protected by companies and enhances the control the EU residents have, over their personal data.
                </li>
                <li className="question-list">
                    The GDPR is relevant to any globally operating company and not just the EU-based businesses and EU residents. Our customers’ data is important irrespective of where they are located, which is why we have implemented GDPR controls as our baseline standard for all our operations worldwide.
                </li>
            </ul>
            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    What is personal data?
                </h6>
                <p className="paragraph p-adjustment text-left">
                    Any data that relates to an identifiable or identified individual. GDPR covers a broad spectrum of information that could be used on its own, or in combination with other pieces of information, to identify a person. Personal data extends beyond a person’s name or email address. Some examples include financial information, political opinions, genetic data, biometric data, IP addresses, physical address, sexual orientation, and ethnicity.
                </p>
            </div>
            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    The Data Protection Principles include requirements such as:
                </h6>
                <ul>
                    <li className="question-list">
                        Personal data collected must be processed in a fair, legal, and transparent way and should only be used in a way that a person would reasonably expect.
                    </li>
                    <li className="question-list">
                        Personal data should only be collected to fulfill a specific purpose and it should only be used for that purpose. Organizations must specify why they need the personal data when they collect it.
                    </li>
                    <li className="question-list">
                        Personal data should be held no longer than necessary to fulfill its purpose. People covered by the GDPR have the right to access their own personal data. They can also request a copy of their data, and that their data be updated, deleted, restricted, or moved to another organization.
                    </li>
                </ul>
            </div>

            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    Why is GDPR important?
                </h6>
                <p className="paragraph p-adjustment text-left">
                    GDPR adds some new requirements regarding how companies should protect individuals' personal data that they collect and process. It also raises the stakes for compliance by increasing enforcement and imposing greater fines for breach. Beyond these facts, it's simply the right thing to do. At Invoice Point we strongly believe that your data privacy is very important and we already have solid security and privacy practices in place that go beyond the requirements of this new regulation.
                </p>
            </div>


            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    Individual Data Subject's Rights - Data Access, Portability and Deletion
                </h6>
                <p className="paragraph p-adjustment text-left">
                    We are committed to helping our customers meet the data subject rights requirements of GDPR. Invoice Point processes or stores all personal data in fully vetted, DPA compliant vendors. We do store all conversation and personal data for up to 6 years unless your account is deleted. In which case, we dispose of all data in accordance with our Terms of Service and Privacy Policy, but we will not hold it longer than 60 days. We are aware that if you are working with EU customers, you need to be able to provide them with the ability to access, update, retrieve and remove personal data. We've been set up as self-service from the start and have always given you access to your data and your customers’ data. Our customer support team is here for you to answer any questions you might have about working with the API.
                </p>
            </div>
        </div>
    )
}