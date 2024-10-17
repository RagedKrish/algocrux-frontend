import React from 'react';

const FAQ = () => {

    const faqs = [
        {
            question: 'What is AlgoCrus?',
            answer: 'AlgoCrus is an open-source developers community focused on collaboration, knowledge sharing, and contributing to various projects. We encourage developers of all skill levels to participate and grow.'
        },
        {
            question: 'How can I contribute to open-source projects?',
            answer: 'You can contribute by joining any project listed in our repositories, checking open issues, and submitting pull requests. Start by forking the repo, making changes, and submitting a pull request for review.'
        },
        {
            question: 'Do I need to be an experienced developer to join?',
            answer: 'No! AlgoCrus welcomes developers of all experience levels. Whether you are a beginner looking to learn or an experienced developer wanting to contribute, we have something for everyone.'
        },
        {
            question: 'How do I find a project to contribute to?',
            answer: 'Visit our GitHub page or community board to find projects that need contributions. You can filter by programming language, difficulty level, or technology stack to find something that suits your skills.'
        },
        {
            question: 'How can I get help if I’m stuck?',
            answer: 'Our community is here to help! You can ask questions in the Discord server, community forums, or by opening a discussion thread on GitHub. We encourage knowledge sharing and collaboration.'
        },
    ];

    return (
        <section className='flex justify-center items-center w-full'>
            <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
                <h2 className="text-4xl font-medium text-slate-100">AlgoCrus FAQs</h2>
                <div className="grid grid-cols-1 items-stretch justify-start gap-5 w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className='flex flex-col justify-start items-start gap-2 rounded-lg overflow-hidden cursor-pointer w-full card'>
                            <details className='p-5 w-full'>
                                <summary className='text-xl font-medium  cursor-pointer text-slate-200'>{faq.question}</summary>
                                <p className='text-lg mt-2 text-slate-300'>{faq.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;