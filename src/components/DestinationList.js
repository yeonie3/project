import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  text-decoration: underline;
`;

function DestinationList({ destinations, onSelect }) {
    return (
        <List>
            {destinations.map((destination) => (
                <ListItem key={destination}>
                    <Button onClick={() => onSelect(destination)}>{destination}</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default DestinationList;