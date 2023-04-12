import React from "react";
import styles from "./form.module.css";
const Form = () => {
  return (
    <div className="row">
      <div className={styles.leftbox}>
        <h2>Settings</h2>
        <p>Customize the chat input:</p>
        <input type="text" className={styles.chatinput} />
        <h3>GPT-3 Settings</h3>
        <label for="temperature">Temperature:</label>
        <select id="temperature">
          <option value="0.5">0.5</option>
          <option value="0.7">0.7</option>
          <option value="0.9">0.9</option>
        </select>
        <br />
        <label for="max-tokens">Max Tokens:</label>
        <select id="max-tokens">
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        <br />
        <label for="stop-sequences">Stop Sequences:</label>
        <select id="stop-sequences">
          <option value="none">None</option>
          <option value=".">.</option>
          <option value="!">!</option>
          <option value="?">?</option>
          <option value="\n">New Line</option>
        </select>
        <br />
        <br />
        <button id="send-button">Send</button>
      </div>
      <div className={styles.rightbox}>
        <h2>Text Result</h2>
        <div className={styles.textresult}></div>
        <h3>GPT-3 Settings</h3>
        <label for="frequency">Frequency:</label>
        <select id="frequency">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <br />
        <label for="top-p">Top-p:</label>
        <select id="top-p">
          <option value="0.3">0.3</option>
          <option value="0.5">0.5</option>
          <option value="0.7">0.7</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
