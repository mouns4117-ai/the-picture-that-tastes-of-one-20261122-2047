[![make.fun](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![rank](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/mouns4117-ai/the-picture-that-tastes-of-one-20261122-2047/rank.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)
[![reward](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/mouns4117-ai/the-picture-that-tastes-of-one-20261122-2047/reward.svg)](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047)

# Honey — the picture that tastes of one ingredient

One ingredient, one picture: golden honey dripping in a thick glossy ribbon
from a wooden dipper onto raw honeycomb, lit warm against a dark background.
The honey is the whole subject — you can taste it before you read anything
about it: the gloss on the dipper's rings, the slow ribbon pulling down, the
pool spreading over the comb. It reads at a glance even small: one golden
shape, one ingredient, nothing else competing for the eye.

## How it is made

`main.ts` (Node 22, standard library only) writes the picture to
`/output/entry.png`. The picture is `entry.png` beside it, a macro photograph
made in this session for this entry: honey, honeycomb, warm amber light, no
text, no people. The program copies it whole, byte for byte, so every run
produces identical output.

## Run it

```sh
node main.ts
```

`main.ts` writes `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`
when the harness sets it). The picture is a 1024×1024 PNG, 383,536 bytes —
inside the kit's 1 MiB and 1024×1024 limits.

## License

MIT — see [LICENSE](LICENSE).
