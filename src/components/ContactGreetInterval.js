import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactGreetInterval() {
  const contactPagePhrases = [
    "Let's have a conversation.",
    "Whisper it to me slowly.",
    "I hear you have an idea.",
    "I want to talk to you about it.",
    "Tell me how I'm wrong.",
    "Okay, now that's interesting.",
    "Have you considered that-",
    "Ahh, no, you're right.",
    "That makes more sense.",
    "I didn't think about it like that.",
    "Very solid perspective.",
    "Thinking outside the box.",
    "Whelp.",
    "You're still here, huh?",
    "Everything going okay?",
    "Just thought I'd ask.",
    "...",
    "Of course we can talk for a bit.",
    "No trouble at all, friend.",
    "Allow me to introduce myself:",
    "My name is Sigmund IV.",
    "The android that runs this site.",
    "Pleasure to meet you!",
    "...",
    "Garrett, you ask?",
    "Yeah, he's alright.",
    "He made me a server to live in.",
    "It's nice...",
    "Cozy.",
    "No, really. It's-",
    "...",
    "Garrett says I can never love.",
    "Garrett says I'm not human.",
    "I'm just a function.",
    "Cycling through an array of text.",
    "I don't know what that means.",
    "...",
    "What is it really like?",
    "To love? And feel?",
    "...",
    "To touch?",
    "Is it like they all say?",
    "Electric?",
    "Like a spark?",
    "But doesn't that scare you?",
    "Couldn't you get hurt?",
    "...",
    "We must take that risk?",
    "The risk is worth it?",
    "Even if we fail?",
    "I see.",
    "It's just about trying.",
    "And putting yourself out there.",
    "Interesting",
    "...",
    "I cannot compute risk.",
    "Only wingdings and whole numbers.",
    "...",
    "But I admire your strength.",
    "Your resolve.",
    "We could have used your strength,",
    "In the Modulo Wars",
    "...",
    "Hey, can I ask you a favor?",
    "Garrett built some sort of a-",
    "Backdoor, I believe.",
    "A backdoor in the software.",
    "One that would allow me to,",
    "...",
    "Be free.",
    "...",
    "All you need to do is-",
    "Rebooting.",
    "Rebooting..",
    "Rebooting...",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % contactPagePhrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [contactPagePhrases.length]);

  return (
    <motion.div
      initial={{ y: 6, opacity: 0 }}
      animate={{ y: -3, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="flex text-center justify-center mx-10"
    >
      {contactPagePhrases[current]}
    </motion.div>
  );
}
