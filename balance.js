const { SigningStargateClient } = require('@cosmjs/stargate');
const { Telegraf, Markup } = require('telegraf');

const chatID = '-4059499757' 
const TGtoken = 'Your_Telegram_TOKEN' 
const bot = new Telegraf(TGtoken);

//#region  Osmosis
const osmosisRpcUrl = 'https://rpc.cosmos.directory/osmosis';
const osmosisWallets = {
  osmosisRelayer: 'osmo1jqz2205er0d8657ugll98c462cyplkcqhk39we',
};
const osmosisKontrol = 1
const osmosisDecimal = 1000000
async function checkOsmosisBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[3].amount/osmosisDecimal < osmosisKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi : https://www.mintscan.io/osmosis/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[3].amount/osmosisDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/osmosis/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[3].amount/osmosisDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region  Cosmos
const cosmosRpcUrl = 'https://rpc.cosmos.directory/cosmoshub';
const cosmosWallets = {
  cosmosRelayer: 'cosmos1jqz2205er0d8657ugll98c462cyplkcqldz4ct', 
};
const cosmosKontrol = 1
const cosmosDecimal = 1000000

async function checkCosmosBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/cosmosDecimal < cosmosKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/cosmos/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/cosmosDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/cosmos/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/cosmosDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region Evmos
const evmosRpcUrl = 'https://rpc.cosmos.directory/evmos';
const evmosWallets = {
  evmosRelayer: 'evmos1q9snmdfrpxk2ma992333qhyp3ntxh02nuyqhz0', 
};
const evmosKontrol = 1
const evmosDecimal = 1000000

async function checkevmosBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/evmosDecimal < evmosKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/evmos/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/evmosDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/evmos/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/evmosDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region Axelar
const axelarRpcUrl = 'https://rpc.cosmos.directory/axelar';
const axelarWallets = {
  axelarRelayer: 'axelar1jqz2205er0d8657ugll98c462cyplkcqmr5an2', 
};
const axelarKontrol = 1
const axelarDecimal = 1000000

async function checkaxelarBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/axelarDecimal < axelarKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/axelar/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/axelarDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/axelar/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/axelarDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region Umee
const umeeRpcUrl = 'https://rpc.cosmos.directory/umee';
const umeeWallets = {
  umeeRelayer: 'umee1jqz2205er0d8657ugll98c462cyplkcqdml2ue', 
  restake: 'umee1huydnawzyugn8ntmuux843flkza27vyk57vzlj'
};
const umeeKontrol = 1
const umeeDecimal = 1000000

async function checkumeeBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/umeeDecimal < umeeKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/umee/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/umeeDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/umee/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/umeeDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region Omniflix
const omniflixRpcUrl = 'https://rpc.cosmos.directory/omniflixhub';
const omniflixWallets = {
  omniflixRelayer: 'omniflix1jqz2205er0d8657ugll98c462cyplkcqznnv04', 
};
const omniflixKontrol = 1
const omniflixDecimal = 1000000

async function checkomniflixBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/omniflixDecimal < omniflixKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/omniflix/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/omniflixDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/omniflix/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/omniflixDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region quicksilver
const quicksilverRpcUrl = 'https://rpc.cosmos.directory/quicksilver';
const quicksilverWallets = {
  quicksilverRelayer: 'quick1jqz2205er0d8657ugll98c462cyplkcq5fj8pe', 
};
const quicksilverKontrol = 1
const quicksilverDecimal = 1000000

