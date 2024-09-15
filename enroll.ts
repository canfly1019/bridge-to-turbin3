import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { IDL, WbaPrereq } from "./wba_prereq";
import wallet from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com");
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});

const program = new Program<WbaPrereq>(IDL, provider);
const github = Buffer.from("canfly1019", "utf8");

const enrollmentSeeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollmentKey, _bump] = PublicKey.findProgramAddressSync(
  enrollmentSeeds,
  program.programId
);

(async () => {
    try {
      const txhash = await program.methods
        .complete(github)
        .accounts({
          signer: keypair.publicKey,
          prereq: enrollmentKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([keypair])
        .rpc();
  
      console.log(
        `Transaction success! Transaction signature: https://explorer.solana.com/tx/${txhash}?cluster=devnet`
      );
    } catch (e) {
      console.error(`Something is wrong: ${e}`);
    }
  })();
  