import React, { Component } from 'react'
import FriendCard from '../FriendsCollection/FriendCard'

export default class Friends extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      fullname: "",
      nickname: "",
      github: "",
      display: ""
    }
  }


  render() {
    return (
      <div>
        <h1>Friend</h1>
        <FriendCard />
        

      </div>
    )
  }
}
