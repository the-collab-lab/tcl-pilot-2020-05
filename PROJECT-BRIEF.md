# Project Brief, The Collab Lab

## Pilot Project, May 2020

### Overview

The goal of the project is to build a mobile web app that shows you [nearby Wikipedia entries](https://thenextweb.com/media/2013/05/29/wikipedia-surfaces-articles-based-on-your-location-and-wants-you-to-add-photos-with-your-mobile-phone/).

This project is based on [whats-near.me](https://whats-near.me), a mobile web app I recently built for my own use. You’re welcome to look at the [GitHub repo for that site](https://github.com/segdeha/whats-near.me) if you get stuck and want a hint!

![Screenshots from whats-near.me](https://raw.githubusercontent.com/the-collab-lab/tcl-pilot-2020-05/master/screenshots.png)

### Locations for things

* Site: [tcl-pilot-2020-05.netlify.com](https://tcl-pilot-2020-05.netlify.com)
* Repo: [github.com/the-collab-lab/tcl-pilot-2020-05](https://github.com/the-collab-lab/tcl-pilot-2020-05)
* Clone URL: `git@github.com:the-collab-lab/tcl-pilot-2020-05.git`
* Issue list: [github.com/the-collab-lab/tcl-pilot-2020-05/projects/1](https://github.com/the-collab-lab/tcl-pilot-2020-05/projects/1)
* Google Cloud Console: [console.cloud.google.com/home/dashboard?project=tcl-pilot-may-2020](https://console.cloud.google.com/home/dashboard?project=tcl-pilot-may-2020)

### Project cadence & duration

The project is expected to take 40 hours per participant, spread over 8 weeks.

Each week, the team of 4 developers will split into 2 pairs of 2 developers each. Each pair will take on a story or task from the issues list to work on together that week.

Pairings will go as follows:

#### Week 1, May 4 - 10

1. Amber & Jennifer
2. Ashling & Matthew

#### Week 2, May 11 - 17

1. Jennifer & Matthew
2. Ashling & Amber

#### Week 3, May 18 - 24

1. Ashling & Jennifer
2. Matthew & Amber

#### Week 4, May 25 - 31

1. Amber & Jennifer
2. Ashling & Matthew

#### Week 5, June 1 - 7

1. Jennifer & Matthew
2. Ashling & Amber

#### Week 6, June 8 - 14

1. Ashling & Jennifer
2. Matthew & Amber

#### Week 7, June 15 - 21

1. Amber & Jennifer
2. Ashling & Matthew

#### Week 8, June 22 - 28

1. Jennifer & Matthew
2. Ashling & Amber

### Pair Programming

A portion of your dedicated hours each week will be spent [pair programming](https://www.freecodecamp.org/news/how-remote-pair-programming-works-and-why-it-can-change-your-life-cd7b767dc60f/) with your partner — this is where the most magical collaboration happens.

Pair programming offers some really exciting opportunities to teach/learn from your partner, get a different perspective and/or insight on the issues you’re facing, and drive forward progress on your goals.

There is no one “right” way to pair program, but in general, you will meet with your partner on Zoom to work through the story or task you’ve chosen for that week. You’re encouraged to test out some different approaches to pair programming to see what works best for your and your partner’s collaboration styles.

### Weekly Sync

Each week, we’ll get on a 1-hour Zoom call. The call will always start with a *quick demo of the previous week’s work* from each pair. This is a common practice on most software teams and also lets you practice talking about your work, which can come in handy in a job interview setting!

The way we use the rest of the time will vary based on whether it’s an even- or odd-numbered week, as follows:

#### Odd-numbered weeks

1. Demos/discussion (15 minutes)
2. Learning module (30 minutes)
3. Mentors meet with pairs to talk through approach to upcoming week’s work (15 minutes)

#### Even-numbered weeks

1. Demos/discussion (15 minutes)
2. Retrospective (30 minutes)
3. Mentors meet with pairs to talk through approach to upcoming week’s work (15 minutes)

In our retros, we will share appreciations of our teammates as well as talk about what went well from a process perspective and what we could do to improve how we’re working together.

### Weekly Cadence

A week sounds like a long time in some ways, but part of working on a team is accounting for coordination costs. Let’s walk back our goal of demoing from the production URL on Sundays to see when different things need to happen.

* Sunday — Demo on production!
* Saturday — Respond to mentor feedback on PRs
* Friday — Respond to/give peer feedback on PRs and ping mentors for feedback
* Thursday — Complete story and ask for peer feedback
* Monday, Tuesday, Wednesday — Work out approach, research if needed, pair program

Having watched many cohorts before yours, our advice is to front-load the work as much as possible in the first couple of days of each week. Some of the stories are trickier than they appear on the surface!

### How to know what to do

The project is organized in GitHub as a set of [user stories](https://www.mountaingoatsoftware.com/agile/user-stories), each with a description of the desired functionality as well as [acceptance criteria](https://www.leadingagile.com/2014/09/acceptance-criteria/) (AC) that describe how you know whether the task or story is complete. You can find the stories on [the project board](https://github.com/the-collab-lab/tcl-pilot-2020-05/projects/1) on GitHub.

A task or story is “done” when the following are all true:

* The AC have been met
* The code to complete the task or implement the feature has been reviewed and approved by the other pair of developers
* The code has been reviewed and approved by one of the mentors
* The [Product Owner](https://www.agilealliance.org/glossary/product-owner/) (i.e. one of the mentors) has accepted the work as satisfactorily meeting the requirements

The “backlog” (the collection of stories) represents the work needed to complete the project. At the point when all of the stories are done, we should have a working app!

### Coordination & communication

It’s super helpful both to yourself and the mentors for you to document your work. This can prevent you from losing track of details or decisions you make with your pair buddy. It also allows mentors to catch up on your progress when you ask for help.

Some past cohorts have found success creating [wiki](https://github.com/the-collab-lab/tcl-pilot-2020-05/wiki) pages at the start of each week. Others have taken the approach of creating a [draft PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) as one of their first steps in getting started with the work. An advantage of this approach is you can have a conversation about the work right alongside the code. This, coupled with discussions about approach in the issue itself, is nice way of documenting your progress as you go.

### Development process

Work will be done on feature branches in git. Branches should be named in the following way:

	<initials of person 1>-<initials of person 2>-<short description>

For example:

	stc-an-render-map

The hypothetical example above has Stacie Taylor-Cima and Alejandro Ñáñez working together to get a map to render. Each of them will be able to work on the feature branch independently, but only one of them will submit the merge request when the work is ready (described in more detail below).

When you’re ready to start work on a feature, one person in your pair should create a local branch following the naming convention above, then push the branch to GitHub so your pair buddy can pull it down to their local environment. The following steps should work to do just this:

	git checkout -b an-example-feature-branch
	git push -u origin an-example-feature-branch

When you and your pair partner have working code that you believe is ready to be merged to `master` and deployed, you will follow the following steps:

1. Create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) (PR) describing the work done, the before and after states, and how to validate that the changes work as intended
2. Notify the other pair team in Slack that you have a new PR for them to review
3. Incorporate feedback from the other pair team into your work until both you and they are satisfied the code is ready to be merged
4. Request that Andrew or one of the mentors review the PR for final approval
5. Once approved, merge the PR into `master` (your code will be built and deployed to production automatically thanks to [Netlify](https://www.netlify.com/))
6. Check your work on the [production site](https://tcl-pilot-2020-05.netlify.com)
7. Celebrate! 🥳

### What else?

I’m around 💯% sure I’m forgetting or glossing over something important, so please be noisy on Slack as things come up. The mentors and I will do our best to get you un-stuck. Also, lean on each other for help as well! Finally, work in the open so everyone can benefit from your questions.

![GIF of George-Michael Bluth saying to his dad, “It’s happening, isn’t it”.](https://segdeha.com/assets/imgs/its-happening-isnt-it.gif)
