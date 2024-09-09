import { useState } from "react";
import { CreateMLCEngine } from "@mlc-ai/web-llm";


const SELECT_MODEL = 'Phi-3.5-mini-instruct-q4f16_1-MLC'
const ENGINE  = await CreateMLCEngine(
    SELECT_MODEL,
   {
    initProgressCallback: (info) =>{
        console.log('initProgress', info);
    }
   }
)

export function Form({ onSendMessage }) {
    const [message, setMessage] = useState("");
    const [statusButton, setStatusButton] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedMessage = message.trim();
        if (trimmedMessage !== '') {
            onSendMessage(trimmedMessage, "user");
            setStatusButton(true);
            setMessage(''); 
        }
        setStatusButton(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="message"
                autoComplete="off"
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" disabled={statusButton}>Enviar</button>
        </form>
    );
}
