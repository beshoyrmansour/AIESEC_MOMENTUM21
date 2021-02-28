import React from 'react'

interface Props {

}

const Summary = (props: Props) => {
    return (
        <div>
            Cancelation policy:
            Merchandise pre-orders are excluded from the policy, No Refund for the pre-orders

            from 2/3/2021 till 7/3/2021: 0% cancelation fees (Full refund)
            from 8/3/2021 till14/3/2021: 25% cancelation fees(75% refund)
            from 15/3/2021 till 24/3/2021: 50% cancelation fees (50% refund)
            from 25/3/2021 till 1/4/2021: 75% cancelation fees (25% refund)
            from 2/4/2021 till 8/4/2021: 100% cancelation fees(0% refund)

            All merchandise pre-orders will not be refunded
        </div>
    )
}

export default Summary
