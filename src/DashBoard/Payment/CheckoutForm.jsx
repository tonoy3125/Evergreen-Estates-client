import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import usePropertyBought from "../../Hooks/usePropertyBought";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaCheck } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const { user } = useAuth()
    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = UseAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [transjectionId, setTransjectionId] = useState('')
    const navigate = useNavigate()
    // const [propertyBroughts] = usePropertyBought()

    // console.log(propertyBroughts)
    // const price = propertyBroughts[0]?.offerprice
    // const title = propertyBroughts[0]?.propertytitle
    // const location = propertyBroughts[0]?.location
    // const agentemail = propertyBroughts[12]?.agentemail
    // console.log(agentemail)

    // console.log(price)
    // console.log(propertyBroughts)
    // const item = propertyBroughts[0]
    // const price = item?.offerprice
    // console.log(price)



    const item = useLoaderData()
    console.log(item)
    const price = item[0].offerprice
    const title = item[0].propertytitle
    const agentemail = item[0].agentemail
    const location = item[0].location
    const paymentId = item[0]._id
    console.log(price)


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])



    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log(paymentIntent, 'payment intend')
            if (paymentIntent.status === 'succeeded') {
                setTransjectionId(paymentIntent.id)

                // Now save the payment in the database
                const payment = {
                    buyeremail: user.email,
                    buyername: user.displayName,
                    paymentId,
                    price,
                    title,
                    transjectionId: paymentIntent.id,
                    location,
                    agentemail
                }
                console.log(payment)
                const res = await axiosSecure.post('/payments', payment)
                console.log(res.data)
                if (res.data?.result.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Payment Has been completed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/propertybought')
                }
            }
        }
    }

    return (
        <div>
            <form className="max-w-6xl mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#FFF',
                                '::placeholder': {
                                    color: '#FFF',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-accent mt-5" type="submit" disabled={!stripe || !clientSecret} >
                    Pay
                </button>
                <p className="text-white font-medium mt-3">{error && <span className="flex items-center gap-2"><IoWarningOutline />{error}</span>}</p>
                {transjectionId && <p className="text-white flex items-center gap-2"> <FaCheck /> Your Transjection Id Is  {transjectionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;