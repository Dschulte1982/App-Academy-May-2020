import React from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    return (
      <li key={idx} id={idx} onClick={handleClick}>
        {title}
      </li>
    );
  })

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

class Folder extends React.Component {
  constructor() {
    super()

    this.state = {
      currentTab: 0
    }
  }

  selectTab = (idx) => {
    this.setState({ currentTab: idx });
  }

  render() {
    const folder = this.props.folders[this.state.currentTab];
    return (
      <div>
        <Headers titles={titles} currentTab={this.state.currentTab} selectTab={this.state.selectTab} />
        <h1>Folder</h1>
        <div className='tabs'>
          {this.folder}
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </div>
    )
  }


}

// Folder.defaultProps = {
//   Headers: { folder: { titles: [] } }
// }


export default Folder;
