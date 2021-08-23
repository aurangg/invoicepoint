import React from 'react';

export default function FAQ1(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                Payments
            </h4>
            <div className="questions">
                <h6 className="h-6 bold-500 text-left">
                    How do I accept online payments?
                </h6>
                <p className="paragraph p-adjustment text-left">
                    Create an account with the Invoice Point app. Then, turn on Payments for the invoices in settings or on each invoice separately, and you're good to go!
                </p>
                <h6 className="h-6 bold-500 text-left">
                    When will I receive my payment?
                </h6>
                <p className="paragraph p-adjustment text-left">
                    You will receive your payment within 5-7 business days. Keep in mind that the first transaction can take longer to process and transfer.
                </p>
                <h6 className="h-6 bold-500 text-left">
                    How can I choose how my customer pays me?
                </h6>
                <p className="paragraph p-adjustment text-left">
                    Before sending the invoice to the customer, choose your preferred payment method.
                </p>
            </div>
        </div>
    )
}