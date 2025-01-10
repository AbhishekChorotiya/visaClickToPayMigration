function onVisaCheckoutReady() {
  V.init({
    apikey: "498WCF39JVQVH1UK4TGG21leLAj_MJQoapP5f12IanfEYaSno",
    sourceId: "Merchant Defined Source ID",
    settings: {
      locale: "en_US",
      countryCode: "US",
      displayName: "Demo-store",
      logoUrl: "www.Some_Image_URL.gif",
      websiteUrl: "www....Corp.com",
      customerSupportUrl: "www....Corp.support.com",
      shipping: {
        acceptedRegions: ["US", "CA"],
        collectShipping: "true",
      },
      payment: {
        cardBrands: ["VISA", "MASTERCARD"],
        acceptCanadianVisaDebit: "true",
        billingCountries: ["US", "CA"],
      },
      review: {
        message: "Merchant Defined Message",
        buttonAction: "Continue",
      },
      dataLevel: "SUMMARY",
    },
    paymentRequest: {
      merchantRequestId: "Merchant defined request ID",
      currencyCode: "USD",
      subtotal: "10.00",
      shippingHandling: "2.00",
      tax: "2.00",
      discount: "1.00",
      giftWrap: "2.00",
      misc: "1.00",
      total: "16.00",
      description: "...corp Product",
      orderId: "Merchant defined order ID",
      promoCode: "Merchant defined promo code",
      customData: {
        nvPair: [
          { name: "customName1", value: "customValue1" },
          { name: "customName2", value: "customValue2" },
        ],
      },
    },
  });

  V.on("payment.success", function (payment) {
    console.log("success ===>", payment);
    document.getElementById("payment-status").innerHTML = "Payment successful!";
    document.getElementById("payment-status").style.color = "green";
  });
  V.on("payment.cancel", function (payment) {
    console.log("Cancel ===>", payment);
    document.getElementById("payment-status").innerHTML = "Payment cancelled!";
    document.getElementById("payment-status").style.color = "red";
  });
  V.on("payment.error", function (payment, error) {
    console.log("Error Payment ===>", payment);
    console.log("Error Info ===>", error);
    document.getElementById("payment-status").innerHTML = "Payment failed!";
    document.getElementById("payment-status").style.color = "red";
  });
}
