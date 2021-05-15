pragma solidity >=0.5.0 <0.8.0;

contract Storage {
    struct Item {
        string identity;
        string data;
    }

    mapping(string => Item) List;

    event DataSaved(string identity, string data);

    function get(string memory identity) public view returns (string memory) {
        Item memory _List = List[identity];

        return _List.data;
    }

    function set(string memory identity, string memory data) public {
        List[identity] = Item(identity, data);

        emit DataSaved(identity, data);
    }
}
