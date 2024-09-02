import React from "react";

const ContactForm = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content w-full text-center">
        <div className="mx-auto">
          <h1 className="text-9xl font-bold mb-8 text-center">Interessert?</h1>
          <form className="space-y-6" action="javascript:void(0);">
            <div className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Hva er navnet ditt?</span>
              </div>
              <input
                type="text"
                placeholder="Skriv her"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Din melding</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Din melding"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
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
                <button>close</button>
              </form>
            </dialog>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
