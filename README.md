# bridge to turbin3

## [Final Project Transaction Link](https://explorer.solana.com/tx/5Chk3kCuioR65Wh6iypFqTLjSmECo9dzWUgdXZwF8ypTHoKqCYfUohzqVZh7z1zonuWDgT5Y68CxbFaYVKbgWBJH?cluster=devnet)
- Get node modules: ```npm i```

## HW 1
### keygen.ts
> Generate a new keypair.
- Get the first keypair: ```ts-node keygen.ts```
- Put the secret key in a new file ```dev-wallet.json```

### airdrop.ts
> Airdrop some devnet SOL to the wallet.
- Get devnet SOL: ```ts-node airdrop.ts```

## HW 2
### transfer.ts
> Transfer SOL from a wallet to another.
- Get the second keypair: ```ts-node keygen.ts```
- Put the secret key in a new file ```dev-wallet2.json```
- Make a devnet transfer transaction: ```ts-node transfer.ts```

## Final Project
### wba_prereq.ts
> Define the IDL of the WBA program.
### enroll.ts
> Interact with the WBA program and send github username onchain.
- Make a devnet transaction to interact with the WBA program: ```ts-node enroll.ts```