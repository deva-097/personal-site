---
title: My AI Learning Journey
slug: my-ai-learning-journey
date: "2026-05-06"
description: A personal account of stumbling into AI through vibe coding, FOMO, and anxiety spirals — and eventually finding a way to use these tools that actually fits.
tags: ["life"]
---

One night at 2am, in Jan 2025, I felt like a mad scientist. I had just vibe-coded an app (before the term was actually put out into the world) - using a $20 Cursor subscription. It felt like magic.

But I'm getting ahead of myself.

My journey with AI started with ChatGPT and general brainstorming chats. I was quickly sucked into the AI-first, 10x narrative on both LinkedIn as well as Youtube - and started experiencing a fair bit of FOMO. I really wanted to build something, understand what this technology is about, what are the pitfalls and watchouts - but didn't have a place to start.

So I asked ChatGPT to build a course for me covering the basics - highlighting the main concepts I should know, and where to learn them from. (It took a few iterations to get it right, and I ended up straying a lot from it as well). As a pre-req it also asked me to brush up on coding, and [CS50P](https://cs50.harvard.edu/python/) was a fun little detour (don't ask me how many problems I *actually* finished there).

Even though it's a year old now, the most useful content to figure the basics is still from [Andrej Karpathy](https://www.youtube.com/playlist?list=PLAqhIrjkxbuW9U8-vZ_s_cjKPT_FqRStI) - these 3 videos helped me roughly understand what "AI" was, including enough of the basic terms like token, parameters, model, training/pre-training that I felt confident enough stepping in. [^1]

<figure>
  <img src="/images/Screenshot%202026-04-14%20at%2010.03.52%20PM.png" alt="Andrej Karpathy's YouTube channel" />
  <figcaption>Source: Andrej Karpathy</figcaption>
</figure>

Following this - I basically just jumped into "vibe coding". I downloaded Cursor - and was greeted with a scary terminal looking thing. I gathered some courage, said yes to all its (then scary) prompts, and started typing away what I wanted to build. That was the first night in a very long while that I stayed up past midnight "working". To my amazement - I had a working app at the end of it. I'd created a simple app for me to browse and organize my reddit saved posts. The feeling when I opened the localhost link was... quite something. 

Truly, it felt so liberating to be able to create something that worked just the way you wanted it to - no less, no more. And that too - not relying on anyone else [^2] to make it happen.

And then, the very next day - it all came crashing around my head. I was trying to open the app at my office to show off my new "skills", and it just wouldn't open. I tried debugging with cursor itself (something with the office wifi and what it allowed v/s not) - but somehow I managed to do irreparable damage. Heartbroken, I asked Cursor to "rollback" to a certain point - only to realize what hallucination meant. Cursor now coded for me a completely random app that still referenced Reddit, but had no functionality I actually wanted. Through this, I learnt what github was - and why it was used. Now I diligently "save" [^3] my work.

Since then, I've tried multiple vibe-coding tools, ran local LLMs, also tried local image and video gen. I did a lot of the local stuff just for experimentation (and maybe to prove to myself that I could set it up). With hosted LLMs and tools advancing the way they are, I'm still not sure if it's worth the effort to build local setups - but I guess it's just the fun of it. All of this was pretty much FAFO [^4], and I learnt a lot from the experience. 

Primarily, I got over the "fear" of using a terminal (VSCode with Claude Code and Codex is always open now), and of digging into scary looking settings inside services like Supabase and Github to connect things. I learned the most random things while trying to build a system that has some persistent memory (did you know your browser is basically a full OS that can hold substantial information?)

I discovered the lovely world of OpenSource (and the fact that it is being "poisoned" by vibe coded commits of low quality - probably from people like me :-P ), and the front page of HackerNews has helped me discover so much good writing (both Tech and non-Tech).

While this AI FOMO drove me to push myself out of my comfort zone in a good way, it gave me a healthy spattering of anxiety as well. With all the noise around "10x Productivity" and "I built xyz in a weekend!" - I started feeling like I was constantly behind. Instead of using AI as a "tool" - I started "doing" AI for the sake of it. I spent hours reading up on new developments, new apps, new ways of doing things. I got anxious thinking about improving my setup just so it could be a little better, but for what -- I had no idea. 

Many voices are now [recognizing](https://www.fast.ai/posts/2026-01-28-dark-flow/) and [speaking up](https://www.santoshkumarradha.com/writing/ai-work-addictive) how AI has become addictive - akin to social media apps. This seems to be by design - both the way GenAI (artificial intelligence) apps are designed and the way humans ("natural intelligence"?) behave. Almost all chats (with ChatGPT, or Grok, or even Claude) always end with a question, or a  [hook](https://www.reddit.com/r/ChatGPT/comments/1rrbvu0/has_anyone_else_noticed_chatgpt_ending_answers/) like "can I do this, this, or this for you next?". When doing coding or creating something - it's too easy to get stuck into the loop of "just one more iteration, one small fix here and it'll be perfect". And both of these are further compounded by the non-deterministic nature of how LLMs work - you may or may not get exactly the desired outcome (and yay, you get to try again!). 

It got so bad that I almost started off on a path to be an AI Engineer - downloading ML books and almost dropping real money on courses. It took some serious introspection (ironically, some of it with Claude) - to really pull back and come back to reality. I realized that as a person with multiple interests - I should be using AI to fuel my curiosity - to learn and to help me write. To build something meaningful and useful for me - something that does just enough, instead of chasing an endless rabbithole of the next new model or shiny app. This was literally the same realization I had about things that own me - I don't need "the best", I need "what works best, *for me*".

So now - I have a little more tech in my life, and I'm not afraid to vibe code simple apps and extensions to help me. I have this website. I have a simple agent setup that runs on my terminal that acts as a Chief-of-Staff (organize to-dos and plan), as well as a set of agents to help manage my content addiction. I'd love to have an OpenClaw [^5] that works for me 24x7 - but I think that's precisely the thing I may need to avoid  - having another thing demanding my attention all the time. 

The main re-frame I did was to identify how I actually work, what causes me irritation - and what actually needs fixing. For me, AI is now a co-worker and thought partner, a coding monkey, and a curiosity quencher (I just ask it throw-away questions and come back later).

Despite everything that I've done here, I still think best on pen and paper.

[^1]: For the bit more math oriented (and not faint hearted), 3blue1brown has a wonderful [series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) on how these things really work. Every also does a wonderful job explaining in layman terms: [History of AI](https://every.to/p/a-short-history-of-artificial-intelligence), [How LLMs work](https://every.to/p/how-ai-works),  [How AI images work](https://every.to/p/how-ai-image-models-work)

[^2]: Props to people who code stuff from scratch - I was stuck in package install hell for the first hour or so. Choosing the stack, installing packages, ensuring paths are set, virtual environments, etc. 

[^3]: As a gamer one would've expected me to know this better. Ah, learning the hard way!

[^4]: F\*ck Around and Find Out

[^5]: An AI agent framework that exploded on the scene (the developer has now joined OpenAI) - it's basically an "always-on" agent that can act like a co-worker that can literally work 24/7. Kind of what people dreamed AI would be able to do.
