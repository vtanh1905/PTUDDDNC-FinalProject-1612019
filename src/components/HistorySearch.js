import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
  },
  {
    name: 'Chris Jackson',
  },
]

function HistorySearch(props) {
  const { visible, data } = props;


  return (
    <>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            bottomDivider
            chevron={
              <Icon
                name='clear'
                color='gray'
                onPress={() => console.log('hello')} />
            }
            onPress={() => console.log(123)}
          />
        ))
      }
    </>
  )
}

export default HistorySearch
