# Give Together
A no loss donation to a new charity each week

[Twitter](https://twitter.com/givetogetherapp) | [Discord](https://discord.gg/4FnWFmu) | [Blog](https://medium.com/give-together)

Give Together allows your to donate interest accrued on your money to the charity of the week. 

Give Together converts your DAI into [rDAI](http://rdai.money/) a layer built on top of [cDAI](https://compound.finance/ctokens). cDAI is the [Compound Protocol](https://compound.finance/) tokenized in [v2](https://medium.com/compound-finance/compound-v2-is-live-157db0b7cfc8). Tokenizing on Compound allows you to trade your tokens just like normal. While it still accrues interest! rDAI takes this idea and adds to it. If you trade your cDAI the new holder earns the interest. But rDAI allows you to set a beneficiary when it is minted (You can even set multiple) who will receive the interest. This allows you to trade the token freely while the interest is still transferred to the beneficiary that was set when minted. This makes rDAI perfect for donating to charities or causes that you are passionate about. All while being able to transact the token as normal.

When you mint rDAI on Give Together the beneficiary is set to the Give Together contract [0x931621613F1f1953adB085C2B06d664363E54AaF](https://etherscan.io/address/0x931621613f1f1953adb085c2b06d664363e54aaf). Your rDAI will be locked in this contract, but can be withdrawn at any time with no loss to you. The contract will then forward the interest to the charity of the week. 

### Developing 
Run the development console.

```truffle develop```

Compile and migrate the smart contracts.

```
compile
migrate
```

Run Client

```
cd client
npm run start
```

Testing

```
test // Testing contracts
npm run test // Testing React App
```

Built using [Truffle React Box](https://www.trufflesuite.com/boxes/react)

# Deployments
### Mainnet
[0x931621613F1f1953adB085C2B06d664363E54AaF](https://etherscan.io/address/0x931621613f1f1953adb085c2b06d664363e54aaf)