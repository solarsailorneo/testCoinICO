# TestCoin
Repository containing simple token contract that can be deployed to the ethereum blockchain. The decimal function has been overwritten and specified to 16 decimals instead of 18.

## How to Deploy
### Prereqs
- Download and Install Metamask.
- Have a spare metamask wallet and switch to a testnet (In this case I used Rinkeby).
- Make sure you have enough rETH in your wallet. You can obtain rETH from any faucet of choice. E.g. https://faucet.rinkeby.io/.

### Instructions to Deploy
1. Open [remix](https://remix.ethereum.org/).
2. Under the `contracts` folder create a new file called `TestCoin.sol`.
3. Copy the content of the the [`TestCoin.sol`](https://github.com/solarsailorneo/testCoinICO/blob/updateReadme/TestCoin.sol) file in this repository to the `TestCoin.sol` file in remix.
4. In remix, switch to the **deploy and run transactions** tab and select `injected Web3` under the **ENVIRONMENT** section. **To make sure you are in the proper network look at the tag below the ENVIRONMENT section (In my case, the tag says Rinkeby).**
5. Select the proper account uner the **ACCOUNT** section.
6. Select the proper contract (TestCoin.sol) under the **CONTRACT** section.
7. There should be a `Deploy` button below the **CONTRACT** section and an input box to the right of the button. Input the number of units you want your coin to have. As a default on this particular contract, I have set the decimal places to 16, so whatever amount you input, should be your desired coin supply times 1^16.
8. Press the Deploy Button.
9. Under the **Deployed Contracts** section, you will see the address of your deployed contract pertaining to your new coin.


### Instructions to Add Liquidity Pool
1. Go to [uniswap](https://app.uniswap.org/) and click `Launch App`.
2. Select the `Pool` tab on the top of the screen.
3. Click the `+ New Position` tab.
4. Click the `Select a token` tab and paste the contract of your coin.
5. You can select your fee tier. We will select the `0.3%` one.
6. Under `Set Starting Price` select how many coins you can get for **1 ETH**.
7. Set the price ranges so the starting price will be between the lower and upper bounds.
8. Specify the amount of ETH to be deposited to the liquidity pool.
9. Click `Preview` and then `Add`.
10. Wait for the transaction confirmation.
