import React from "react";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const Publications = () => {
  return (
    <section style={{ padding: "2rem", lineHeight: "1.6" }}>
      <header>
        <h1>Research & Technical Exploration</h1>
        <p>
          Below are areas of ongoing research and development focused on secure,
          decentralized systems and quantum cryptographic applications.
        </p>
      </header>

      <div style={{ marginTop: "2rem" }}>
        <h2>Decentralized Cryptographic Systems</h2>
        <ul>
          <li>
            Investigating Ethereum smart contracts using{" "}
            <strong>Solidity</strong>, specifically focusing on{" "}
            <strong>ERC-721</strong> and <strong>ERC-1155</strong> token
            standards.
          </li>
          <li>
            Exploring secure contract design, gas optimization techniques, and
            NFT lifecycle management in Web3 environments.
          </li>
          <li>
            Writing modular, reusable components for decentralized asset
            systems.
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Quantum Cryptography & Image Encoding</h2>
        <ul>
          <li>
            Researching <strong>Shamir’s Secret Sharing</strong> and its
            adaptation for quantum-safe key distribution protocols.
          </li>
          <li>
            Exploring quantum image processing models such as{" "}
            <strong>NEQR</strong> and other quantum image representations.
          </li>
          <li>
            Working toward efficient and secure quantum data encoding and
            transmission methods.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Publications;
