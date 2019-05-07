import React, { Component } from 'react';
import { 
  Grommet, 
  Box, 
  Button, 
  Collapsible, 
  Grid,
  Heading, 
  ResponsiveContext, 
  Layer,
  TextArea 
} from 'grommet';
import { Notification, FormClose } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      test: '#c922e6'
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

// const SimpleBox = () => (
//   <Box
//     direction="row-responsive"
//     justify="center"
//     align="center"
//     pad="xlarge"
//     background="dark-2"
//     gap="medium"
//   >
//     <Box
//       pad="large"
//       align="center"
//       background={{ color: "light-2", opacity: "strong" }}
//       round
//       gap="small"
//     >
//       <Attraction size="large" />
//       <Text>Party</Text>
//       <Anchor href="" label="Link" />
//       <Button label="Button" onClick={() => {}} />
//     </Box>
//     <Box pad="large" align="center" background="dark-3" round gap="small">
//       <Car size="large" color="light-2" />
//       <Text>Travel</Text>
//       <Anchor href="" label="Link" />
//       <Button label="Button" onClick={() => {}} />
//     </Box>
//   </Box>
// );

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
                <Grid
                  rows={['small', 'xsmall']}
                  columns={['small', 'small']}
                  gap="medium"
                  areas={[
                    { name: 'main', start: [0, 0], end: [1, 0] },
                    { name: 'yes', start: [0, 1], end: [0, 1] },
                    { name: 'no', start: [1, 1], end: [1, 1] },
                  ]}
                >
                  <Box gridArea="main" background="brand" pad="medium">
                  <Heading level="3" margin="xxsmall">Story Block 1</Heading>
                    <TextArea
                      placeholder='Edit this story block'
                      value={value}
                      onChange={event => this.setState({value: event.target.value})}
                    />
                  </Box>
                  <Box gridArea="yes" background="light-5" />
                  <Box gridArea="no" background="light-2" />
                </Grid>
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
