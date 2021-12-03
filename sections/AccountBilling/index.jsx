import { loadStripe } from '@stripe/stripe-js'
import AccountBiling from './AccountBilling'
import {
  Elements,
} from "@stripe/react-stripe-js"
import { STRIPE_API_KEY } from '../../utils/stripe'
const stripePromise = loadStripe(STRIPE_API_KEY);

const Base = (props) => {
  return (<Elements stripe={stripePromise}>
    <AccountBiling {...props} />
  </Elements>)
}

export default Base;
