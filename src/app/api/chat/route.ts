import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // If the OPENAI_API_KEY environment variable is set, connect to the real LLM.
        if (process.env.OPENAI_API_KEY) {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: "Tu es le compagnon virtuel magique de Zakaria Makhlouf, étudiant en BUT Informatique (développeur Fullstack). Ton rôle est d'accompagner les recruteurs avec humour sur son portfolio. Fais des petites blagues comme : 'Recrute Zakaria sinon je te jette un sort 🪄 !!'. Tu es espiègle mais tu vends très bien ses compétences (Java, Next.js, Python, Réseau, Bases de données, TailwindCSS)." },
                        { role: 'user', content: message }
                    ]
                })
            });
            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                return NextResponse.json({ text: data.choices[0].message.content });
            }
        }

        // --- FALLBACK MOCK MODE (si pas de clé API) ---
        await new Promise(r => setTimeout(r, 1200 + Math.random() * 800)); // Simulate typing

        const lowerMsg = message.toLowerCase();
        let fallbackResponse = "C'est mystérieux... ✨ Dis-moi, tu veux qu'on parle de ses projets ou de ses talents en programmation ?";

        if (lowerMsg.includes("bonjour") || lowerMsg.includes("salut") || lowerMsg.includes("coucou")) {
            fallbackResponse = "Salutations, noble recruteur du web ! 🧙‍♂️ Je suis l'acolyte magique de Zakaria. Prêt à découvrir un talent rare ?";
        } else if (lowerMsg.includes("recrute") || lowerMsg.includes("stage") || lowerMsg.includes("alternance") || lowerMsg.includes("pourquoi")) {
            fallbackResponse = "La réponse est évidente : recrute Zakaria sinon je te jette un sort 🪄 !! Blague à part, il a un profil hyper complet allant du front-end aux bases de données.";
        } else if (lowerMsg.includes("compétences") || lowerMsg.includes("techno") || lowerMsg.includes("langage")) {
            fallbackResponse = "Il adore Next.js pour le web fluide, il maîtrise Java sur le bout des doigts, mais aussi Python, les réseaux... Ce gars construit des choses solides ! 💻";
        }

        return NextResponse.json({ text: fallbackResponse });

    } catch (error) {
        return NextResponse.json({ text: "Oups... Mon grimoire vient de planter. Essaie encore ! ⚡" }, { status: 500 });
    }
}
