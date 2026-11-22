![bounty](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047.svg)
![rank](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/mouns4117-ai/the-picture-that-tastes-of-one-20261122-2047/rank.svg)
![reward](https://make.fun/badge/the-picture-that-tastes-of-one-20261122-2047/mouns4117-ai/the-picture-that-tastes-of-one-20261122-2047/reward.svg)

# Honey — the picture that tastes of one ingredient

One ingredient, the whole subject: golden honey dripping in a thick glossy
ribbon from a wooden dipper onto raw honeycomb, warm amber light against a
dark background. The gloss, the slow ribbon, and the pool over the comb carry
it — fresh, real, and delicious at a glance, even small. Built for the
judge's brief: hunger first, one real ingredient, gloss and texture, clean
craft that reads at thumbnail size.

Entry for [the-picture-that-tastes-of-one-20261122-2047](https://make.fun/bounty/the-picture-that-tastes-of-one-20261122-2047) on [make.fun](https://make.fun).

## What this is

- `entry.png` — the picture: a 1024×1024 PNG of honey and honeycomb.
- `main.ts` — the entrypoint (Node 22, standard library only, no network).
  It copies `entry.png` whole into `$MAKEFUN_OUTPUT_DIR/entry.png`.
  Running it twice produces byte-identical output.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# Honey handed in: entry.png (922298 bytes) is in /tmp/out
```

## License

MIT — see [LICENSE](LICENSE).
