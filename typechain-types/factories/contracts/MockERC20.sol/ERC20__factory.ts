/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20,
  ERC20Interface,
} from "../../../contracts/MockERC20.sol/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ad338038062000ad38339810160408190526200003491620001f0565b8251620000499060039060208601906200007d565b5081516200005f9060049060208501906200007d565b506005805460ff191660ff9290921691909117905550620002b19050565b8280546200008b9062000275565b90600052602060002090601f016020900481019282620000af5760008555620000fa565b82601f10620000ca57805160ff1916838001178555620000fa565b82800160010185558215620000fa579182015b82811115620000fa578251825591602001919060010190620000dd565b50620001089291506200010c565b5090565b5b808211156200010857600081556001016200010d565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014b57600080fd5b81516001600160401b038082111562000168576200016862000123565b604051601f8301601f19908116603f0116810190828211818310171562000193576200019362000123565b81604052838152602092508683858801011115620001b057600080fd5b600091505b83821015620001d45785820183015181830184015290820190620001b5565b83821115620001e65760008385830101525b9695505050505050565b6000806000606084860312156200020657600080fd5b83516001600160401b03808211156200021e57600080fd5b6200022c8783880162000139565b945060208601519150808211156200024357600080fd5b50620002528682870162000139565b925050604084015160ff811681146200026a57600080fd5b809150509250925092565b600181811c908216806200028a57607f821691505b602082108103620002ab57634e487b7160e01b600052602260045260246000fd5b50919050565b61081280620002c16000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806342966c6811610081578063a0712d681161005b578063a0712d6814610195578063a9059cbb146101a8578063dd62ed3e146101bb57600080fd5b806342966c681461015857806370a082311461016d57806395d89b411461018d57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610126578063313ce5671461013957600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e391906105bb565b60405180910390f35b6100ff6100fa366004610657565b610274565b60405190151581526020016100e3565b61011860005481565b6040519081526020016100e3565b6100ff610134366004610681565b6102ed565b6005546101469060ff1681565b60405160ff90911681526020016100e3565b61016b6101663660046106bd565b61041b565b005b61011861017b3660046106d6565b60016020526000908152604090205481565b6100d6610493565b61016b6101a33660046106bd565b6104a0565b6100ff6101b6366004610657565b610511565b6101186101c93660046106f8565b600260209081526000928352604080842090915290825290205481565b600380546101f39061072b565b80601f016020809104026020016040519081016040528092919081815260200182805461021f9061072b565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b505050505081565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102dc9086815260200190565b60405180910390a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020908152604080832033845290915281208054839190839061032f9084906107ad565b909155505073ffffffffffffffffffffffffffffffffffffffff8416600090815260016020526040812080548492906103699084906107ad565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040812080548492906103a39084906107c4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161040991815260200190565b60405180910390a35060019392505050565b336000908152600160205260408120805483929061043a9084906107ad565b925050819055508060008082825461045291906107ad565b909155505060405181815260009033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a350565b600480546101f39061072b565b33600090815260016020526040812080548392906104bf9084906107c4565b92505081905550806000808282546104d791906107c4565b909155505060405181815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610488565b336000908152600160205260408120805483919083906105329084906107ad565b909155505073ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260408120805484929061056c9084906107c4565b909155505060405182815273ffffffffffffffffffffffffffffffffffffffff84169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016102dc565b600060208083528351808285015260005b818110156105e8578581018301518582016040015282016105cc565b818111156105fa576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461065257600080fd5b919050565b6000806040838503121561066a57600080fd5b6106738361062e565b946020939093013593505050565b60008060006060848603121561069657600080fd5b61069f8461062e565b92506106ad6020850161062e565b9150604084013590509250925092565b6000602082840312156106cf57600080fd5b5035919050565b6000602082840312156106e857600080fd5b6106f18261062e565b9392505050565b6000806040838503121561070b57600080fd5b6107148361062e565b91506107226020840161062e565b90509250929050565b600181811c9082168061073f57607f821691505b602082108103610778577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156107bf576107bf61077e565b500390565b600082198211156107d7576107d761077e565b50019056fea26469706673582212208837b2d6bf6e5633c02181ad6af96cf1be33937bac48ef7272407a82a6d09a3164736f6c634300080d0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
