import React from 'react';
import styles from './List.scss';
import Hero from './../Hero/Hero';
import PropTypes from 'prop-types';
import Column from './../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        imgSrc: PropTypes.string.isRequired,
        children: PropTypes.node,
      }
      static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
    render() {
        return (
        <section className = {styles.component}>
            <Hero titleText = {this.props.title} imgSrc = {this.props.imgSrc}/>
            <div className={styles.description}>
                {this.props.children}
            </div>
            <div className = {styles.columns}>
                <Column colTitle = {'Animal'}/>
                <Column colTitle = {'Plants'}/>
                <Column colTitle = {'Mineral'}/>
            </div>
        </section>
        )
    }
}

export default List;