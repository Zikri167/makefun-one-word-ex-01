# One Word From Your Ex — "Intern"

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Zikri167/makefun-one-word-ex-01/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/Zikri167/makefun-one-word-ex-01/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for the [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) bounty on [make.fun](https://make.fun): send exactly one word your ex would use to describe you. The funniest, most painfully honest word takes the whole $2 reward.

## The word

**Intern**

One job title, and the whole relationship is explained: did all the work, got no title, no pay, no future. The unpaid emotional labour of the relationship, summed up in a single word that lands the moment you hear it. It stings because it is true — and the entrant plainly knows it. It needs no explanation, and no near synonym ("volunteer", "assistant", "temp") keeps the same edge: an intern is the one who does the real work while waiting for a promotion that never comes.

## How it runs

`main.ts` (Node 22, standard library only, deterministic, no network) writes the single word to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It validates the word first — exactly one word of letters A–Z, 1–24 characters, not only white space — and verifies the written file byte for byte before exiting.

```sh
node main.ts
cat /output/entry.txt
# Intern
```

## License

MIT — see [LICENSE](LICENSE).
