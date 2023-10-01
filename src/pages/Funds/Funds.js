import React from 'react';
import './Funds.css'; // Import the CSS file
// import TDay from '../../assets/Bills/Teachers Day.jpeg'
// import CIna from '../../assets/Bills/CSE Inaguration.jpeg'


class EventTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          eventName: 'Teachers Day',
          totalSpendAmount: 3000,
          billLink: 'https://drive.google.com/file/d/1vh_m9unjFCAJo-aKoZ8xp6fLvm1c3gXt/view?usp=sharing', // Link for the first event
        },
        {
          id: 2,
          eventName: 'CSE DEPT Inaguration',
          totalSpendAmount: 3122,
          billLink:'https://drive.google.com/file/d/1G5DoBE1m0j35Zs2KLrzEGacvBJV4CbLH/view?usp=sharing', // Link for the second event
        },
        {
          id: 3,
          eventName: 'Uploading Soon...',
          totalSpendAmount: 0,
          billLink: '', // No link for this event
        },
        // Add more events here as needed
      ],
    };
  }

  handleViewBill = (billLink) => {
    if (billLink) {
      // Open the link only if it is provided
      window.open(billLink, '_blank');
    } else {
      alert('No bill available for this event');
    }
  };

  render() {
    return (
      <div className="event-table-container"> {/* Apply CSS class for centering */}
        <div className="title-container">
          <h1 className="title">CSESA FUND INFO</h1>
          <h2 className="sub-heading">Everything is transparent</h2>
        </div>
        <table className="event-table"> {/* Apply CSS class for responsiveness */}
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Event Name</th>
              <th>Total Spend Amount</th>
              <th>View Total Bill</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.eventName}</td>
                <td>₹{row.totalSpendAmount}</td>
                <td>
                  <button onClick={() => this.handleViewBill(row.billLink)}>View Bill</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EventTable;
