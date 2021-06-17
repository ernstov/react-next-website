import { loadStripe } from '@stripe/stripe-js'
import AccountBiling from './AccountBilling'
import {
  Elements,
} from "@stripe/react-stripe-js"
const stripePromise = loadStripe('pk_test_51IyHkODNyMxQBMQZyDi5MPznEjbJINDCzAqmipG8Ud7nR76iiZnRpjs49HKndhLaDxmGoTRVoMF3VSf6O2RrJJO3004sF0vLJV');

const Base = (props) => {
  return (<Elements stripe={stripePromise}>
    <AccountBiling {...props}/>
     </Elements>)
}

export default Base;
