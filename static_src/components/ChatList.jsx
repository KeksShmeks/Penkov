import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <ListItem primaryText="Chat 1" 
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
                <ListItem primaryText="Chat 2" 
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
                <ListItem primaryText="Chat 3" 
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                rightIcon={<CommunicationChatBubble />} />
            </List>
        )
    }
}