export function Chat() {
    return (
        <div className="chat-container">
            <div className="chat-body">
                <ul>
                    <li className="message bot">
                        <span>GPT</span>
                        <span>Respuesta del bot</span>
                    </li>
                    <li className="message user">
                        <span>TU</span>
                        <span>Respuesta del usuario</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
