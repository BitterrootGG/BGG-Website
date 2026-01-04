function handleSlopeChange() {
  const slope = document.getElementById("slope").value;
  const photos = document.getElementById("photos");
  photos.required = (slope === "12-18" || slope === "over");
}

function fireGoogleAdsQuoteConversion() {
  if (typeof gtag === "function") {
    gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXXX/QUOTE_LABEL'
    });
  }
}

function sendEstimateEmail() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const contactMethod = document.getElementById("contactMethod").value;
  const contactTime = document.getElementById("contactTime").value;
  const acres = document.getElementById("acreage").value;
  const miles = document.getElementById("miles").value;
  const slope = document.getElementById("slope").value;
  const timber = document.getElementById("timber").value;

  if (slope === "over") {
    document.getElementById("estimateResult").innerText =
      "Slopes over 18° are outside our standard forestry mulching operations due to business and safety limitations.";
    return;
  }

  const manualReview = (slope === "12-18" || timber === "yes");

  // FIRE GOOGLE ADS CONVERSION
  fireGoogleAdsQuoteConversion();

  const subject = `Quote Request – ${name}`;
  const body =
`New Quote Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Preferred Contact: ${contactMethod}
Best Time: ${contactTime}

Estimated Acreage: ${acres}
Distance from Stevensville: ${miles} miles
Slope Category: ${slope}
Timber > 8": ${timber}

Manual Review Required: ${manualReview ? "YES" : "NO"}

Notes:
- Forestry mulching limited to 18° (business & safety)
- Steep terrain or large timber requires site review
`;

  window.location.href =
    `mailto:scheduling@bitterrootgg.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  setTimeout(() => {
    const replySubject = "Thanks for contacting Bitterroot Ground & Gravel";
    const replyBody =
`Hi ${name},

Thanks for reaching out to Bitterroot Ground & Gravel.

We’ve received your quote request and will review it shortly.
A member of our team will contact you using your preferred method
during your requested time window.

Final pricing is subject to site conditions and, if required,
a site visit prior to work.

– Bitterroot Ground & Gravel
`;

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(replyBody)}`;
  }, 1500);

  document.getElementById("estimateResult").innerText =
    "Thank you. Your quote request has been submitted.";
}

function calculateInternal() {
  const rate = Number(document.getElementById("density").value);
  const slopeFactor = Number(document.getElementById("intSlope").value);
  const acres = Number(document.getElementById("intAcres").value);
  const miles = Number(document.getElementById("intMiles").value);

  const days = Math.ceil(acres / 2);
  const mobilization = miles > 15 ? 250 + (miles * 3) : 0;

  const total = ((rate * days) + mobilization) * slopeFactor;

  document.getElementById("internalResult").innerText =
    `Internal Total: $${Math.round(total).toLocaleString()} | Days: ${days}`;
}

