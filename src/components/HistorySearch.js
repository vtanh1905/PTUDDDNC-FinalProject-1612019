import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { Req_Delete_History_Search } from '../reducers/course/API_Delete_History_Search'

function HistorySearch(props) {
  const { visible, data, textSearch, setTextSearch, Req_Delete_History_Search, refetchData } = props;
  const [dataReverse, setDataReverse] = useState(JSON.parse(JSON.stringify(data)).reverse())
  if (visible === false) {
    return <></>
  }
  const dataShow = []
  let count = 0;
  for (let i = 0; i < dataReverse.length; ++i) {
    if (dataReverse[i].content.indexOf(textSearch) !== -1 && dataReverse[i].content !== textSearch) {
      dataShow.push(dataReverse[i])
      ++count;
      if (count === 4) {
        break;
      }
    }
  }

  return (
    <>
      {
        dataShow.map((l, i) => (
          <ListItem
            key={i}
            title={l.content}
            bottomDivider
            chevron={
              <TouchableOpacity
                onPress={() => {
                  Req_Delete_History_Search(l.id)
                  setDataReverse(dataReverse.filter(item => item.id !== l.id))
                }}
              >
                <Icon
                  name='clear'
                  color='gray'
                />
              </TouchableOpacity>
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
  Req_Delete_History_Search
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(HistorySearch);
