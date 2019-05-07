import React, { Component } from 'react';
import { 
  Grommet, 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  ResponsiveContext, 
  Layer,
  TextArea 
} from 'grommet';
import { Notification, FormClose } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = props => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{
      left: 'medium',
      right: 'small',
      vertical: 'small'
    }}
    elevation='medium'
    style={{
      zIndex: '1'
    }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSideBar: false,
    value: ""
  };

  render() {
    const { showSideBar, value } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none'>
                  Magic Story Texts
              </Heading>
                <Button icon={<Notification />} onClick={() => this.setState(prevState => ({ showSideBar: !prevState.showSideBar }))} />
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <Heading margin="none">Story Block 1</Heading>
                  <Box pad='small'>
                    <TextArea
                      placeholder='Edit this story block'
                      value={value}
                      onChange={event => this.setState({value: event.target.value})}
                    />
                  </Box>
                  App Body
              </Box>
                {(!showSideBar || size !== 'small') ? (
                  <Collapsible direction='horizontal' open={showSideBar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      Sidebar
                  </Box>
                  </Collapsible>
                ) : (
                    <Layer>
                      <Box
                        background='light-2'
                        align='center'
                        justify='end'
                        direction='row'
                        tag='header'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSideBar: false })}
                        />
                      </Box>
                      <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                      >
                        Sidebar
                  </Box>
                    </Layer>
                  )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
