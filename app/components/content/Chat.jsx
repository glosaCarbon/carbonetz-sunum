import React, { useEffect, useRef, useState } from 'react'

const Chat = () => {
    const [messages, setMessages] = useState([{ text: "Merhaba, firmanızı ve ana faaliyet alanınızı biraz açıklar mısınız?", fromUser: false }]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const divRef = useRef(null);


    useEffect(() => {
        if (divRef.current) {
            setTimeout(() => {
                divRef.current.scrollTop = divRef.current.scrollHeight;
            }, 100);
        }
    }, [messages]);

    // Sahte veri üretiyorum.
    const fetchMessageFromServer = () => {
        setIsLoading(true)
        return new Promise((resolve) => {
            setTimeout(() => {
                setIsLoading(false)
                resolve('Servisten gelen mesaj');
            }, 3000);
        });
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            setMessages((prev) => [...prev, { text: inputMessage, fromUser: true }]);
            setInputMessage('');

            // Servisten mesaj al
            const serverMessage = await fetchMessageFromServer();
            setMessages((prev) => [...prev, { text: serverMessage, fromUser: false }]);
        }
    };

    return (
        <div className="flex flex-col chat-section w-full">

            <div ref={divRef} className="flex flex-col items-center bg-slate-100 shadow-inner rounded-md max-h-[375px] h-[375px] overflow-y-auto p-3">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.fromUser ? 'user-message bg-[#E4FDD4] mb-2 flex w-4/5 ml-14 rounded-lg px-3 py-2' : 'server-message bg-[#FEF6C5] mr-14 flex w-4/5 mb-2 rounded-lg px-3 py-2'}`}>
                        {message.text}
                    </div>
                ))}
                {isLoading && <span className='text-xs text-gray-400'>Loading..</span>}
            </div>

            <div className='flex my-2 gap-2'>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Mesaj yaz..."
                    className='py-2 px-3 bg-slate-50 rounded-md shadow-inner w-full border-[1px]'
                />
                <button type='button' onClick={handleSendMessage} className="bg-blue-800 hover:bg-blue-700 shadow-md rounded-md text-white py-2 px-3">Gönder</button>
            </div>

        </div>
    );
}

export default Chat