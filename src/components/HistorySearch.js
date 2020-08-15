import React from 'react'
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

function HistorySearch(props) {
  const { visible, data, textSearch, setTextSearch } = props;

  if (visible === false) {
    return <></>
  }
  const dataReverse = JSON.parse(JSON.stringify(data)).reverse();
  const dataResult = []
  let count = 0;
  for (let i = 0; i < dataReverse.length; ++i) {
    if (dataReverse[i].content.indexOf(textSearch) !== -1 && dataReverse[i].content !== textSearch) {
      dataResult.push(dataReverse[i])
      ++count;
      if (count === 4) {
        break;
      }
    }
  }

  return (
    <>
      {
        dataResult.map((l, i) => (
          <ListItem
            key={i}
            title={l.content}
            bottomDivider
            chevron={
              <Icon
                name='clear'
                color='gray'
                onPress={() => console.log('hello')} />
            }
            onPress={() => setTextSearch(l.content)}
          />
        ))
      }
    </>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {

};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(HistorySearch);
