import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./ContactForm.module.css";

export function ContactForm() {
    const [state, handleSubmit] = useForm("xanwneap");

    return (

        <form onSubmit={handleSubmit} className={styles.form + " animated fade-in"}>
            <p className={styles.description}>
                Questions? Comments? Insults? <br />
                Want to work together?
            </p>

            <input
                placeholder='Name'
                id="name"
                type="text"
                name="name"
            />

            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />

            <input
                placeholder='Email'
                id="email"
                type="email"
                name="email"
            />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                placeholder='Message'
                id="message"
                name="message"
            />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            {state.succeeded && <p>Thanks for your message!</p>}
        </form>
    );
}