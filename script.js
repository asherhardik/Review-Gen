const reviews = [
  "Amazing experience with staff members..Specially Mr. Krishna Vishwakarma..He is always there to welcome customers with polite nature and smiling face..",
  "The experience through our entire journey in buying our Activa was very satisfying.Sales Executive helped us through every stage and made sure that there was no back n forth. To top it all, he made the Honda Two-Wheeler delivery day very special for us. Felt like a party :) I'd also like to thank the team, for getting all the paperwork done within a very demanding and crunched time span. We drove out with a hearty smile.",
  "Exceptional service, commitment & delivery by {}. This is the Honda experience. Right from the first call to delivery, they were just perfect. Their compassion towards his clients reflects in his work and attitude. ",
  "The oldest and most popular Anurag Honda showroom for my faithful Honda Two-Wheeler. Service when required was always efficient and to the point. The best part of the is showroom is that it has service centre as well. Mr. Tushar , the service Manager has always been courteous to me and offered an immaculate job . Keep up the good work team!",
  "I just visited Anurag Honda Showroom.Our sales consultant made the entire process simple and enjoyable. I've had experiences at other dealerships where the consultant was either intrusive or seemingly disinterested and sir was neither of these things. He was knowledgeable and so pleasant to work with. He found me the perfect model, in the color I was hoping for, and at a price I was comfortable with. Also, It is always nice when the sales person is excited for you too! The customer service at Anurag Honda is unbeatable. Their staff goes above and beyond. Thank you Anurag-Honda-Family.",
  "Excellent service by the Anurag Honda sales team. Special thanks to {} for giving the best deal in the market and making me feel like home. I have dealt with many dealers and brands and I can surely say that they are the best in the business. The Atmosphere and vibe of the showroom is very positive and premium. Makes you feel like a king. I would definitely come back here during my next Two-Wheeler purchase.",
  "Today, I picked up my Honda Activa from Anurag Honda Showroom. A big thank you to Sales Manager & Executive for their polite and professional assistance he explained the entire process so well and made the delivery experience smooth and hassle-free. Big thumbs up to the Anurag Honda Team!",
  "Extremely happy with the excellent customer service offered at the Anurag Honda.The BEST SUPPORT AND FINANCE STAFF for quick finance options also. The commitment regarding delivery date and documentation was also full filled. Highly recommended. Would suggest all interested to get a Honda 2 wheeler to visit them."
];

const generateBtn = document.getElementById("generateBtn");
const reviewContainer = document.getElementById("reviewContainer");
const reviewDiv = document.getElementById("review");
const copyBtn = document.getElementById("copyBtn");
const regenBtn = document.getElementById("regenBtn");

function getRandomReview() {
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews[randomIndex];
}

function showReview() {
  const reviewText = getRandomReview();
  reviewDiv.textContent = reviewText;
  reviewContainer.style.display = "block";
}

generateBtn.addEventListener("click", () => {
  generateBtn.style.display = "none";
  showReview();
});

regenBtn.addEventListener("click", showReview);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(reviewDiv.textContent)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => alert("Failed to copy text."));
});
