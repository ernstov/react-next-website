import { loadStripe } from '@stripe/stripe-js'
import AccountBiling from './AccountBilling'
import {
  Elements,
} from "@stripe/react-stripe-js"
const stripePromise = loadStripe('pk_test_51Irs2vEcC7nD5evj5aGCfdrAoqxbJuH1TNt3Kkc5I1pZdSRH6ok5Ozmdgq12izmnXW2WoqRzIpevFJ8A0wehMjef006XUhrLet');

const Base = (props) => {
  return (<Elements stripe={stripePromise}>
    <AccountBiling {...props} />
  </Elements>)
}

export default Base;
