import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
      Order by: Relevance
    </MenuButton>
    <MenuList>
      <MenuItem>Relevanve</MenuItem>
      <MenuItem>Date Added</MenuItem>
      <MenuItem>Name</MenuItem>
      <MenuItem>Release date</MenuItem>
      <MenuItem>Popularrity</MenuItem>
      <MenuItem>Average</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
