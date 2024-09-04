import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = {
      name: name,
      message: message
    };

    try {
      // Post data to the server
      const response = await fetch('/api/database', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        document.getElementById('my_modal_2').showModal()
        setName(''); // Clear name input
        setMessage(''); // Clear message input
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content w-full text-center">
        <div className="mx-auto">
          <h1 className="text-9xl font-bold mb-8 text-center">Interessert?</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Hva er navnet ditt?</span>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Navn"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Din melding</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Melding"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="btn" type="submit">
                Send!
              </button>
            </div>

    
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Meldingen ble sendt!</h3>
                  <p className="py-4">
                    Takk at du lå igjen en melding. Vi kontakter deg så fort vi
                    kan!
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button onClick={() => setSubmitted(false)}>close</button>
                </form>
              </dialog>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
