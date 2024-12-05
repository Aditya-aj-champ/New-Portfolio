document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const serviceID = "service_c4off5o";
  const templateID = "template_qc9mten"; 

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
 
  const data = {
    first_name: formData.get("firstName"), 
    email: formData.get("email"),
    subject: formData.get("subject"), 
    message: formData.get("message"), 
    
  };
 
  emailjs
    .send(serviceID, templateID, data)
    .then((response) => {
      
      alert("Message sent successfully!");
      form.reset();
      
    })
  
    .catch((error) => {
      
      alert("Failed to send message, try again later.");
      console.error("Error details: ", error.text);
    });
});



// Initialize EmailJS with your correct User ID

// Initialize EmailJS with the correct User ID
// emailjs.init("fqUhD6zkIT19GqGDX"); // Replace with your actual User ID

// // Form submission
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const form = e.target;

//     const formData = {
//         firstName: form.firstName.value,

//         email: form.email.value,
//         subject: form.subject.value,
//         message: form.message.value
//     };

//     // Send the form data using the correct Service ID and Template ID
//     emailjs.send("service_c4off5o", "template_bpruxsh", formData)
//         .then((response) => {
//             console.log("Email sent successfully", response);
//             alert("Message sent successfully!");
//             form.reset();
//         })
//         .catch((error) => {
//             console.error("Error in sending email", error);
//             alert("Failed to send message. Please try again.");
//         });
// });
