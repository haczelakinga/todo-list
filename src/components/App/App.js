import React from 'react';
import styles from './App.scss';
import List from './../List/ListContainer';
// import {pageContents, listData} from '../../data/dataStore';
// import Creator from './../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {

  // state = {
  //   lists: [],
  // }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  // addList(title){
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           title:title,
  //           description:listData.description,
  //           image:listData.image,
  //           columns:listData.columns,
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* <List
          title={listData.title}
          description={listData.description}
          image={listData.image}
          columns={listData.columns}
        /> */}
        {/* <div>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={'Add new list'} action={title => this.addList(title)}/>
        </div> */}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;
