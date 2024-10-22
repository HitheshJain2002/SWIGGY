import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>name: {name}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          click me:{count}
        </button>
        <h2>Location: Mangalore</h2>
        <h4>Contact: @hithesh.jain</h4>
      </div>
    );
  }
}

export default UserClass;
