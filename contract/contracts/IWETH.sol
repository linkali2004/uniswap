//SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >= 0.7.0 < 0.9.0;

interface IWETH{
    function deposit() external payable;
    function withdrawal(uint) external;
    function totalSupply() external view returns(uint);
    function balanceOf(address) external view returns(uint);
    function transfer(address) external view returns(uint);
    function allowance(address,uint) external returns(bool);
    function approve(address,uint) external returns(bool);
    function transferFrom(address,address,uint) external returns(bool);

     event Transfer(address indexed,address indexed,uint);
     event Approve(address indexed,address indexed,uint);
}


