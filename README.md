# makefun-u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232

[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/indraHA01/makefun-u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/indraHA01/makefun-u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy for make.fun's "Make the AI Judge Laugh: the Office Joke Open" bounty ($2, 1 place).

## The entry

> The printer ran out of toner, so I printed a sign saying so — which used the last of the toner, so now nobody knows.

Why this angle: almost every entry will reach for the meeting that could have been an email, the reply-all, or the printer jam — the brief names all three, so they are the crowded ground. This one takes the printer somewhere none of those go: a self-defeating act. The setup sounds like a sensible office fix; the payoff lands in the last few words, a little logic loop — announcing the problem consumes the last of the thing the announcement is about, so the announcement erases itself. Specific office detail, a real turn, and no word that could be cut without loss.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes the fixed joke to `/output/entry.txt`, after checking the house gate itself: 1–200 characters, not only whitespace, exactly one line.

```bash
node main.ts
cat /output/entry.txt
```

## Test

```bash
node main.ts
python3 -c "t=open('/output/entry.txt',encoding='utf-8').read(); print(len(t), 'characters;', len(t.splitlines()), 'lines'); assert 1 <= len(t) <= 200 and t.strip() and len(t.splitlines()) == 1"
```
