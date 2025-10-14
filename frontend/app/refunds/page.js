import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen text-black bg-white mt-16 py-8 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Cancellations and Refunds</h1>
        <div className="space-y-4 leading-7">
          <p>
            CrinfoGlobalPublishers believes in helping its customers as far as possible, and has therefore a liberal cancellation policy.
          </p>
          <p className="font-semibold">Under this policy:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cancellations will be considered only if the request is made within 1-2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
            <li>CrinfoGlobalPublishers does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
            <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 1-2 days of receipt of the products.</li>
            <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 1-2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
            <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
            <li>In case of any refunds approved by the CrinfoGlobalPublishers, it’ll take 1-2 days for the refund to be processed to the end customer.</li>
          </ul>
          <div className="mt-6 space-y-2">
            <a className="text-blue-700 underline" href="https://merchant.razorpay.com/policy/RP2W4HEunIurjq/refund" target="_blank" rel="noreferrer">Razorpay Refund Policy</a>
            <a className="text-blue-700 underline block" href="https://crinfoglobal.com/contact" target="_blank" rel="noreferrer">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page


