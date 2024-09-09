export function Chat({text, sender}) {
   
    return (
        <ul>
            <li className={`message ${sender === 'GPT' ? 'bot' : 'user'}`}>
                <span>{sender}</span>
                <span>{text}</span>
            </li>
        </ul>
    );
}
