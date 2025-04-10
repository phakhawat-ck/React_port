import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
export const Btn_totop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 ">
      <button
        onClick={scrollToTop}
        className="inline-block transition hover:shadow-lg hover:shadow-amber-50 rounded-full"
        data-tooltip-id={`tooltip-btn`}
        data-tooltip-content="Scroll to top"
        data-tooltip-float="true"
      >
        <div className="bg-[var(--c-bg)] border border-[var(--color-border)] p-2 rounded-3xl">
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
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M11.0575 0.636853C11.0575 0.62238 11.0575 0.615143 11.0575 0.615143C11.0575 0.615143 11.0575 0.629616 11.0431 0.629616C11.0431 0.629616 11.0431 0.615143 11.0288 0.615143C11.0288 0.615143 11.0288 0.629617 11.0288 0.636853C10.5974 1.4908 0.0718926 21.3487 0.438559 21.3342C0.934638 21.3198 1.4451 21.3342 1.94117 21.3704C2.13529 21.3849 2.20719 21.2763 2.28627 21.1388C2.80392 20.1619 10.2523 6.15857 11.0431 4.74014C11.8196 6.15857 19.2105 20.1619 19.7137 21.1388C19.7928 21.2763 19.8647 21.3849 20.0588 21.3704C20.5549 21.3487 21.051 21.327 21.5471 21.3342C21.9281 21.3487 11.4961 1.49804 11.0575 0.636853Z"
              fill="white"
            />
            <path
              d="M18.1608 21.3849C17.9883 21.0158 17.7294 20.5599 17.4778 20.104C17.3412 19.8579 17.3053 19.8 16.8092 19.8C15.5726 19.8 13.2791 19.7783 11.0647 19.7638H11.0504H11.036C8.83598 19.7855 6.57127 19.8 5.34905 19.8C4.85297 19.8 4.81702 19.8579 4.68761 20.104C4.43598 20.5599 4.19153 21.0013 4.01898 21.3849C4.27062 21.3849 7.68565 21.3849 11.0719 21.3632C14.4582 21.3849 17.8948 21.3849 18.1608 21.3849Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
