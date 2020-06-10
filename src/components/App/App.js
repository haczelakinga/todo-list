import React from 'react';
import styles from './App.scss';
import List from './../List/List';
import {pageContents, listData} from '../../data/dataStore';
import Creator from './../Creator/Creator';

class App extends React.Component {

  state = {
    lists: this.props.lists || [],
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            title:title,
            description:listData.description,
            image:listData.image,
            columns:listData.columns,
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List
          title={listData.title}
          description={listData.description}
          image={listData.image}
          columns={listData.columns}
        />
        <div>
            {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
            ))}
        </div>
        <div className={styles.creator}>
          <Creator text={'Add new list'} action={title => this.addList(title)}/>
        </div>
      </main>
    )
  }
}

export default App;
