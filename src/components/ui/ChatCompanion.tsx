"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    role: "user" | "assistant";
    text: string;
}

const AnimatedAvatar = ({ isTalking, className = "" }: { isTalking: boolean, className?: string }) => (
    <div className={`relative overflow-hidden bg-gradient-to-br from-teal-200 to-indigo-200 shadow-inner ${className}`}>
        <style>{`
            @keyframes blink {
                0%, 90%, 96%, 98%, 100% { transform: scaleY(1); }
                93%, 97% { transform: scaleY(0.1); }
            }
            @keyframes mouth-talk {
                0%, 100% { transform: scaleY(1); }
                50% { transform: scaleY(2.5); }
            }
            @keyframes head-bob {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-3px) rotate(2deg); }
            }
            @keyframes eye-look {
                0%, 100% { transform: translateX(0); }
                10%, 40% { transform: translateX(-2px); }
                60%, 90% { transform: translateX(2px); }
            }
        `}</style>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" style={{ animation: "head-bob 6s ease-in-out infinite" }}>
            {/* Cou (Neck) */}
            <path d="M 40 70 L 40 100 L 60 100 L 60 70 Z" fill="#E2B49A" />

            {/* Visage (Face) */}
            <rect x="25" y="25" width="50" height="55" rx="25" fill="#FFCDB2" />

            {/* Cheveux (Hair) */}
            <path d="M 22 45 Q 25 10 50 10 Q 75 10 78 45 Q 85 20 50 5 Q 15 20 22 45 Z" fill="#1e293b" />

            {/* Oreilles (Ears) */}
            <circle cx="23" cy="52" r="5" fill="#E2B49A" />
            <circle cx="77" cy="52" r="5" fill="#E2B49A" />

            {/* Yeux (Eyes) */}
            <g style={{ animation: "eye-look 8s ease-in-out infinite" }}>
                <ellipse cx="37" cy="50" rx="5" ry="6" fill="white" />
                <ellipse cx="63" cy="50" rx="5" ry="6" fill="white" />
                <g style={{ animation: "blink 5s infinite", transformOrigin: "50% 50%" }}>
                    <circle cx="37" cy="50" r="2.5" fill="#0f172a" />
                    <circle cx="63" cy="50" r="2.5" fill="#0f172a" />
                </g>
                {/* Sourcils */}
                <path d="M 31 40 Q 37 38 43 41" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 57 41 Q 63 38 69 40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>

            {/* Nez (Nose) */}
            <path d="M 50 54 L 48 60 L 52 60 Z" fill="#E2B49A" />

            {/* Bouche (Mouth) */}
            <path
                d={isTalking ? "M 42 68 Q 50 72 58 68" : "M 42 68 Q 50 74 58 68"}
                stroke="#632626" fill={isTalking ? "#b83b5e" : "transparent"} strokeWidth="2.5" strokeLinecap="round"
                style={{ animation: isTalking ? "mouth-talk 0.3s infinite" : "none", transformOrigin: "50% 68%" }}
            />
        </svg>
    </div>
);

export default function ChatCompanion() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "assistant", text: "Salut ! 👋 Je suis l'assistant magique de Zakaria. Prêt à découvrir son profil ?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // New states for dynamic bubble
    const bubbleTexts = [
        "Hé, tu me cherches ? ✨",
        "Psst... clique ici ! 👀",
        "J'ai un secret à te dire 🤫",
        "Pose-moi une question ! 💡",
        "Ne sois pas timide ! 👋"
    ];
    const [bubbleIndex, setBubbleIndex] = useState(0);
    const [isBubbleTalking, setIsBubbleTalking] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsBubbleTalking(false);
            return;
        }

        const interval = setInterval(() => {
            setIsBubbleTalking(true);
            setBubbleIndex(prev => (prev + 1) % bubbleTexts.length);

            // Avatar mouth animates for 1.5s when text changes
            setTimeout(() => {
                setIsBubbleTalking(false);
            }, 1500);
        }, 5000);

        return () => clearInterval(interval);
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", text: userMsg }]);
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg })
            });
            const data = await res.json();

            setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", text: data.text }]);
        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", text: "La connexion magique a été rompue... ⚡" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end pointer-events-none">

            {/* Chat Window */}
            <div
                className={`pointer-events-auto origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] mb-4 flex flex-col w-[90vw] sm:w-[350px] bg-slate-900/80 backdrop-blur-2xl border border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.15)] rounded-2xl overflow-hidden ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-12 pointer-events-none"
                    }`}
                style={{ height: "450px", maxHeight: "70vh" }}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 via-teal-900/40 to-slate-900 p-4 border-b border-teal-500/20 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <AnimatedAvatar isTalking={isTyping} className="w-10 h-10 rounded-full border-2 border-teal-400" />
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
                        </div>
                        <div>
                            <h3 className="font-bold text-teal-50 text-sm">Assistant Magique</h3>
                            <p className="text-[10px] text-teal-400/80 font-mono">Prêt à répondre</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Fermer le chat"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl shadow-md text-sm leading-relaxed ${msg.role === "user"
                                    ? "bg-teal-600/90 text-white rounded-tr-sm"
                                    : "bg-slate-800/80 text-slate-200 rounded-tl-sm border border-slate-700/50"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-sm border border-slate-700/50 flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 shrink-0">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Posez-moi une question..."
                            className="w-full bg-slate-800 text-sm text-white rounded-full pl-4 pr-12 py-3 border border-slate-700 focus:outline-none focus:border-teal-500 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            className="absolute right-2 p-1.5 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`pointer-events-auto relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-900 border border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-300 ease-out z-50`}
                style={{ animation: isOpen ? "none" : "floatY 6s ease-in-out infinite alternate" }}
                aria-label="Ouvrir l'assistant"
            >
                {/* Comic Book Speech Bubble */}
                {!isOpen && (
                    <div className="absolute -top-[45px] md:-top-[50px] -right-2 md:right-0 z-50 pointer-events-none drop-shadow-lg">
                        <style>{`
                            @keyframes popIn {
                                0% { opacity: 0; transform: translateY(4px) scale(0.95); }
                                100% { opacity: 1; transform: translateY(0) scale(1); }
                            }
                        `}</style>
                        <div className="relative bg-slate-800 border border-teal-500/50 px-4 py-2 rounded-2xl rounded-br-none whitespace-nowrap overflow-hidden">
                            <p
                                key={bubbleIndex}
                                className="text-xs font-medium text-teal-50"
                                style={{ animation: "popIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards" }}
                            >
                                {bubbleTexts[bubbleIndex]}
                            </p>
                            {/* Queue de la bulle (tail) pointant vers la tête */}
                            <div className="absolute -bottom-[5px] right-2 md:right-4 w-3 h-3 bg-slate-800 border-r border-b border-teal-500/50 transform rotate-45" />
                        </div>
                    </div>
                )}

                {/* Organic pulse rings */}
                <div className="absolute inset-0 rounded-full border border-teal-400/30 scale-100 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-0 rounded-full border border-teal-400/20 scale-100 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: "1s" }} />

                {/* Icon Animated Avatar */}
                <AnimatedAvatar
                    isTalking={(isTyping && isOpen) || isBubbleTalking}
                    className={`w-full h-full rounded-full transition-transform duration-300 ${isOpen ? '' : 'group-hover:scale-110'}`}
                />
            </button>
        </div>
    );
}
