/* eslint-disable no-unused-vars */
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

    return (
        <div>
            <SectionTitle heading="Pay Now" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;