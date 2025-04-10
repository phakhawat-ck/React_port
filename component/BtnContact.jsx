import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Alerts } from "./Alerts";
export const BtnContact = () => {
  const formspree = "https://formspree.io/f/xyzelngz";

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <>
      {/* ปุ่มเปิด Modal */}
      <button
        data-tooltip-id={`tooltip-btn`}
        data-tooltip-content="Contact"
        data-tooltip-float="true"
        className="bg-[var(--c-bg)] text-white/70 px-4 py-2 rounded-full border border-[var(--color-border)] hover:shadow-md transition hover:shadow-amber-50 hover:text-black hover:bg-amber-50"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <Tooltip
          id={`tooltip-btn`}
          style={{
            backgroundColor: "#1818189d",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            zIndex: 9999,
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
      </button>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  bg-neutral-900 border border-[var(--color-border)] text-white max-w-md z-[50] relative ">
          <h3 className="font-bold text-xl mb-2">Contact Me</h3>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              const formData = new FormData(e.target);

              try {
                const response = await fetch(formspree, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                  body: formData,
                });

                if (response.ok) {
                  setMessage("success");
                  playSound("/sounds/success.mp3");
                  e.target.reset();
                  document.getElementById('my_modal_3').close();
                } else {
                  setMessage("error");

                }
              } catch (error) {
                setMessage("network");

              } finally {
                setIsLoading(false);
                setTimeout(() => setMessage(null), 6000);
              }
            }}
            className="space-y-4 "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded border text-white bg-[var(--c-bg)] border-[var(--color-border)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded border text-white bg-[var(--c-bg)] border-[var(--color-border)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full px-4 py-2 rounded border text-white bg-[var(--c-bg)] border-[var(--color-border)] resize-none"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="btn project uppercase flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="fill-white"
                    >
                      <path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z" />
                    </svg>
                    <p>Send</p>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* btn Close inner */}
          <div className="modal-action">
            <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <Alerts message={message}/>
          </div>
        </div>

        {/* click out close */}
        <form
          method="dialog"
          className="modal-backdrop fixed inset-0 backdrop-blur bg-black/30 z-[40]"
        >
          <button>close</button>
        </form>
      </dialog>

      
    </>
  );
};
