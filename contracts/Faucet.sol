// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./MockERC20.sol";

contract Faucet is Ownable {
    address[] public tokens;

    constructor(address[] memory _tokenAddresses) {
        setTokens(_tokenAddresses);
    }

    function setTokens(address[] memory _tokenAddresses) public onlyOwner {
        tokens = _tokenAddresses;
    }

    function addToken(address _tokenAddress) external onlyOwner {
        tokens.push(_tokenAddress);
    }

    function claim() external {
        for (uint256 i = 0; i < tokens.length; i++) {
            MockERC20 mockToken = MockERC20(tokens[i]);
            uint256 amount = 10000 * 10**mockToken.decimals();
            mockToken.mint(amount);
            mockToken.transfer(msg.sender, amount);
        }
    }
}