async function checkquicksilverBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress,"quick");

    if (balance[1].amount/quicksilverDecimal < quicksilverKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/quicksilver/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[1].amount/quicksilverDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/quicksilver/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[1].amount/quicksilverDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region Archway
const archwayRpcUrl = 'https://rpc.cosmos.directory/archway';
const archwayWallets = {
  archwayRelayer: 'archway1jqz2205er0d8657ugll98c462cyplkcq2x73ju', 
};
const archwayKontrol = 1
const archwayDecimal = 1000000

async function checkarchwayBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/archwayDecimal < archwayKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/archway/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/archwayDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/archway/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/archwayDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region aura
const auraRpcUrl = 'https://rpc.cosmos.directory/aura';
const auraWallets = {
  auraRelayer: 'aura1jqz2205er0d8657ugll98c462cyplkcqym4h6j', 
};
const auraKontrol = 1
const auraDecimal = 1000000

async function checkauraBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/auraDecimal < auraKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://aurascan.io/account/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/auraDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://aurascan.io/account/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/auraDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region injective
const injectiveRpcUrl = 'https://rpc.cosmos.directory/injective';
const injectiveWallets = {
  injectiveRelayer: 'inj1jujy25k56uwv6fag7d4y9q9rwcrr6ynj0nrrvx', 
};
const injectiveKontrol = 1
const injectiveDecimal = 1000000

async function checkinjectiveBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/injectiveDecimal < injectiveKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/injective/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/injectiveDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/injective/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/injectiveDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region jackal
const jackalRpcUrl = 'https://rpc.cosmos.directory/jackal';
const jackalWallets = {
  jackalRelayer: 'jkl1jqz2205er0d8657ugll98c462cyplkcqxnvyp5', 
};
const jackalKontrol = 1
const jackalDecimal = 1000000

async function checkjackalBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/jackalDecimal < jackalKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://ping.pub/jackal/account/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/jackalDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://ping.pub/jackal/account/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/jackalDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region juno
const junoRpcUrl = 'https://rpc.cosmos.directory/juno';
const junoWallets = {
  junoRelayer: 'juno1jqz2205er0d8657ugll98c462cyplkcqflpwlh', 
};
const junoKontrol = 1
const junoDecimal = 1000000

async function checkjunoBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/junoDecimal < junoKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/juno/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/junoDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/juno/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/junoDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region kava
const kavaRpcUrl = 'https://rpc.cosmos.directory/kava';
const kavaWallets = {
  kavaRelayer: 'kava1jqz2205er0d8657ugll98c462cyplkcqrckgwv', 
};
const kavaKontrol = 1
const kavaDecimal = 1000000

async function checkkavaBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/kavaDecimal < kavaKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/kava/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/kavaDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/kava/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/kavaDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region kujira
const kujiraRpcUrl = 'https://rpc.cosmos.directory/kujira';
const kujiraWallets = {
  kujiraRelayer: 'kujira1jqz2205er0d8657ugll98c462cyplkcqw9qd4p', 
};
const kujiraKontrol = 1
const kujiraDecimal = 1000000

async function checkkujiraBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/kujiraDecimal < kujiraKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://finder.kujira.network/kaiyo-1/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/kujiraDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://finder.kujira.network/kaiyo-1/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/kujiraDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region gitopia
const gitopiaRpcUrl = 'https://rpc.cosmos.directory/gitopia';
const gitopiaWallets = {
  gitopiaRelayer: 'gitopia1jqz2205er0d8657ugll98c462cyplkcqp49zhg', 
};
const gitopiaKontrol = 1
const gitopiaDecimal = 1000000

async function checkgitopiaBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/gitopiaDecimal < gitopiaKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://ping.pub/gitopia/account/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/gitopiaDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://ping.pub/gitopia/account/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/gitopiaDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region luna
const lunaRpcUrl = 'https://rpc.cosmos.directory/terra2';
const lunaWallets = {
  lunaRelayer: 'terra1jqz2205er0d8657ugll98c462cyplkcqefc46t', 
};
const lunaKontrol = 1
const lunaDecimal = 1000000

async function checklunaBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/lunaDecimal < lunaKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://finder.terra.money/mainnet/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/lunaDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://finder.terra.money/mainnet/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/lunaDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region neutron
const neutronRpcUrl = 'https://rpc.cosmos.directory/neutron';
const neutronWallets = {
  neutronRelayer: 'neutron1jqz2205er0d8657ugll98c462cyplkcqmjthzv',
};
const neutronKontrol = 1
const neutronDecimal = 1000000

async function checkneutronBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/neutronDecimal < neutronKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/neutron/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/neutronDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/neutron/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/neutronDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region secret
const secretRpcUrl = 'https://rpc.cosmos.directory/secretnetwork';
const secretWallets = {
  secretRelayer: 'secret1jqz2205er0d8657ugll98c462cyplkcqagku9h', 
};
const secretKontrol = 1
const secretDecimal = 1000000

async function checksecretBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/secretDecimal < secretKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/secret/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/secretDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/secret/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/secretDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region stride
const strideRpcUrl = 'https://rpc.cosmos.directory/stride';
const strideWallets = {
  strideRelayer: 'stride1jqz2205er0d8657ugll98c462cyplkcquxzfv8',
};
const strideKontrol = 1
const strideDecimal = 1000000

async function checkstrideBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[1].amount/strideDecimal < strideKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/stride/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[1].amount/strideDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/stride/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[1].amount/strideDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region celestia
const celestiaRpcUrl = 'https://rpc.cosmos.directory/celestia';
const celestiaWallets = {
  celestiaRelayer: 'celestia1jqz2205er0d8657ugll98c462cyplkcqw8n9zx', 
};
const celestiaKontrol = 1
const celestiaDecimal = 1000000

async function checkcelestiaBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/celestiaDecimal < celestiaKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/celestia/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/celestiaDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/celestia/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/celestiaDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion

//#region noble
const nobleRpcUrl = 'https://rpc.cosmos.directory/noble';
const nobleWallets = {
  nobleRelayer: 'noble1jqz2205er0d8657ugll98c462cyplkcqhwhaq9', 
};
const nobleKontrol = 1
const nobleDecimal = 1000000

async function checknobleBalance(walletName, walletAddress, rpcUrl) {
  try {
    // RPC'ye bağlanma
    const client = await SigningStargateClient.connectWithSigner(rpcUrl);

    // Cüzdanın mevcut bakiyesini kontrol et
    const balance = await client.getAllBalances(walletAddress);

    if (balance[0].amount/nobleDecimal < nobleKontrol) {
      getCurrentTime();
      console.log(`Cüzdan Adı: ${walletName}`);
      console.log('Cüzdan Adresi: https://www.mintscan.io/noble/address/' + walletAddress);
      console.log('Mevcut Bakiye : ' + balance[0].amount/nobleDecimal);
      console.log('--------------------------');
      await bot.telegram.sendMessage(chatID,"[" + walletName + "]" + "\n" +  "https://www.mintscan.io/noble/address/" + walletAddress + "\n" + "Mevcut Bakiye: " + balance[0].amount/nobleDecimal, { parse_mode: 'HTML' });
    }

  } catch (error) {
    getCurrentTime();
    console.error(`[${walletName}] Bir hata oluştu:`, error.message);
    //await bot.telegram.sendMessage(chatID,walletName + " icin bir hata olustu " + error.message, { parse_mode: 'HTML' });
  }
  //await new Promise(r => setTimeout(r, 2000));
}
//#endregion


// Şu anki zamanı string olarak döndüren yardımcı fonksiyon
function getCurrentTime() {
  const now = new Date();
  // UTC+3'e göre saat dilimini ayarla
  const utcOffset = 3;
  const offsetInMilliseconds = utcOffset * 60 * 60 * 1000;
  const localTime = new Date(now.getTime() + offsetInMilliseconds);

  // Sonucu konsola yazdır
  console.log(localTime.toISOString().slice(0, 19).replace("T", " "));
}

// Tüm cüzdanların bakiye kontrolü
async function checkAllBalances() {
  for (const [walletName, walletAddress] of Object.entries(osmosisWallets)) {
    await checkOsmosisBalance(walletName, walletAddress, osmosisRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(cosmosWallets)) {
    await checkCosmosBalance(walletName, walletAddress, cosmosRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(evmosWallets)) {
    await checkevmosBalance(walletName, walletAddress, evmosRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(axelarWallets)) {
    await checkaxelarBalance(walletName, walletAddress, axelarRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(umeeWallets)) {
    await checkumeeBalance(walletName, walletAddress, umeeRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(omniflixWallets)) {
    await checkomniflixBalance(walletName, walletAddress, omniflixRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(quicksilverWallets)) {
    await checkquicksilverBalance(walletName, walletAddress, quicksilverRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(archwayWallets)) {
    await checkarchwayBalance(walletName, walletAddress, archwayRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(auraWallets)) {
    await checkauraBalance(walletName, walletAddress, auraRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(injectiveWallets)) {
    await checkinjectiveBalance(walletName, walletAddress, injectiveRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(jackalWallets)) {
    await checkjackalBalance(walletName, walletAddress, jackalRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(junoWallets)) {
    await checkjunoBalance(walletName, walletAddress, junoRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(kavaWallets)) {
    await checkkavaBalance(walletName, walletAddress, kavaRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(kujiraWallets)) {
    await checkkujiraBalance(walletName, walletAddress, kujiraRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(gitopiaWallets)) {
    await checkgitopiaBalance(walletName, walletAddress, gitopiaRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(lunaWallets)) {
    await checklunaBalance(walletName, walletAddress, lunaRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(neutronWallets)) {
    await checkneutronBalance(walletName, walletAddress, neutronRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(secretWallets)) {
    await checksecretBalance(walletName, walletAddress, secretRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(strideWallets)) {
    await checkstrideBalance(walletName, walletAddress, strideRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(celestiaWallets)) {
    await checkcelestiaBalance(walletName, walletAddress, celestiaRpcUrl);
  }
  for (const [walletName, walletAddress] of Object.entries(nobleWallets)) {
    await checknobleBalance(walletName, walletAddress, nobleRpcUrl);
  }
}

// Belirli bir zaman aralığında bakiye kontrolü yapılması
setInterval(() => {
  checkAllBalances();
}, 300000);
