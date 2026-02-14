import TechTalk from '../images/Tech-Talk.png'
import TechTalk2 from '../images/Tech-Talk-2.png'
import TechTalk3 from '../images/Tech-Talk-3.png'

export const blogs = [
    {
        'title': 'Tech Meetup Talk',
        'date': '07/03/2024',
        'description': `In March 2024, I was invited to speak at the monthly 'Tech Meetup - Glasgow.' 
                        The main focus of my talk was how my 'quarter-life crisis' led me into software 
                        development and how I successfully secured a job in a challenging market for juniors.

                        During the talk, I shared my journey from learning to code on my own to joining a bootcamp. 
                        I discussed the eight months I spent applying my new skills by building projects while 
                        working two other jobs and dedicating one day a week to a free software placement. Explaining 
                        throughout the talk how these efforts led me to secure my first job in the industry.`,

        'challenges': `This was an axiety inducing challenge that made me uncomfortable just at the thought of
                        speaking in front of an audience - not due to the literal act of doing it - but rather
                        speaking in front of a group of people who are way ahead me in terms of software
                        experience and just life in general.
                        
                        Dealing with the ruminating thoughts of imposter syndrome, asking myself 'why would anyone
                        listen to a junior who has less than a years experience in this industry.' A combination
                        of all the things listed made me uncomfortable which is why I felt like I had to do it. The
                        reward on the other side of facing something uncomfortable is worth it as you grow from it.`,

        'readTime': '2mins',
        'images': [TechTalk, TechTalk2, TechTalk3]
    },
    {
        'title': 'Using AI to Automate My SoundCloud Downloads',
        'date': '16/01/2026',
        'description': `Here’s what I would call a perfect use of AI and how it’s changing the game.

                    In my spare time I like to mix – on the decks, giving it a backspin and all that – 
                    which means I regularly download music from SoundCloud. For years I used a specific 
                    website to download tracks, but recently it became inaccessible due to an outdated SSL certificate.

                    After searching online for alternatives, I quickly realised that most “free” SoundCloud 
                    downloaders are filled with redirects, intrusive ads, and ultimately a paywall at the end. 
                    The user experience felt like navigating a maze.

                    That’s when I had a simple idea: why not use AI to write me a script that downloads 
                    the tracks directly to my laptop?

                    I prompted Claude to generate a script, reviewed the code carefully to ensure it was 
                    doing exactly what I needed, and within minutes I had a working local solution. 
                    No ads. No redirects. No paywalls. Just a clean, functional script running on my own machine.`,

        'challenges': `Although AI generated the initial script instantly, the real value came from reviewing 
                    and understanding the code before running it. As a developer, I see this as a crucial 
                    part of the “vibe coding” process that many non-technical users overlook.

                    Instead of blindly executing generated code, I stepped through it to confirm how files 
                    were handled, how requests were made, and that nothing unexpected was happening in the 
                    background. The challenge wasn’t writing the code – it was ensuring ownership and 
                    responsibility over it.

                    This project reinforced my belief that AI is most powerful when used as a collaborator 
                    rather than a replacement. It accelerates problem-solving, but understanding remains key.`,

        'readTime': '2mins'
    },
    {
        'title': 'Personalized Coding Basics Course',
        'date': '14/02/2026',
        'description': `With AI becoming an ever more consistent part of my software engineering career and 
                    phyically typing out the code is happening less and less
                    I decided to create a self-paced coding course that leverages AI to stay ahead and keep my skills sharp. 
                    Each section is personalized to my learning style and progress. By updating a central 
                    README and a Claude.md file, I can ask AI to generate new levels focusing on areas 
                    I struggle with, tailoring each exercise to me. I want to make sure I keep a deep understanding of the fundamentals.

                    This approach ensures I maintain an edge in software development,
                    The course covers multiple languages and fundamentals, all running directly 
                    in the browser via folders with a README, index.html, and app.js. Hosting it on a private 
                    GitHub repo keeps everything organized and secure.`,

        'challenges': `The real challenge is making AI work for you in a structured, meaningful way. 
                It’s easy to let AI generate content blindly, but the value comes from reviewing, 
                understanding, and tailoring the exercises to your own learning.

                I focused on using AI to create progressive levels (SQL, Python, JavaScript/TypeScript) 
                that adapt to my strengths and weaknesses, while organizing fundamentals and interview prep 
                into subcategories that remain accessible in-browser. The goal is to balance breadth and 
                depth of topics without getting overwhelmed, leveraging AI as a collaborator to stay 
                competitive, personalized, and continually improving.`,

        'readTime': '3mins',
    }


]