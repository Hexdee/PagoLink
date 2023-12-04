// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IUniswapV2Router02.sol";
import "./TransferHelper.sol";
import "./IERC20.sol";

contract PagoLink is Ownable {
    uint256 public slippage;
    address public swapRouterAddress;
    address public stableCoinAddress;

    event PaymentSuccessful(
        string indexed paymentId,
        address indexed payer,
        string indexed merchant,
        uint256 amount,
        address token
    );
    event routerUpdated(
        address proviousRouterAddress,
        address newRouterAddress
    );
    event stableCoinUpdated(
        address proviousStableCoinAddress,
        address newStableCoinAddress
    );
    event slippageUpdated(
        uint256 previousSlippageAddress,
        uint256 newSlippageAddress
    );

    constructor(
        address _stableCoinAddress,
        address _swapRouterAddress,
        uint256 _slippage
    ) {
        stableCoinAddress = _stableCoinAddress;
        swapRouterAddress = _swapRouterAddress;
        slippage = _slippage;
    }

    function makePayment(
        address _tokenAddress,
        uint256 _amount,
        string memory _merchant,
        string memory _paymentId
    ) public payable {
        address[] memory _path;
        _path = new address[](2);
        _path[0] = _tokenAddress;
        _path[1] = stableCoinAddress;
        uint256 _tokenAmount;

        require(_amount > 0, "Invalid payment amount");
        // require(bytes(_paymentId).length == 34, "Invalid payment id");

        if (_tokenAddress != stableCoinAddress && _tokenAddress != address(0)) {
            // Get the amount of token to swap
            _tokenAmount = requiredTokenAmount(_amount, _tokenAddress);

            TransferHelper.safeTransferFrom(
                _tokenAddress,
                msg.sender,
                address(this),
                _tokenAmount
            );

            // Swap to stableCoin
            _swap(_tokenAmount, _amount, _path);
        } else if (_tokenAddress == stableCoinAddress) {
            TransferHelper.safeTransferFrom(
                _tokenAddress,
                msg.sender,
                address(this),
                _amount
            );
        } else {
            _path[0] = IUniswapV2Router02(swapRouterAddress).WETH();
            _tokenAmount = requiredTokenAmount(
                _amount,
                IUniswapV2Router02(swapRouterAddress).WETH()
            );
            require(msg.value >= _tokenAmount, "Insufficient amount!");
            IUniswapV2Router02(swapRouterAddress).swapETHForExactTokens{
                value: _tokenAmount
            }(_amount, _path, address(this), block.timestamp);
        }

        emit PaymentSuccessful(
            _paymentId,
            msg.sender,
            _merchant,
            _amount,
            _tokenAddress
        );
    }

    function updateRouter(address _routerAddress) external onlyOwner {
        address _previousRouterAddress = swapRouterAddress;
        swapRouterAddress = _routerAddress;
        emit routerUpdated(_previousRouterAddress, _routerAddress);
    }

    function updateStableCoin(address _stableCoinAddress) external onlyOwner {
        address _previousStableCoinAddress = stableCoinAddress;
        stableCoinAddress = _stableCoinAddress;
        emit stableCoinUpdated(_previousStableCoinAddress, _stableCoinAddress);
    }

    function updateSlippage(uint256 _slippage) external onlyOwner {
        uint256 _previousSlippage = slippage;
        slippage = _slippage;
        emit slippageUpdated(_previousSlippage, _slippage);
    }

    // Get the require amount of token for a swap
    function requiredTokenAmount(
        uint256 _amountInUSD,
        address _token
    ) public view returns (uint256 _tokenAmount) {
        address[] memory _path;
        _path = new address[](2);
        _path[0] = _token;
        _path[1] = stableCoinAddress;
        uint256[] memory _tokenAmounts = IUniswapV2Router02(swapRouterAddress)
            .getAmountsIn(_amountInUSD, _path);
        _tokenAmount = _tokenAmounts[0] + ((_tokenAmounts[0] * slippage) / 100);
    }

    // Swap from tokens to a stablecoin
    function _swap(
        uint256 _tokenAmount,
        uint256 _amount,
        address[] memory _path
    ) internal returns (uint256[] memory _amountOut) {
        // Approve the router to swap token.
        TransferHelper.safeApprove(_path[0], swapRouterAddress, _tokenAmount);
        _amountOut = IUniswapV2Router02(swapRouterAddress)
            .swapTokensForExactTokens(
                _amount,
                _tokenAmount,
                _path,
                owner(),
                block.timestamp
            );
    }
}
