import React, { useState } from "react";
import { Header, Hero, Testinomail, Footer,Benefits,House ,Working,Qna ,Banner} from "../container";
import {About} from "../components"

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Q. What\'s the catch?',
      answer: 'None. We don\'t address hardware issues.',
      open: true
    },
    {
      question: 'Q. How do you make money?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'Q. How does the money transfer into my account?',
      answer: 'This many.',
      open: false
    },
    {
      question: 'Q. Terms of Service',
      answer: 'This many.',
      open: false
    },
    {
      question: 'Q. How do we make money?',
      answer: 'This many.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <House />
      <Working />
      <Testinomail />
      <Banner />
      <div className="qna_container">
      <h1>Questions You May Have</h1>
        {faqs.map((faq, i) => (
          <Qna faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;