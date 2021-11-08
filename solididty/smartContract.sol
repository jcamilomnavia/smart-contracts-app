// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

contract P2 {

    struct Task {
        uint id;
        address payable vendor;
        uint energy;
        uint price;
    }

    Task[] tasks;
    uint nextId;
    event QUEUE(address buyer, uint watts);

    function createTask(uint _energy, uint _price) public {
        tasks.push(Task(nextId, payable(msg.sender), _energy, _price));
        nextId++;
    }


    function findIndex(uint _id) internal view returns (uint) {
        for (uint i = 0; i < tasks.length; i++) {
            if (tasks[i].id == _id) {
                return i;
            }
        }
        revert("Task not found");
    }

    function findBestBuy() public view returns (uint) {
        if(tasks.length > 0) {
            uint bestPrice = tasks[0].id;
            for (uint i = 0; i < tasks.length; i++) {
                if (tasks[i].price < tasks[bestPrice].price) {
                    bestPrice = tasks[i].id;
                }
            }
            return bestPrice;
        }
        revert("Good price not found");
    }


    function readTask(uint _id) public view returns (uint, uint, uint) {
        uint index = findIndex(_id);
        return (tasks[index].id, tasks[index].energy, tasks[index].price);
    }

    function deleteTask(uint _id) public {
        uint index = findIndex(_id);
        delete tasks[index];
    }

    function buy(uint _id) public payable{
        uint index = findIndex(_id);
        require(msg.value == tasks[index].price, 'amount to be paid');
        tasks[index].vendor.transfer(tasks[index].price);
        emit QUEUE(msg.sender, tasks[index].energy);
    }


}
