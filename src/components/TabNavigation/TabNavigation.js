import React, { Component, Fragment } from 'react'
import { Container, Header, Title, Tabs, Tab, TabHeading, Button, Icon, Left, Right, Body, Text, Item, Input, Footer, FooterTab } from "native-base";
import Scene from '../../scenes'
import { t } from '../../language'

class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(isSearch) {
    this.setState({ isSearch })
  }

  


  render() {
    const { isSearch } = this.state
    return (
      <Container>
        <Header searchBar={isSearch} hasTabs>
          {
            isSearch ? (
              <Fragment>
                <Button transparent>
                  <Icon name='arrow-back' onPress={() => this.handleSearch(false)} />
                </Button>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder={t('search')} />
                  <Icon name="ios-people" />
                </Item>
                <Button transparent>
                  <Text>{t('search')}</Text>
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Left>
                  {/* <Button transparent>
                    <Icon name='arrow-back' onPress={Actions.pop} />
                  </Button> */}
                </Left>
                <Body>
                  <Title>{t('initial')}</Title>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.handleSearch(true)}>
                    <Icon name='search' />
                  </Button>
                  <Button transparent>
                    <Icon name='more' />
                  </Button>
                </Right>
              </Fragment>
            )
          }
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Scene.Home />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="speedometer" /></TabHeading>}>
            <Scene.About />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="settings" /></TabHeading>}>
            <Scene.Home />
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      // <View style={styles.flex(1)}>
      //   <Navbar
      //     title={t('initial')}
      //     leftContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
      //     rightContent={<IconButton type='flat' source={BACK} size={40} iconSize={30} onPress={Actions.pop} />}
      //   >
      //     <TabBar
      //       unselectedTintColor="#949494"
      //       tintColor="#33A3F4"
      //       barTintColor="white"
      //       hidden={this.state.hidden}
      //       style={styles.lineTop(1)}
      //     >
      //       <TabBar.Item
      //         title={t('home')}
      //         key="Home"
      //         selected={selectedTab === 'Home'}
      //         onPress={() => this.handleTab('Home')}
      //         data-seed="logId"
      //       >
      //         <Scene.Home />
      //       </TabBar.Item>
      //       <TabBar.Item
      //         title={t('optimizer')}
      //         key="Optimizer"
      //         selected={selectedTab === 'Optimizer'}
      //         onPress={() => this.handleTab('Optimizer')}
      //         data-seed="logId1"
      //       >
      //         <Scene.About />
      //       </TabBar.Item>
      //     </TabBar>
      //   </Navbar>
      // </View>
    )
  }
}

export default TabNavigation
