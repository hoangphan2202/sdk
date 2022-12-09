import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  KAI = 24,
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  TOMO = 88,
  TOMO_TESTNET = 89,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  CELO = 42220,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  ONUS = 1975,
  ONUS_TESTNET = 1945,
}


export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.KAI]: '0x64203f29f4d6a7e199b6f6afbe65f1fa914c7c4e',
  [ChainId.BSC_TESTNET]: '0xcc9944882df76302e06B1DC2dd62066e2e0Ef10F',
  [ChainId.BSC]: '0xcc9944882df76302e06B1DC2dd62066e2e0Ef10F',
  [ChainId.ONUS]: '0xA5DA4dC244c7aD33a0D8a10Ed5d8cFf078E86Ef3',
  [ChainId.ONUS_TESTNET]: '0xa0f52954e69c4f6c10091BdAD8e674179eD58149',
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.KAI]: '0x4829a2cb5b5cd2280b139796d23e1bea43f7caddf4203454607c5a9f3d9f95b6',
  [ChainId.BSC_TESTNET]: '0x5ca9aae9c919af7433454981db460759a69c442c68bc9c359a733c7e4d260f34',
  [ChainId.ONUS]: '0x8fd0691ee48e1b260e31c79ef938b4d7f6d2598391df758d51c03963db2e7c4e',
  [ChainId.ONUS_TESTNET]: '0x1b28b2849bc5c4717a234547632d291b7d118f7da395fc8c2b7ced6eb8c41b9c',
}yarn dev

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = {
  [ChainId.KAI]: JSBI.BigInt(9975),
  [ChainId.BSC_TESTNET]: JSBI.BigInt(9970),
}
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
