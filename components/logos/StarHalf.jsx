import React from "react";

function StarHalf({ filled = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      style={{ fill: filled ? "white" : "none" }}
      viewBox="0 0 24 24"
    >
      <path
        // stroke="#000"
        style={{ stroke: filled ? "white" : "currentColor" }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.306 19.371L12 16.8V4.448v0c0-.267 0-.4-.034-.43A.1.1 0 0011.862 4c-.041.017-.085.143-.172.395L9.95 9.4c-.066.19-.099.284-.158.355a.5.5 0 01-.195.141c-.085.035-.186.037-.386.041l-3.944.08c-.705.015-1.058.022-1.198.156a.5.5 0 00-.147.452c.035.19.316.404.878.83l3.143 2.383c.16.121.24.182.289.26a.5.5 0 01.074.229c.007.092-.022.188-.08.38l-1.143 3.776c-.204.674-.306 1.012-.222 1.187a.5.5 0 00.384.28c.193.025.482-.176 1.06-.579z"
      ></path>
    </svg>
  );
}

export default StarHalf;
