import { useState, useEffect, useRef } from "react";
import { Chat } from "./Chat";
import { Form } from "./Form";

export default function App() {
    const [messages, setMessages] = useState([]);
    const chatBodyRef = useRef(null);

    const addMessage = (text, sender) => {
        setMessages([...messages, { text, sender }]);
    };
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight; // Scroll al final
        }
    }, [messages]); 

    return (
        <main>
            <h1>IA LLM</h1>
            <div className="chat-container">
                <div className="chat-body" ref={chatBodyRef} style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <Chat key={index} text={msg.text} sender={msg.sender} />
                    ))}
                </div>
            </div>
            <Form onSendMessage={addMessage} />
        </main>
    );
}
